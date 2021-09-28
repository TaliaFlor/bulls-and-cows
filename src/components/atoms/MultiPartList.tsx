import {Theme} from "../../styles/interfaces/theme.interface";
import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useDarkMode} from "../../contexts/DarkThemeContext";
import {ItemModel} from "../../models/item.model";
import {PRIMARY_COLOR} from "../../styles/theme";


const style = (theme: Theme) => StyleSheet.create({
    header: {
        fontWeight: "bold",
        // @ts-ignore
        fontSize: '1em',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        // @ts-ignore
        gap: '0.25em',
        marginVertical: '0.25em'
    },
    part: {
        paddingVertical: '1em',
        paddingHorizontal: '3em',
        color: PRIMARY_COLOR,
        borderColor: PRIMARY_COLOR,
        backgroundColor: theme.id === 'dark' ? theme.backgroundShades?.lighter?.one : theme.backgroundShades?.darker?.one,
        borderWidth: 1.5,
        // @ts-ignore
        borderRadius: '0.25em',
        flexGrow: 1,
        textAlign: "center",
    }
});

type PartProps = {
    message: string | number;
    isHeader?: boolean;
}

const Part = (props: PartProps) => {
    const {theme} = useDarkMode();

    return <Text style={[style(theme).part, props.isHeader ? style(theme).header : null]}>{props.message}</Text>;
};


type RowProps = {
    parts: Array<string | number>;
    isHeader?: boolean;
}

const Row = (props: RowProps) => {
    const {theme} = useDarkMode();

    return (
        <View style={style(theme).row}>
            {props.parts.map((part, index) => <Part isHeader={props.isHeader} key={index} message={part}/>)}
        </View>
    );
};

type MultiPartListProps = {
    header: Array<string>;
    data: Array<ItemModel>;
}

export const MultiPartList = (props: MultiPartListProps) => {
    const EmptyList = () => <Row parts={['Nenhum dado... 🌵 🌵 🌵']}/>
    const Header = () => <Row isHeader={true} parts={props.header}/>

    return (
        <FlatList
            data={props.data}
            renderItem={info => <Row parts={[info.index, info.item.value, info.item.code]}/>}
            extraData={props.data}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={EmptyList}
            ListHeaderComponent={Header}
        />
    );
}
