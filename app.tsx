// App.tsx
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Burada giriş mantığınızı ekleyin
    console.log('Login pressed', username, password);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://raw.githubusercontent.com/hakanovski/CoolPool/main/coolpool_main_login_bg.jpeg' }} // GitHub'dan alınan doğrudan resim URL'si
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 10,
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#1E90FF',
  },
});

const App = () => {
  return (
    <LoginScreen />
  );
};

export default App;
