import { View, Text, Pressable, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react'
import CustomInput from '@/components/CustomAuth/CustomInput'
import CustomButton from '@/components/CustomAuth/CustomButton'
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function SignIn() { // ✅ capitalized
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false) // ✅ consistent naming
  const loginUser = useMutation(api.users.loginUser);
  const { email, password } = form

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      setIsSubmitting(true);

      const user = await loginUser({ email, password });

      console.log("Logged in:", user);
      Alert.alert("Success", "Welcome back!");
      router.replace("/");

    } catch (error: any) {
      Alert.alert("Error", error.message || "Login failed");
    } finally {
      setIsSubmitting(false); // ✅ fixed
    }
  };

  return (
    <KeyboardAvoidingView // ✅ prevents shaking
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ padding: 20, gap: 20 }}>

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

          <Link
            href="/(auth)/forgotpassword"
            style={{ color: "blue", fontSize: 17, fontWeight: "600", alignSelf: "flex-end" }} // ✅ fixed
          >
            Forgot Password?
          </Link>

          <CustomButton title='Sign In' onPress={handleLogin} isLoading={isSubmitting} /> {/* ✅ fixed */}

          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "600" }}> {/* ✅ fixed */}
              Don't have an account?
            </Text>
            <Pressable>
              {({ pressed }) => (
                <Link
                  style={{ color: "red", fontSize: 17, fontWeight: "600", opacity: pressed ? 0.5 : 1 }} // ✅ fixed
                  href="/register"
                >
                  Sign Up
                </Link>
              )}
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}