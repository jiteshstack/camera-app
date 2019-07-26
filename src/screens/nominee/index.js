import React from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import Header from '../../components/header';
import Relationship from '../../components/relationshipButton';

export default class NomineeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relationship: '',
      nomineeName: '',
      selected: false,
      father: false,
      son: false,
      other: false
    }
  }

  onSelect = (relationship) => {
    this.setState({
      father: false,
      son: false,
      other: false
     });

    switch (relationship) {
      case 'father':
        this.setState({ father: true})
        break;
      case 'son':
        this.setState({ son: true})
        break;
      case 'other':
        this.setState({ other: true})
        break;
      default:
        this.setState({ father: true})
        break;
    }
  }

  render() {
    const { navigation } = this.props;
    const { relationship, nomineeName, father, son, other } = this.state;
    return (
      <View
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eb5757" />
        <Header title="Cyclist Toffee" leftIconName="arrow-back" navigation={this.props.navigation}  />
        <ScrollView style={{ margin: 30 }}>
          <View style={{}}>
            <Text style={styles.headingText}>Enter the nominee details ( beneficiary in case of buyer's death ). Nominee should be more than 18 years of age.</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 26 }}>
            <Icon
              name="ios-people"
              type="ionicon"
              color="#979797"
              size={30}
              containerStyle={{ marginRight: 10 }} />
            <Text style={{ fontSize: 26 }}>Cycle Buyer Details</Text>
          </View>
          <View style={{ marginTop: 26 }}>
            <TextInput
              contextMenuHidden={false}
              dataDetectorTypes="all"
              value={relationship}
              placeholder="Select Relationship"
              maxLength={74}
              underlineColorAndroid="#cccccc"
              onChangeText={text => this.setState({ relationship: text })}
              style={styles.textInput} />
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0 }}>
                <Relationship onPress={() => this.onSelect('father')} selected={father} text="Father" />
                <Relationship onPress={() => this.onSelect('son')} selected={son} text="Son" />
                <Relationship onPress={() => this.onSelect('other')} selected={other} text="Other" />
              </View>
            <TextInput
              contextMenuHidden={false}
              dataDetectorTypes="all"
              value={nomineeName}
              placeholder="Nominee Full Name"
              maxLength={74}
              underlineColorAndroid="#cccccc"
              onChangeText={text => this.setState({ nomineeName: text })}
              style={styles.textInput} />
          </View>
          
          <TouchableOpacity
            onPress={() => navigation.navigate('Vehicle')}
            style={styles.submitButton}>
            <Text style={{ color: 'white', fontSize: 18 }}>Next</Text>
            <Icon
              containerStyle={{ marginLeft: 5 }}
              name='arrow-forward'
              size={25}
              color="white" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#F5F5F5'
  },
  headingText: {
    fontSize: 16
  },
  textInput: {
    // fontFamily: theme.font.title,
    fontSize: 18,
    lineHeight: 30,
    padding: 20,
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#eb5757',
    marginTop: 26,
    padding: 18,
    alignItems: 'center',
  }
})
