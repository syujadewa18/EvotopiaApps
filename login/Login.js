import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Login({ onLogin }) {
  const handleLogin = () => {
    // You can add logic here to retrieve the username and password
    const username = "user"; // Replace with actual input or logic
    const password = "password"; // Replace with actual input or logic
    onLogin(username, password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/evotopia1.png')} // Replace with the path to your image
        style={styles.logo}
      />
      <Text style={styles.paragraph}>Enter your credentials to access the app.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#e8074e',
    borderRadius: 10,
    paddingVertical: 15,
    width: '80%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
