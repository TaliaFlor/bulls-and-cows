import {StyleSheet, TextInput} from "react-native";
import React from "react";
import {useDarkMode} from "../../contexts/DarkThemeContext";
import {Theme} from "../../styles/interfaces/theme.interface";

export type InputProps = {
    placeholder: string;
    input: number;
    onChangeInput: (text: number) => void;
}


const styles = (theme: Theme) => StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '25em',
        height: '3em',
        // @ts-ignore:disable-next-line
        borderRadius: '0.5em',
        borderColor: theme.id === 'dark' ? theme.surfaceShades?.darker?.one : theme.surfaceShades?.lighter?.one,
        color: theme.surfaceColor,
        padding: '0.75em',
        backgroundColor: theme.id === 'dark' ? theme.backgroundShades?.lighter?.one : theme.backgroundShades?.darker?.one,
    }
});

export const TextArea = (props: InputProps) => {
    const {theme} = useDarkMode();

    // @ts-ignore
    return (
        <TextInput
            value={props.input}
            onChangeText={props.onChangeInput}
            placeholder={props.placeholder}
            multiline
            scrollEnabled={false}
            keyboardType="numeric"
            maxLength={4}
            textAlignVertical='center'
            style={styles(theme).input}
            returnKeyType='send'
        />
    );
};
