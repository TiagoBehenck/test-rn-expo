import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from './styles'
import { useCountStore } from "@/state/hooks/cart";

export function ProductCard() {
    const { increment, decrement, count } = useCountStore()

    return (
        <>
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}>Super Promo</Text>
                <Text style={styles.subtitle}>Ver Mais</Text>
            </View>
            <View style={styles.wrapperProduct}>
                <View style={styles.border} >
                <Image 
                    source={require('../../assets/images/astro.png')}
                    style={styles.image}
                />
                <Text style={styles.titleProduct}>
                    Meteorite Malt
                </Text>
                <Text style={styles.price}>
                    R$ 118,04
                </Text>
            
                <View style={styles.discount}>
                    <Text style={styles.discountText}>
                        $155,32
                    </Text>
                    <Text style={styles.discountTextRight}>
                        24% off
                    </Text>
                </View>

                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.minus} onPress={() => decrement(1)} disabled={count === 0}>
                            <Text style={styles.minusText}> - </Text>
                        </TouchableOpacity>

                        <View style={styles.quantity}>
                            <Text style={styles.quantityText}> {count} </Text>
                        </View>
                        <TouchableOpacity style={styles.plus} onPress={() => increment(1)}>
                            <Text style={styles.plusText}> + </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}