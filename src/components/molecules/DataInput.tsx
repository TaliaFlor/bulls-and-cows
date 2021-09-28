import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {TextArea} from "../atoms/TextArea";
import {ActionButton} from "../atoms/ActionButton";
import {COLORS} from "../../styles/constants";

type DataInputProps = {
    label: string;
    textPlaceholder: string;
    input: string;
    onChangeInput: (text: string) => void;
    buttonTitle: string;
    onPressButton: () => void;
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        // @ts-ignore
        gap: '1em',
    },
    label: {
        color: COLORS.primary,
        // @ts-ignore:disable-next-line
        fontSize: '1em',
    },
    buttonContainer: {
        alignSelf: 'flex-end'
    }
});

export const DataInput = (props: DataInputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextArea
                placeholder={props.textPlaceholder}
                input={props.input}
                onChangeInput={props.onChangeInput}
            />
            <View style={styles.buttonContainer}>
                <ActionButton title={props.buttonTitle} onPress={props.onPressButton}/>
            </View>
        </View>
    );
};
