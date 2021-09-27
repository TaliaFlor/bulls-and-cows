import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeProvider, useTheme} from "./src/contexts/ThemeContext";
import {Theme} from "./src/styles/interfaces/theme.interface";
import {ThemeToggle} from "./src/components/molecules/ThemeToggle";

const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.surfaceColor,
        backgroundColor: theme.backgroundColor,
    },
});


function VogaisConsoantes() {
    const [text, onChangeText] = useState<string>('');
    const {theme} = useTheme();

    return (
        <View style={styles(theme).container}>
            {/*<TextArea*/}
            {/*    text={text}*/}
            {/*    onChangeText={onChangeText}*/}
            {/*/>*/}
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
