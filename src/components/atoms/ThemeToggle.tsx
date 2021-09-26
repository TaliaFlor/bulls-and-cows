import {useTheme} from "../../contexts/ThemeContext";
import {Switch} from "react-native";
import React from "react";

export const ThemeToggle = () => {
    const {toggleTheme, darkMode} = useTheme();

    return (
        <Switch value={darkMode} onValueChange={() => toggleTheme()}/>
    );
}
