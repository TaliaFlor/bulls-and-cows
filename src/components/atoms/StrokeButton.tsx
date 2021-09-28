import {Button} from "react-native";
import React from "react";

type StrokeButtonProps = {
    title: string;
    onPress: () => void;
    disabled: boolean;
}

export const StrokeButton = (props: StrokeButtonProps) =>
    <Button title={props.title} onPress={props.onPress} color='#607D8B' disabled={props.disabled}/>
