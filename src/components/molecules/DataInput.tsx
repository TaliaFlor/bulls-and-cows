import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {TextArea} from "../atoms/TextArea";
import {ActionButton} from "../atoms/ActionButton";
import {PRIMARY_COLOR} from "../../styles/theme";
import {StrokeButton} from "../atoms/StrokeButton";

type DataInputProps = {
    label: string;
    textPlaceholder: string;
    input: string;
    onChangeInput: (text: string) => void;
    buttonTitle: string;
    onPressButton: () => void;
    buttonDisabled: boolean;
    resetButtonTitle: string;
    onPressResetButton: () => void;
    resetButtonDisabled: boolean;
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
        color: PRIMARY_COLOR,
        // @ts-ignore
        fontSize: '1em',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        // @ts-ignore
        gap: '13.4em',
    },
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
            <View style={styles.buttonsContainer}>
                <StrokeButton title={props.resetButtonTitle} onPress={props.onPressResetButton}
                              disabled={props.resetButtonDisabled}/>
                <ActionButton title={props.buttonTitle} onPress={props.onPressButton} disabled={props.buttonDisabled}/>
            </View>
        </View>
    );
};
