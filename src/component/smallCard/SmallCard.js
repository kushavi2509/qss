import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleFavourite } from './../../redux/action/GetTopHundredAction';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  containerFav,
  imageViewFav,
  favIcon,
  imageViewContainerFav,
  detailFav,
  detailTitleFav,
  detailSubTitleFav,
  rating
} from './style';
import AppColor from '../../config/Theme';
import { Rating } from 'react-native-ratings';
const SmallCard = ({ type, detail }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => (dispatch(handleFavourite(detail.id.attributes["im:id"])))}>
      <View style={styles.containerFav}>
        <View style={styles.imageViewContainerFav}>
          <Image
            style={styles.imageViewFav}
            source={{ uri: detail['im:image'][2].label }}></Image>
        </View>
        <View style={styles.detailFav}>
          <Text style={styles.detailTitleFav} numberOfLines={1}>
            {detail.title.label}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="location-outline" size={12} color={AppColor.Primary} />
            <Text style={styles.detailSubTitleFav} numberOfLines={1}>{detail['im:artist'].label}</Text>
          </View>
          <View style={styles.rating}>
            <Rating
              type='custom'
              ratingColor='orange'
              ratingBackgroundColor='#c8c7c8'
              ratingCount={5}
              imageSize={13}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerFav: {
    ...containerFav,
  },
  imageViewFav: {
    ...imageViewFav,
  },
  favIcon: {
    ...favIcon,
  },
  imageViewContainerFav: {
    ...imageViewContainerFav,
  },
  detailFav: {
    ...detailFav,

  },
  detailTitleFav: {
    ...detailTitleFav,
  },
  detailSubTitleFav: {
    ...detailSubTitleFav
  },
  rating: {
    ...rating
  }
});

export default SmallCard;
