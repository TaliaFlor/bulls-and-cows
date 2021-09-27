import {StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";
import {BORDER} from "../../styles/constants";
import {useDarkMode} from "../../contexts/DarkThemeContext";
import {Theme} from "../../styles/interfaces/theme.interface";

export type InputProps = {
    text: string;
    onChangeText: (text: string) => void;
}


const styles = (theme: Theme) => StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '25em',
        // @ts-ignore:disable-next-line
        borderRadius: BORDER.radius,
        borderColor: theme.surfaceColor,
        color: theme.surfaceColor,
        padding: '0.75em',
        backgroundColor: theme.backgroundColor,
    }
});

export const TextArea = (props: InputProps) => {
    const {theme} = useDarkMode();

    const [height, setHeight] = useState(0);

    return (
        <TextInput
            value={props.text}
            onChangeText={props.onChangeText}
            placeholder="Digite algo aqui..."
            multiline
            scrollEnabled={false}
            textAlignVertical='top'
            onContentSizeChange={event => setHeight(event.nativeEvent.contentSize.height)}
            style={[styles(theme).input, {height: Math.max(100, height)}]}
            returnKeyType='send'
        />
    );
};
