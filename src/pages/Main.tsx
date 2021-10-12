import React from "react";
import {useDarkMode} from "../contexts/DarkThemeContext";
import {StyleSheet, View} from "react-native";
import {HeaderBar} from "../components/organisms/HeaderBar";
import {Body} from "../components/templates/Body";
import {Theme} from "../styles/interfaces/theme.interface";

const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.backgroundColor,
        gap: '3em',
    },
});

export const Main = () => {
    const {theme} = useDarkMode();

    return (
        <View style={styles(theme).container}>
            <HeaderBar/>
            <Body/>
        </View>
    );
};
