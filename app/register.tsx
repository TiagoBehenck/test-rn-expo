import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RegisterFormScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/images/logo.png")} />
            <Text style={styles.title}>Nebula Nectar</Text>

            <Input placeholder="Nome Completo" iconName="person-outline" />
            <Input placeholder="E-mail" iconName="mail-outline" />
            <Input placeholder="Senha" iconName="lock-closed-outline" />
            <Input placeholder="Senha (confirmar)" iconName="lock-closed-outline" />
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                Já tem conta?
                <Link href="/" style={styles.signIn}> Faça o login </Link>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 8,
        backgroundColor: "#fff",
    },
    logo: { 
        width: 72,
        height: 72,
        marginBottom: 16,
        alignSelf: 'center',
    },
    title: { 
        fontSize: 16,
        marginBottom: 16,
        alignSelf: 'center',
        fontFamily: 'PoppinsBold'
    },
    button: { 
        backgroundColor: '#F18F35',
        borderRadius: 5,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        marginBottom: 16,
        marginTop: 16,
        fontFamily: 'Poppins',
      },
    buttonText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'PoppinsBold'
      }, 
    text: { 
        alignSelf: 'center',
        fontFamily: 'Poppins',
    },
    signIn: { 
        color: '#F18F35',
        fontFamily: 'PoppinsBold'
      },
})