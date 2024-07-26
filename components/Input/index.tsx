import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { useState } from "react";

import { styles } from "./styles";


interface InputProps extends React.ComponentProps<typeof TextInput>{
    iconName: keyof typeof Ionicons.glyphMap;
    placeholder: string;
    isPassword?: boolean;
}

export function Input({ iconName, placeholder, isPassword = false, ...props }: InputProps) { 
    const [isFocused, setIsFocused] = useState(false);
    
    const handleInputBlur = () => { 
        setIsFocused(false);
    }

    const handleInputFocus = () => { 
        setIsFocused(true);
    }

    return (
        <View style={[
            styles.inputContainer,
            isFocused && styles.inputContainerFocused,
        ]}>
            <Ionicons 
                name={iconName}
                size={20}
                style={[
                    styles.icon,
                    isFocused && styles.iconFocused,
                ]}
            />
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                secureTextEntry={isPassword}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props}
            />
        </View>
    )
}