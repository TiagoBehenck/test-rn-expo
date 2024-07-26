import { useCallback, useImperativeHandle, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

interface InputProps extends React.ComponentProps<typeof TextInput> {
    iconName: keyof typeof Ionicons.glyphMap;
    placeholder: string;
    isPassword?: boolean;
}
export default function Input({ iconName, placeholder,  isPassword = false, ...props }: InputProps) {
    const inputElement = useRef<any>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, [])

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

    return (
        <View style={[
                styles.inputContainer,
                isFocused && styles.inputContainerFocused,
            ]}>
            <Ionicons
                name={iconName}
                style={[
                    styles.icon,
                    isFocused && styles.iconFocused,
                ]}
                size={20}
            />
            <TextInput
                ref={inputElement}
                style={[styles.textInput]}
                placeholder={placeholder}
                placeholderTextColor="#585857"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={isPassword}
                {...props}
            />
        </View>
    )
}
