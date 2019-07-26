import React from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/header';
import CircleButton from '../../components/circleButton';
import { setFrontImage, setBackImage, saveName } from '../../config/actions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      mr: true,
      mrs: false,
      ms: false,
    }
  }

  onSelect = (relationship) => {
    this.setState({
      mr: false,
      mrs: false,
      ms: false
     });

    switch (relationship) {
      case 'mr':
        this.setState({ mr: true})
        break;
      case 'mrs':
        this.setState({ mrs: true})
        break;
      case 'ms':
        this.setState({ ms: true})
        break;
      default:
        this.setState({ mr: true})
        break;
    }
  }

  onChange(text){
    this.setState({ name: text });
    this.props.saveName({name: text});
  }

  selectPicture(imageSide) {
    this.props.navigation.push('ImagePicker', { imageSide });
  }

  render() {
    const { navigation,frontImage ,backImage } = this.props;
    const { mr, mrs, ms } = this.state;
    return (
      <View
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eb5757" />
        <Header title="Cyclist Toffee" />
        <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 30 }}>
          <View style={{}}>
            <Text style={styles.headingText}>Enter details of the same person as on the invoice. The insurance policy would be issued to this person.</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 26 }}>
            <Icon
              name="user"
              type="feather"
              size={30}
              containerStyle={{ marginRight: 10 }} />
            <Text style={{ fontSize: 26 }}>Cycle Buyer Details</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 26 }}>
            <CircleButton onPress={() => this.onSelect('mr')} selected={mr} text="Mr" />
            <CircleButton onPress={() => this.onSelect('mrs')} selected={mrs} text="Mrs" />
            <CircleButton onPress={() => this.onSelect('ms')} selected={ms} text="Ms" />
          </View>
          <View style={{ marginTop: 26 }}>
            <TextInput
              contextMenuHidden={false}
              dataDetectorTypes="all"
              value={this.state.name}
              placeholder="Full Name"
              maxLength={74}
              underlineColorAndroid="#cccccc"
              onChangeText={text => this.onChange(text)}
              style={styles.textInput} />
            <TextInput
              contextMenuHidden={false}
              dataDetectorTypes="all"
              value={this.state.email}
              keyboardType="email-address"
              placeholder="Email"
              maxLength={74}
              underlineColorAndroid="#cccccc"
              onChangeText={text => this.setState({ email: text })}
              style={styles.textInput} />
            <TextInput
              contextMenuHidden={false}
              dataDetectorTypes="all"
              value={this.state.phone}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              maxLength={74}
              underlineColorAndroid="#cccccc"
              onChangeText={text => this.setState({ phone: text })}
              style={styles.textInput} />
          </View>
          <View style={{ flexDirection: 'row', borderRadius: 8, borderColor: '#979797', backgroundColor: '#e2e2e2', marginTop: 26, padding: 18, alignItems: 'center', justifyContent: 'space-between' }}>

            <Text style={{ fontSize: 18 }}>Add Aadhar Card</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <Button
                onPress={() => this.selectPicture('front')}
                buttonStyle={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
                containerViewStyle={{}}
                icon={{ type: 'font-awesome', name: 'image', size: 30, color: frontImage ? "#00b0ff" : "#b4b9c1" }} />
                <Text style={{ color: frontImage ? "#00b0ff" : "#b4b9c1", fontSize: 12, marginRight: 8 }}>Front</Text>
              </View>
              
              <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <Button
                onPress={() => this.selectPicture('back')}
                buttonStyle={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
                containerViewStyle={{}}
                icon={{ type: 'font-awesome', name: 'image', size: 30, color: backImage ? "#00b0ff" : "#b4b9c1" }} />
                <Text style={{ color: backImage ? "#00b0ff" : "#b4b9c1", fontSize: 12, marginRight: 8 }}>Back</Text>
              </View>
            </View>

          </View>
          <TouchableOpacity
            onPress={() => navigation.push('Birthday')}
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

const mapStateToProps = (state) => ({
  frontImage: state.rootReducer.frontImage,
  backImage: state.rootReducer.backImage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveName: saveName,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

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
