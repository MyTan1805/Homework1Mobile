import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    router.push({ 
      pathname: "/profile", 
      params: { message: "Successfully logged in" }
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#A9A9A9"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A9A9A9"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F2F3', 
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
  },
  content: {
    paddingHorizontal: 30, 
  },
  inputContainer: {
    marginBottom: 25, 
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(150, 53, 150, 1)', 
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(150, 53, 150, 1)',
    borderRadius: 15, 
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#FFFFFF', 
  },
  button: {
    backgroundColor: '#202A71',
    paddingVertical: 15,
    borderRadius: 15, 
    alignItems: 'center',
    marginTop: 30, 
    width: '45%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginScreen;