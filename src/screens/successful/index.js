import React from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import moment from 'moment';

import Header from '../../components/header';
import CircleButton from '../../components/circleButton';

class SuccessfulScreen extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    const { navigation, saveName } = this.props;
    return (
      <View
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eb5757" />
        <Header title="Cyclist Toffee" />
        <View style={{ flex: 1, margin: 30 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon
              name="check-circle"
              type="font-awesome"
              color="green"
              size={80}
              containerStyle={{ marginRight: 10 }} />
            <Text style={styles.headingText}>Payment Successful!</Text>
            <Text style={styles.subHeadingText}>{saveName}, You have successfully paid <Text style={{ fontWeight: 'bold'}} >₹270</Text> for cyclist Toffee. Insurance policy documents have been emailed to Mythri Babu.</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.submitButton}>
            <Text style={{ color: 'white', fontSize: 18 }}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  saveName: state.rootReducer.name,
});

export default connect(mapStateToProps, null)(SuccessfulScreen)

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#F5F5F5'
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  subHeadingText: {
    alignSelf: 'center',
    fontSize: 16,
  },
  textInput: {
    // fontFamily: theme.font.title,
    fontSize: 18,
    lineHeight: 30,
    padding: 20,
  },
  submitButton: {
    borderRadius: 30,
    backgroundColor: '#eb5757',
    marginTop: 26,
    padding: 18,
    alignItems: 'center',
  }
});
