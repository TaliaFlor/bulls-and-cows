import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {InputSession} from "../organisms/InputSession";
import {ItemModel} from "../../models/item.model";
import {MultiPartList} from "../atoms/MultiPartList";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: '1.5em',
        gap: '3.5em'
    },
});

export const VowelsAndConsonants = () => {
    const [input, setInput] = useState('');

    const [disabled, setDisabled] = useState(true);
    const [resetDisabled, setResetDisabled] = useState(true);

    const [data, setData] = useState<Array<ItemModel>>([]);

    const onInput = (text: string) => {
        setInput(text);
        setDisabled(false);
        setResetDisabled(false);
    };

    const onPress = () => {
        setData(list => list.concat(new ItemModel(input)));
        setInput('');
        setDisabled(true);
    };

    const onPressReset = () => {
        setData([]);
        setInput('');
        setDisabled(true);
        setResetDisabled(true);
    };

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

            <MultiPartList header={['N°', 'Texto', 'Código']} data={data}/>;
        </View>
    );
};
