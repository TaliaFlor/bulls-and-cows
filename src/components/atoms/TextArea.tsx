import {StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";
import {useDarkMode} from "../../contexts/DarkThemeContext";
import {Theme} from "../../styles/interfaces/theme.interface";

export type InputProps = {
    placeholder: string;
    input: string;
    onChangeInput: (text: string) => void;
}


const styles = (theme: Theme) => StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '25em',
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

    const [height, setHeight] = useState(0);

    return (
        <TextInput
            value={props.input}
            onChangeText={props.onChangeInput}
            placeholder={props.placeholder}
            multiline
            scrollEnabled={false}
            textAlignVertical='top'
            onContentSizeChange={event => setHeight(event.nativeEvent.contentSize.height)}
            style={[styles(theme).input, {height: Math.max(100, height)}]}
            returnKeyType='send'
        />
    );
};
