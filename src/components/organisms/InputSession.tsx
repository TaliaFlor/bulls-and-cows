import {DataInput} from "../molecules/DataInput";
import React from "react";

type InputBarProps = {
    input: string;
    onChangeInput: (text: string) => void;
    onPressButton: () => void;
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
        />
    );
}
