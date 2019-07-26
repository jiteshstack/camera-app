import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default ({ title, leftIconName, leftIconType, rightIconName, rightIconType, navigation }) => (
  <View style={{ backgroundColor: '#eb5757', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between' }}>
    <Icon
      name={leftIconName}
      // type="ionicon"
      size={28}
      onPress={() => navigation.goBack()}
      // containerStyle={Styles.backIcon}
      color="white" />
    <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>{title}</Text>
    <Icon
      name={rightIconName}
      type={rightIconType}
      size={20}
      onPress={() => false}
      color="white" />
  </View>
)