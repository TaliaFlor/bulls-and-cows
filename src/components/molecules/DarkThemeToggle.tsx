import {useDarkMode} from "../../contexts/DarkThemeContext";
import React from "react";
import {IconButton} from "../atoms/IconButton";

export const DarkThemeToggle = () => {
    const {theme, toggleTheme} = useDarkMode();

    return <IconButton label={`Ativa ${theme.name}`} source={theme.icon} onPress={toggleTheme}/>;
}
