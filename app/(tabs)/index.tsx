import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';


const Index = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/banner.png')} resizeMode="contain"  />
      <Text style={styles.title}>যাকাত ক্যালকুলেটর</Text>
      <Text style={styles.description}>আপনার যাকাত হিসাব করুন এবং পুরো পরিমাণ পেতে সাহায্য করুন।</Text>
      
      {/* Navigate to the Zakat Calculator page */}
      <Link style={styles.button} href="/(tabs)/Zakat">যাকাত ক্যালকুলেটর <FontAwesome name="calculator" size={16} color="white" /></Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 2,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
});

export default Index;
