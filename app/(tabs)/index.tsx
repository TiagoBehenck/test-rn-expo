import { CarouselComponent } from '@/components/Carousel';
import { Input } from '@/components/Input';
import { ProductCard } from '@/components/ProductCard';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.input}>
          <Input placeholder="Pesquisar" iconName="search-outline" onChange={(e) => setSearch(e.nativeEvent.text)} />
        </View>
        
      <View style={styles.lineSeparator} />
        <CarouselComponent />
        <ProductCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  wrapper: { 
    marginTop: 32,
  },
  input: { 
    marginHorizontal: 8,
  },
  lineSeparator: {
    height: 1,
    backgroundColor: '#EBF0FF', 
    marginVertical: 1,
  },
});