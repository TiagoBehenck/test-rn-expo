import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 wrapperTitle: { 
     flexDirection: 'row', 
     justifyContent: 'space-between', 
     padding: 16, 
     marginTop: 16
 },
 title: {
     fontFamily: 'PoppinsBold', 
     fontWeight: 'bold', 
     fontSize: 14
 },
 subtitle: { 
     fontFamily: 'PoppinsBold', 
     fontWeight: 'bold', 
     fontSize: 14, 
     color: '#F18F35'
 },
 wrapperProduct: { 
     paddingHorizontal: 16
 },
 border: { 
     borderWidth: 0.5, 
     width: 141, 
     borderColor: '#EBF0FF', 
     padding: 16, 
     borderRadius: 1
 },
 image: { 
     width: 109, 
     height: 109, 
     borderRadius: 10
 },
 titleProduct: { 
     fontFamily: 'PoppinsBold', 
     fontWeight: 'bold', 
     fontSize: 12, 
     marginTop: 16
 },
 price: { 
     fontFamily: 'Poppins', 
     fontWeight: '500', 
     fontSize: 14, 
     marginTop: 8,
     color: '#F18F35'
 },
 discount: { 
     flexDirection: 'row', 
     justifyContent: 'space-between', 
     marginTop: 16
 },
 discountText: { 
     fontFamily: 'Poppins', 
     fontWeight: '400', 
     fontSize: 10, 
     color: '#585857', 
     textDecorationLine: 'line-through'
 },
 discountTextRight: { 
     fontFamily: 'Poppins', 
     fontWeight: '700', 
     fontSize: 10, 
     color: '#CC31A3'
 },
 wrapperButton: { 
     flexDirection: 'row', 
     justifyContent: 'space-between', 
     marginTop: 12, 
     height: 24
 },
 minus: { 
     flex: 1, 
     borderWidth: 0.5, 
     justifyContent: 'center', 
     alignItems: 'center', 
     borderRadius: 1, 
     borderColor: '#EBF0FF'
 },
 minusText: { 
     fontFamily: 'Poppins', 
     fontWeight: 400, 
     fontSize: 16, 
     color: '#9098B1'
 },
 quantity: {
    backgroundColor: '#EBF0FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 quantityText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 14,
 },
 plus: { 
     flex: 1, 
     borderWidth: 0.5, 
     justifyContent: 'center', 
     alignItems: 'center', 
     borderRadius: 1, 
     borderColor: '#EBF0FF'
 },
 plusText: { 
     fontFamily: 'Poppins', 
     fontWeight: 400, 
     fontSize: 16, 
     color: '#9098B1'
 }
})