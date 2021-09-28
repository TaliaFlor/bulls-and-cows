import {Image, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

type IconButtonProps = {
    source: any;
    label: string;
    onPress: () => void;
};

const ICON_SIZE = '2.5em';

const styles = StyleSheet.create({
    container: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: 50,
    },
    image: {
        width: ICON_SIZE,
        height: ICON_SIZE
    }
});

export const IconButton = (props: IconButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} accessibilityLabel={props.label} onPress={props.onPress}>
            <Image style={styles.image} source={{uri: props.source}}/>
        </TouchableOpacity>
    );
}
