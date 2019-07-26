import React from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import Header from '../../components/header';
import { brands, models, colors } from '../../config/data'

export default class VehicleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleBrand: null,
      vehicleModel: null,
      vehicleColor: null,
    }
  }

  render() {

    const placeholderBrand = {
      label: 'Select Cycle Brand',
      value: null,
      color: '#9EA0A4',
    };

    const placeholderModel = {
      label: 'Select Cycle Model',
      //dx
      value: null,
      color: '#9EA0A4',
    };

    const placeholderColor = {
      label: 'Select Cycle Colour',
      value: null,
      color: '#9EA0A4',
    };
    
    const { navigation } = this.props;
    const { vehicleBrand, vehicleModel, vehicleColor } = this.state;
    return (
      <View
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eb5757" />
        <Header title="Cyclist Toffee" leftIconName="arrow-back" navigation={this.props.navigation}  />
        <View style={{ margin: 30 }}>
          <View style={{}}>
            <Text style={styles.headingText}>Please enter the model and color of the cycle as per invoice.</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 26 }}>
            <Icon
              name="bicycle"
              type="font-awesome"
              color="#979797"
              size={30}
              containerStyle={{ marginRight: 10 }} />
            <Text style={{ fontSize: 26 }}>Cycle Buyer Details</Text>
          </View>
          <View style={{ marginTop: 26 }}>
            <RNPickerSelect
              placeholder={placeholderBrand}
              items={brands}
              onValueChange={value => this.setState({ vehicleBrand: value })}
              onUpArrow={() => false}
              onDownArrow={() => false}
              style={styles.pickerSelectStyles}
              value={vehicleBrand}
            />
            <RNPickerSelect
              placeholder={placeholderModel}
              items={models}
              onValueChange={value => this.setState({ vehicleModel: value })}
              onUpArrow={() => false}
              onDownArrow={() => false}
              style={styles.pickerSelectStyles}
              value={vehicleModel}
            />
            <RNPickerSelect
              placeholder={placeholderColor}
              items={colors}
              onValueChange={value => this.setState({ vehicleColor: value })}
              onUpArrow={() => false}
              onDownArrow={() => false}
              style={styles.pickerSelectStyles}
              value={vehicleColor}
            />
          </View>
          
          <TouchableOpacity
            onPress={() => navigation.navigate('Invoice')}
            style={styles.submitButton}>
            <Text style={{ color: 'white', fontSize: 18 }}>Next</Text>
            <Icon
              containerStyle={{ marginLeft: 5 }}
              name='arrow-forward'
              size={25}
              color="white" />
          </TouchableOpacity>
        </View>
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
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    // borderColor: 'eggplant',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})
