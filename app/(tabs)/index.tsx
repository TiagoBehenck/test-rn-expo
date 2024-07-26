import { StyleSheet, View, SafeAreaView } from "react-native";

import { CarouselComponent } from "@/components/Carousel";
import Input from "@/components/Input/input";
import { ProductCard } from "@/components/ProductCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ paddingHorizontal: 8 }}>
          <Input placeholder="Pesquisar" iconName="search-outline"/>
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
  lineSeparator: {
    height: 1,
    backgroundColor: '#EBF0FF', 
    marginVertical: 1,
  },
});