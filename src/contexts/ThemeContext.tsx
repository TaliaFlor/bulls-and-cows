import React, {createContext, useContext, useEffect, useState} from "react";
import {DarkTheme, LightTheme} from "../styles/theme";
import {useColorScheme} from "react-native";
import {Theme} from "../styles/interfaces/theme.interface";

interface Context {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<Context>({
    theme: LightTheme,
    toggleTheme: () => {
    }
});

type Props = {
    children: any;
}

export const ThemeProvider = (props: Props) => {
    const colorScheme = useColorScheme();   // dark | light | null

    /*
    * Enables changing the app theme dynamicly during runtime by
    * overriding the device default theme.
   */
    const [darkMode, setDarkMode] = useState<boolean>(colorScheme === 'dark');

    // Listening to changes of device appearance while in runtime
    useEffect(() => setDarkMode(colorScheme === 'dark'), [colorScheme]);

    const currentTheme: Context = {
        theme: darkMode ? DarkTheme : LightTheme,
        toggleTheme: () => setDarkMode(!darkMode) // Overriding the scheme value will cause re-render inside the context.
    }

    return (
        <ThemeContext.Provider value={currentTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

// Custom hook to get the theme object returns {darkMode, theme, setTheme}
export const useTheme = () => useContext(ThemeContext);
