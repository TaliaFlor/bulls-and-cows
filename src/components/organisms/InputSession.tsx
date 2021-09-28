import {DataInput} from "../molecules/DataInput";
import React from "react";

type InputBarProps = {
    input: string;
    onChangeInput: (text: string) => void;
    onPressButton: () => void;
    buttonDisabled: boolean;
    onPressResetButton: () => void;
    resetButtonDisabled: boolean;
}

export const InputSession = (props: InputBarProps) => {
    return (
        <DataInput
            label='Avalie as Expressões'
            textPlaceholder='Digite palavras ou frases'
            input={props.input}
            onChangeInput={props.onChangeInput}
            buttonTitle='Avaliar'
            onPressButton={props.onPressButton}
            buttonDisabled={props.buttonDisabled}
            resetButtonTitle='Limpar'
            onPressResetButton={props.onPressResetButton}
            resetButtonDisabled={props.resetButtonDisabled}
        />
    );
}
