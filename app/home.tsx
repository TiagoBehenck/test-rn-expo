import { CarouselComponent } from "@/components/Carousel";
import Input from "@/components/Input/input";
import { useRef } from "react";
import { Dimensions, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";


const data = [
  require('../assets/images/astro.png'),
  require('../assets/images/cosmic.png'),
  require('../assets/images/meterite.png'),
  require('../assets/images/solar.png'),
  require('../assets/images/void.png'),
];
const width = Dimensions.get("window").width;

export default function HomeScreen() {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ paddingHorizontal: 8 }}>
        <Input placeholder="Pesquisar" iconName="search-outline"/>
        </View>
        <View style={styles.lineSeparator} />
        <CarouselComponent />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginTop: 16 }}>
          <Text style={{ fontFamily: 'PoppinsBold', fontWeight: 'bold', fontSize: 14 }}>Super Promo</Text>
          <Text style={{ fontFamily: 'PoppinsBold', fontWeight: 'bold', fontSize: 14, color: '#F18F35' }}>Ver Mais</Text>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ borderWidth: 0.5, width: 141, borderColor: '#EBF0FF', padding: 16, borderRadius: 1 }} >
          <Image source={require('../assets/images/astro.png')} style={{ width: 109, height: 109, borderRadius: 10 }} />
          <Text style={{ fontFamily: 'PoppinsBold', fontWeight: 'bold', fontSize: 12, marginTop: 16 }}>Meteorite Malt</Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 14, marginTop: 8 }}>R$ 118,04</Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <Text style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 10, color: '#585857', textDecorationLine: 'line-through' }}>$155,32</Text>
            <Text style={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: 10, color: '#CC31A3' }}>24% off</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, height: 24 }}>
            <TouchableOpacity style={{ flex: 1, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderRadius: 1, borderColor: '#EBF0FF' }}>
              <Text style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 16, color: '#9098B1' }}> - </Text>
              
            </TouchableOpacity>
            <View style={{ backgroundColor: '#EBF0FF', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 14 }}> 1 </Text>

            </View>
            <TouchableOpacity style={{ flex: 1, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', borderRadius: 1, borderColor: '#EBF0FF' }}>
              <Text style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 16, color: '#9098B1' }}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
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