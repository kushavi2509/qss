import React from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Colors from './../config/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchHeader = ({ value, searchHandle,navigation }) => {
  const onChangeText = e => {
    searchHandle(e);
  };

  return (
    <View style={{height:64}}>
      <View style={styles.HeaderView}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
        <View style={styles.Left} >
          <Icon name="options-outline" size={44} color={Colors.superDarkGreys} />
        </View>
        </TouchableOpacity>
        <View style={styles.Search}>
          <Icon style={styles.Location} name="location-outline" size={24} color={Colors.superDarkGreys} />
          <TextInput
            style={styles.HeaderSearch}
            value={value}
            onChangeText={onChangeText}
            placeholder={'Search by location'}
            placeholderTextColor="#8e8e92"
            value={value}
          />

          {/* <TouchableOpacity
            onPress={() => onChangeText('')}
            style={styles.Location}>
            <Text style={{fontSize: 18}}>X</Text>
          </TouchableOpacity>  */}
        </View>
        <View style={styles.Filter}>
          <Icon name="filter-outline" size={44} color={Colors.superDarkGreys} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} >

        <View style={styles.Notification}>
          <Icon name="notifications-outline" size={44} color={Colors.superDarkGreys} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    backgroundColor: Colors.White,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  Location: {
    alignSelf: "center",
    left: 10
  },
  Left: {
    left: 5,
    paddingHorizontal: 7.5,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: Colors.White,
  },
  Search: {
    flex: 5.5,
    flexDirection: "row",
    backgroundColor: Colors.Grey,
    marginHorizontal: 10,
    alignContent: "center",
    marginVertical: 7.5,
    borderRadius: 34
  },
  Filter: {
    flex: 1.5,
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center"
  },
  Notification: {
    flex: 1.5,
    right: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  HeaderSearch: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 17,
    padding: 10,
    paddingLeft: 10,
    flexGrow: 1,
  },

});

export default SearchHeader;
