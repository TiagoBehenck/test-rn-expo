import * as React from "react";
import { Dimensions, Image, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
 
const PAGE_WIDTH = Dimensions.get("window").width;
 
const data = [
  require('../../assets/images/astro.png'),
  require('../../assets/images/cosmic.png'),
  require('../../assets/images/meterite.png'),
  require('../../assets/images/solar.png'),
  require('../../assets/images/void.png'),
];

export function CarouselComponent() {
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);
 
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  };

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        ref={ref}
        style={{ width: PAGE_WIDTH }}
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={data}
        loop
        {...baseOptions}
        renderItem={({ index }) => (
          <View>
            <Image
              source={data[index]}
              style={{
                width: PAGE_WIDTH,
                height: PAGE_WIDTH * 0.6,
                padding: 16,
                borderRadius: 16,
                justifyContent: "center",
              }}
            />
          </View>
        )}
      />

      <Pagination.Basic<{ color: string }>
        progress={progress}
        data={data.map((index) => ({ color: data[index] }))}
        size={8}
        dotStyle={{
          borderRadius: 100,
          backgroundColor: "#EBF0FF",
          marginTop: PAGE_WIDTH * 0.6,
          marginHorizontal: 2,
        }}
        activeDotStyle={{
          backgroundColor: "#F18F35",
        }}
        onPress={onPressPagination}
      />
    </View>
  );
}
