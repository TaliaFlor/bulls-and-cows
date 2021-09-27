import {Image, Pressable, StyleSheet} from "react-native";
import React from "react";

type IconButtonProps = {
    source: any;
    onPress: () => void;
};

const ICON_SIZE = '2.5em';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: 50
    },
    image: {
        width: ICON_SIZE,
        height: ICON_SIZE
    }
});

export const IconButton = (props: IconButtonProps) => {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Image style={styles.image} source={{uri: props.source}}/>
        </Pressable>
    );
}
