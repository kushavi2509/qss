import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors, {height, width} from "./../../config/Theme";

import {
  container,
  imageView,
  detailTitle,
} from './style';
const Card = ({ detail }) => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.imageView}
          source={{ uri: detail['im:image'][2].label }}></Image>
        <View style={styles.detail}>
          <Text style={styles.detailTitle} numberOfLines={1}>
            {detail.title.label}
          </Text>
          <Text style={styles.detailSubTitle} numberOfLines={1}>{detail['im:price'].label}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...container,
    marginLeft:12.5
  },
  imageView: {
    ...imageView,
  },
  detail: {
    bottom:10,
    left:20,
    position:"absolute",
    flexDirection:"row"
  },
  detailTitle: {
    ...detailTitle,
    fontSize:20,
    fontWeight:"700",
    color:Colors.White,
    flex:6.5
  },
  detailSubTitle:{
    ...detailTitle,
    fontSize:25,
    fontWeight:"700",
    color:Colors.White,
    flex:3.5
  },

});

export default Card;
