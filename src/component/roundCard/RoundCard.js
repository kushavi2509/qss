import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors, { height, width } from "./../../config/Theme";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    container,
} from './style';
const RoundCard = ({ name }) => {
    return (
        <View style={styles.mother}>
            <View style={styles.container}>
                <Icon name={`${name}-outline`} size={34} color={Colors.Primary} />
            </View>
            <Text style={styles.detailSubTitle} numberOfLines={1}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mother:{
        alignItems:"center",
        justifyContent:"space-around"
    },
    container: {
        ...container,
    },
    detailSubTitle: {
        paddingTop:4,
        marginLeft:10,
        color: Colors.Black,
        flex: 3.5
    },
});

export default RoundCard;
