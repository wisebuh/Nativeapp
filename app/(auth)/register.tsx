import { View, Text, Pressable, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react'
import CustomInput from '@/components/CustomAuth/CustomInput'
import CustomButton from '@/components/CustomAuth/CustomButton'
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [isLoading, setIsLoading] = useState(false) // 👈 added

  const { name, email, password, confirmPassword } = form
  const createUser = useMutation(api.users.createUser);

  const handleSubmit = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setIsLoading(true); // 👈 fixed

      const user = await createUser({
        name,
        email,
        password,
        isActive: true,
      });

      console.log("User created:", user);
      Alert.alert("Success", "Account created successfully");
      router.replace("/signIn");

    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setIsLoading(false); // 👈 fixed
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ padding: 20, gap: 20 }}>
          <CustomInput
            placeholder='Enter your Full Name'
            label="Name"
            placeholderTextColor='gray'
            value={name}
            onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
          />
          <CustomInput
            placeholder='Enter your email'
            label="Email"
            placeholderTextColor='gray'
            value={email}
            onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
            keyboardType='email-address'
          />
          <CustomInput
            placeholder='password'
            placeholderTextColor='gray'
            label='Password'
            value={password}
            onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
            secureTextEntry={true}
          />
          <CustomInput
            placeholder='confirm password'
            placeholderTextColor='gray'
            label='Confirm Password'
            value={confirmPassword}
            onChangeText={(text) => setForm((prev) => ({ ...prev, confirmPassword: text }))}
            secureTextEntry={true}
          />

          <CustomButton title='Sign Up' onPress={handleSubmit} isLoading={isLoading} /> {/* 👈 fixed */}

          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "600" }}>Already have an account?</Text>
            <Pressable>
              {({ pressed }) => (
                <Link style={{ color: "red", fontSize: 17, fontWeight: "600", opacity: pressed ? 0.5 : 1 }} href="/signIn">Sign In</Link>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}