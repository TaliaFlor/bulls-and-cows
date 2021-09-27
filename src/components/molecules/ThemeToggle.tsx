import {useTheme} from "../../contexts/ThemeContext";
import React from "react";
import {IconButton} from "../atoms/IconButton";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <IconButton source={theme.icon} onPress={toggleTheme}/>
    );
}
