import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DarkThemeProvider, useDarkMode} from "./src/contexts/DarkThemeContext";
import {Theme} from "./src/styles/interfaces/theme.interface";

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
    const {theme} = useDarkMode();

    return (
        <View style={styles(theme).container}>
            {/*<ThemeToggle/>*/}

            {/*<TextArea*/}
            {/*    text={text}*/}
            {/*    onChangeText={onChangeText}*/}
            {/*/>*/}
        </View>
    );
}

export default function App() {
    return (
        <DarkThemeProvider>
            <VogaisConsoantes/>
        </DarkThemeProvider>
    );
}
