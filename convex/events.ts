import {mutation, query} from "./_generated/server";
import {v,ConvexError} from "convex/values";
import { Id } from "./_generated/dataModel";

export const createEvent = mutation({
    args:{
        title:v.string(),   
        content:v.string(),
        authorId:v.id("users")
    },  
    handler:async (ctx,{title,content,authorId})=>{
        const event = await ctx.db.insert("events",{
            title,content,authorId
        })
        return event
    }
});

export const getEvents = query((ctx) => {
  return ctx.db.query("events").order('desc').collect();
});

export const getEventById = query({
    args: {
        id: v.id("events")
    },
    handler: async (ctx, { id }) => {
        const event = await ctx.db.get(id);
        return event;
    }
});