import React from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';

import Header from '../../components/header';
import Relationship from '../../components/relationshipButton';

export default class InvoiceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relationship: '',
      invoiceAmount: null,
      invoiceNumber: '',
      invoice: null,
      selected: false,
      today: true,
      yesterday: false,
      minDate: moment(new Date()).subtract(10, 'years').format('YYYY-MM-DD'),
      maxDate: moment(new Date()).format('YYYY-MM-DD'),
      date: moment(new Date()).format('YYYY-MM-DD'),
      disabled: false,
    }
    this.choosePicture = this.choosePicture.bind(this);
  }

  onSelect = (date) => {
    this.setState({
      today: false,
      yesterday: false,
     });

    switch (date) {
      case 'today':
        this.setState({ today: true, date : moment(new Date()).format('YYYY-MM-DD')})
        break;
      case 'yesterday':
        this.setState({ yesterday: true, date : moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD')})
        break;
      default:
        this.setState({ today: true})
        break;
    }
  }

  onCostChange = (amount) => {
    this.setState({ invoiceAmount: amount, disabled: (!amount ? false : true) })
  }

  choosePicture(){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(data => {
      this.setState({ invoice: data.path})
    })
    .catch((error) => {
    });
  }

  render() {
    const { navigation } = this.props;
    const { 
      invoiceAmount, 
      invoiceNumber, 
      invoice,
      today, 
      yesterday, 
      disabled,
      minDate,
      maxDate,
      date,
    } = this.state;
    return (
      <View
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eb5757" />
        <Header title="Cyclist Toffee" leftIconName="arrow-back" navigation={this.props.navigation}  />
        <View style={{ margin: 30 }}>
          <View style={{}}>
            <Text style={styles.headingText}>Please enter the cost of cycle and upload the invoice photo.</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 26 }}>
            <Icon
              name="text-document"
              type="entypo"
              color="#979797"
              size={30}
              containerStyle={{ marginRight: 10 }} />
            <Text style={{ fontSize: 26 }}>Invoice Details</Text>
          </View>
          <View style={{ marginTop: 26 }}>
            <TextInput
              contextMenuHidden={false}
              dataDetectorTypes="all"
              value={invoiceAmount}
              placeholder="Cycle Cost including GST"
              maxLength={74}
              underlineColorAndroid="#cccccc"
              keyboardType="numeric"
              onChangeText={text => this.onCostChange(text)}
              style={styles.textInput} />
            <DatePicker
                style={{width: 'auto', borderBottomWidth: 1, borderColor: '#cccccc', marginTop: 16 }}
                date={date}
                mode="date"
                placeholder="Date of Birth"
                format="YYYY-MM-DD"
                minDate={minDate}
                maxDate={maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0,
                  },
                  placeholderText: {
                    alignSelf: 'flex-start',
                    color: '#979797',
                  },
                  dateText: {
                    alignSelf: 'flex-start', marginLeft: 10
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0 }}>
                <Relationship onPress={() => this.onSelect('today')} selected={today} text="Today" />
                <Relationship onPress={() => this.onSelect('yesterday')} selected={yesterday} text="Yesterday" />
              </View>
            <TextInput
              contextMenuHidden={false}
              dataDetectorTypes="all"
              value={invoiceNumber}
              placeholder="Invoice Number"
              maxLength={74}
              keyboardType="numeric"
              underlineColorAndroid="#cccccc"
              onChangeText={text => this.setState({ invoiceNumber: text })}
              style={styles.textInput} />
              <View style={{ flexDirection: 'row', borderRadius: 8, borderColor: '#979797', backgroundColor: '#e2e2e2', marginTop: 26, padding: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18 }}>Add Invoice Photo</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Button
                      onPress={() => this.choosePicture()}
                      buttonStyle={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
                      containerViewStyle={{}}
                      icon={{ type: 'font-awesome', name: 'image', size: 40, color: invoice ? "#00b0ff" : "#b4b9c1" }} />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 5}} >
                <Text>`Invoice date: {date}`</Text>
                <Text>₹270/year</Text>
              </View>
          </View>

          {!disabled && (<TouchableOpacity
              disabled
              onPress={() => navigation.navigate('Vehicle')}
              style={styles.submitDisabledButton}>
              <Text style={{ color: 'white', fontSize: 18 }}>Calculate Premium</Text>
            </TouchableOpacity>)}

          {disabled && (<TouchableOpacity
              onPress={() => navigation.navigate('Successful')}
              style={styles.submitEnabledButton}>
              <Text style={{ color: 'white', fontSize: 18 }}>Issue Policy</Text>
              <Text style={{ color: 'white', fontSize: 12 }}>( ₹ 270 including 18% GST )</Text>
            </TouchableOpacity>)}
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
    padding: 10, 
  },
  submitDisabledButton: {
    borderRadius: 30,
    backgroundColor: '#9c9ca0',
    marginTop: 26,
    padding: 18,
    alignItems: 'center',
  },
  submitEnabledButton: {
    borderRadius: 30,
    backgroundColor: '#eb5757',
    marginTop: 26,
    padding: 12,
    alignItems: 'center',
  }
})
