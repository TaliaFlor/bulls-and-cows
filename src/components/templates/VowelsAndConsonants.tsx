import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {InputSession} from "../organisms/InputSession";
import {DisplayListSession} from "../organisms/DisplayListSession";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export const VowelsAndConsonants = () => {
    const [input, onChangeInput] = useState('');

    return (
        <View style={styles.container}>
            <InputSession
                input={input}
                onChangeInput={onChangeInput}
                onPressButton={}
            />

            <DisplayListSession/>
        </View>
    );
};
