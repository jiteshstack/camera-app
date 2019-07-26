import React from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import Header from '../../components/header';
import CircleButton from '../../components/circleButton';

export default class BirthdayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minDate: moment(new Date()).subtract(100, 'years').format('YYYY-MM-DD'),
      maxDate: moment(new Date()).format('YYYY-MM-DD'),
      date: moment(new Date()).format('YYYY-MM-DD'),
    }
    
  }

  render() {
    const { navigation } = this.props;
    const { minDate, maxDate, date } = this.state;
    return (
      <View
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eb5757" />
        <Header title="Cyclist Toffee" leftIconName="arrow-back" navigation={this.props.navigation}  />
        <View style={{ margin: 30 }}>
          <View style={{}}>
            <Text style={styles.headingText}>Enter the date of birth of the cycle buyer as per Aadhar or any other government issued ID.</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 26 }}>
            <Icon
              name="birthday-cake"
              type="font-awesome"
              color="#979797"
              size={30}
              containerStyle={{ marginRight: 10 }} />
            <Text style={{ fontSize: 26 }}>Cycle Buyer's Date of Birth</Text>
          </View>
          <View style={{ marginTop: 26 }}>
              <DatePicker
                style={{width: 'auto', borderBottomWidth: 1, borderColor: '#cccccc'}}
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
                    alignSelf: 'flex-start',
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Nominee')}
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
  }
});
