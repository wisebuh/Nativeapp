import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await hashPassword(password) === hash;
}

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, { name, email, password, isActive }) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await hashPassword(password);

    return await ctx.db.insert("users", {
      name,
      email,
      password: hashedPassword,
      isActive: isActive ?? false,
    });
  },
});

export const loginUser = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, { email, password }) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    if (!user) throw new Error("Invalid email or password");

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    return user;
  },
});

export const getUsers = query((ctx) => {
  return ctx.db.query("users").order("desc").collect();
});

export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();
  },
});

export const updateUserStatus = mutation({
  args: {
    id: v.id("users"),
    isActive: v.boolean(),
  },
  handler: async (ctx, { id, isActive }) => {
    return await ctx.db.patch(id, { isActive }); // ✅ fixed
  },
});

export const deleteUser = mutation({
  args: { id: v.id("users") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id); // ✅ fixed
    return { success: true };
  },
});

export const updateUserPassword = mutation({
  args: {
    id: v.id("users"),
    newPassword: v.string(),
  },
  handler: async (ctx, { id, newPassword }) => {
    const hashedPassword = await hashPassword(newPassword); // ✅ now hashed
    return await ctx.db.patch(id, { password: hashedPassword }); // ✅ fixed
  },
});

