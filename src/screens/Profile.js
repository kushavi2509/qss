import React from 'react';
import {Text, Button} from 'react-native';

import ScreenContainer from '../component/ScreenContainer';

export default Profile = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
  );
};
