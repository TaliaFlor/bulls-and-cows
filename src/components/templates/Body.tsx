import React, {useState} from "react";
import {Alert, StyleSheet, View} from "react-native";
import {InputSession} from "../organisms/InputSession";
import {ItemModel} from "../../models/item.model";
import {MultiPartList} from "../atoms/MultiPartList";
import {useSecretCode} from "../../contexts/SecretCodeContext";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: '1.5em',
        gap: '3.5em'
    },
});

export const Body = () => {
    const {secret, generateSecret} = useSecretCode();

    const [input, setInput] = useState<number>();

    const [disabled, setDisabled] = useState(true);
    const [resetDisabled, setResetDisabled] = useState(true);

    const [data, setData] = useState<Array<ItemModel>>([]);

    const normalizeInput = (input: string): number => Number(input.replace(/[^0-9]/g, ''));

    const onInput = (text: string) => {
        setInput(normalizeInput(text));
        setResetDisabled(false);

        if (text.trim().length == 4) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    const onPress = () => {
        // @ts-ignore
        setData(list => list.concat(new ItemModel(input, secret)));
        // @ts-ignore
        setInput('');
        setDisabled(true);

        if (data.at(data.length - 1)?.guess === secret) WinnerMessage()
    };

    const onPressReset = () => {
        setData([]);
        // @ts-ignore
        setInput('');
        setDisabled(true);
        setResetDisabled(true);
        generateSecret();
    };

    const WinnerMessage = () => {
       return Alert.alert(
            "Parabéns!",
            `Parabéns, você descobriu o código ${secret}`,
            [
                {text: "OK"}
            ]
        );
    }

    return (
        <View style={styles.container}>
            <InputSession
                input={input}
                onChangeInput={onInput}
                onPressButton={onPress}
                buttonDisabled={disabled}
                onPressResetButton={onPressReset}
                resetButtonDisabled={resetDisabled}
            />

            <MultiPartList header={['N°', 'Tentativa', 'Resultado']} data={data}/>
        </View>
    );
};
