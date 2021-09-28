import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {DarkThemeToggle} from "../molecules/DarkThemeToggle";
import {PRIMARY_COLOR} from "../../styles/theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: '1em',
        paddingVertical: '1.5em',
        // @ts-ignore:disable-next-line
        borderRadius: '0.15em'
    },
    label: {
        color: 'white',
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
