import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextArea} from "./src/components/atoms/TextArea";
import {ThemeProvider, useTheme} from "./src/contexts/ThemeContext";
import {Theme} from "./src/styles/interfaces/theme.interface";
import {ThemeToggle} from "./src/components/atoms/ThemeToggle";

const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.backgroundColor,
    },
});


function VogaisConsoantes() {
    const [text, onChangeText] = useState<string>('');
    const {theme} = useTheme();

    return (
        <View style={styles(theme).container}>
            <TextArea
                text={text}
                onChangeText={onChangeText}
            />
            <ThemeToggle/>
        </View>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <VogaisConsoantes/>
        </ThemeProvider>
    );
}
