import {Button} from "react-native";
import React from "react";
import {COLORS} from "../../styles/constants";

type ActionButtonProps = {
    title: string;
    onPress: () => void;
}

export const ActionButton = (props: ActionButtonProps) =>
    <Button title={props.title} onPress={props.onPress} color={COLORS.primary}/>
