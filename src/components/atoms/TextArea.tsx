import {StyleSheet, TextInput} from "react-native";
import React from "react";
import {BORDER} from "../../styles/constants";
import {useTheme} from "../../contexts/ThemeContext";
import {Theme} from "../../styles/interfaces/theme.interface";

export type InputProps = {
    text: string;
    onChangeText: (text: string) => void;
}


const styles = (theme: Theme) => StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '25em',
        height: '5em',
        borderRadius: BORDER.radius,
        color: theme.textColor
    }
});

export const TextArea = (props: InputProps) => {
    const {theme} = useTheme();

    return (
        <TextInput
            style={styles(theme).input}
            value={props.text}
            onChangeText={props.onChangeText}
            placeholder="Digite algo aqui..."
        />
    );
};
