import {DataInput} from "../molecules/DataInput";
import React from "react";

type InputBarProps = {
    input: number;
    onChangeInput: (guess: number) => void;
    onPressButton: () => void;
    buttonDisabled: boolean;
    onPressResetButton: () => void;
    resetButtonDisabled: boolean;
}

export const InputSession = (props: InputBarProps) => {
    return (
        <DataInput
            label='Tente advinhar o código'
            textPlaceholder='Digite sua tentativa'
            input={props.input}
            onChangeInput={props.onChangeInput}
            buttonTitle='Avaliar'
            onPressButton={props.onPressButton}
            buttonDisabled={props.buttonDisabled}
            resetButtonTitle='Novo Jogo'
            onPressResetButton={props.onPressResetButton}
            resetButtonDisabled={props.resetButtonDisabled}
        />
    );
}
