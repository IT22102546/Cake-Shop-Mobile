import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function OnBoardScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#FFD1E0', '#FFFFFF']}
      style={styles.container}
    >
      {/* Logo and OB Text Section */}
      <View style={styles.logoSection}>
        
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/874663044/vector/ice-cream-icon.jpg?s=612x612&w=0&k=20&c=dnF9CMtL5zJ_Fy7KEJKXBPbdL_96TyrQnHkoerz8uks=' }}
          style={styles.logo}
        />
        <Text style={styles.obText}>OB</Text>
      </View>

      {/* HAND MAKERS with Lines */}
      <View style={styles.lineAndText}>
        <View style={styles.line} />
        <Text style={styles.logoText}>HAND MAKERS</Text>
        <View style={styles.line} />
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>Taste the Love in Every Bite</Text>

      {/* Dessert Images */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHc6Mi_7Uy5mi1AX9_TF3p1HpXdtYXZ6jI_bEMcDG5BBggaBtzs8b3kao8ZzVEJHo03k&usqp=CAU',
          }}
          style={styles.dessertImage}
        />
      </View>

      {/* GO Button */}
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  obText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#8B0000',
    marginRight: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  lineAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#8B0000',
    width: 40,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B0000',
    marginHorizontal: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#8B0000',
    textAlign: 'center',
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dessertImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  goButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 20,
  },
  goButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
