import {Button} from "react-native";
import React from "react";
import {PRIMARY_COLOR} from "../../styles/theme";

type ActionButtonProps = {
    title: string;
    onPress: () => void;
    disabled: boolean;
}

export const ActionButton = (props: ActionButtonProps) =>
    <Button title={props.title} onPress={props.onPress} color={PRIMARY_COLOR} disabled={props.disabled}/>
