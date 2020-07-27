import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, KeyboardAvoidingView, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SmallCard from '../../component/smallCard/SmallCard';
import { getHundred } from '../../redux/action/GetTopHundredAction';
import Search from '../../component/Search';
import AppColor, { height } from '../../config/Theme';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../component/card/Card';
import RoundCard from '../../component/roundCard/RoundCard';

const Home = ({ navigation }) => {
  const topSong = useSelector(state => state.GetTopHundredReducer.topSong)//.slice(0,1));
  const dispatch = useDispatch();
  const icons=["aperture","alarm","albums","bar-chart","barcode","barbell"]
  var  {height,width}= Dimensions.get("window").height
  let orientation = height/width>1?true:false;


  const [value, setValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const search = key => {
    setValue(key);
    let list = topSong.filter(item =>
      item.title.label.toLowerCase().includes(key.toLowerCase()),
    );
    setSearchList(list);
  };
  useEffect(() => {
    dispatch(getHundred());
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <Search navigation={navigation} value={value} searchHandle={key => search(key)} />
      <ScrollView>
      <View style={styles.carasoulView}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={ topSong}
          renderItem={({ item, index }) => (
            <Card detail={item} index={index} />
          )}
          keyExtractor={item => item.id.attributes['im:id']}
        />
      </View>
      <View style={styles.section}>
      <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={icons}
          renderItem={({ item, index }) => (
            <RoundCard name={item} index={index} />
          )}
          keyExtractor={item => item}
        />

      </View>


      <FlatList
          data={value !== '' ? searchList : topSong}
          numColumns={orientation?4 :2}
          renderItem={({ item, index }) => (
            <SmallCard detail={item} index={index} />
          )}
          keyExtractor={item => item.id.attributes['im:id']}
        />
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.White,
  },
  carasoulView: {
    marginTop: 14,
    left: 5,
    height: height * .17,
    marginLeft: 12.5
  },
  section:{
    marginTop: 18,
    left: 5,
    height: height * .1,
    marginLeft: 12.5,
    flexDirection:"row",
  },
});

export default React.memo(Home);
