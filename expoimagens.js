import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400'
];

export default function App() {
  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={nextImage} activeOpacity={0.8}>
        <Image source={{ uri: images[index] }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.hint}>Toque na imagem para trocar ({index + 1}/{images.length})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  image: { width: 320, height: 213, borderRadius: 8, marginBottom: 12 },
  hint: { color: '#444' }
});
