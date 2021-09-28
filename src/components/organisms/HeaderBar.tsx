import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {DarkThemeToggle} from "../molecules/DarkThemeToggle";
import {COLORS} from "../../styles/constants";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    label: {
        color: COLORS.primary,
        fontWeight: 'bold',
        // @ts-ignore:disable-next-line
        fontSize: '1.75em',
    },
});

export const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Vogais & Consoantes</Text>
            <DarkThemeToggle/>
        </View>
    );
};
