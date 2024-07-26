import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainerFocused: { 
      borderColor: '#F18F35',
    },
    inputContainer: { 
      height: 48,
      borderWidth: 1,
      width: '100%',
      borderColor: '#EBF0FF',
      marginBottom: 8,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      fontFamily: 'Poppins',
    },
    icon: { 
      marginHorizontal: 8,
    },
    iconFocused: { 
      color: '#F18F35',
    },
    textInput: {
      fontFamily: 'Poppins',
      width: '100%',
    }
  });