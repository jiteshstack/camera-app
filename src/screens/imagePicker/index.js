import React from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, CameraRoll, Alert, Dimensions, Image, ImageBackground } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImagePicker from 'react-native-image-crop-picker';

import Header from '../../components/header';
import { messages } from '../../config/data';
import { setFrontImage, setBackImage } from '../../config/actions';

class ImagePicker1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSide: props.navigation.getParam('imageSide', 'front'),
      loading: false
    }
    this.clickPicture = this.clickPicture.bind(this);
    this.choosePicture = this.choosePicture.bind(this);
    this.confirmPicture = this.confirmPicture.bind(this);
  }

  async clickPicture() {
    this.setState({ loading: true });
    const options = {
      quality: 0.8,
      base64: true,
      width: 720,
      fixOrientation: true,
      pauseAfterCapture: true,
    };
    const data = await this.camera.takePictureAsync(options);
    this.confirmPicture(data.uri);
  }

  choosePicture(){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(data => {
      if(data){
        this.confirmPicture(data.path);
      }
    })
    .catch((error) => {

    });
  }

  confirmPicture(uri) {
    if(this.state.imageSide === 'front'){
      this.props.setFrontImage({
        frontImageUrl: uri,
        onSuccess: () => {
          this.setState({ loading: false });
        }
      });
    } else {
      this.props.setBackImage({
        backImageUrl: uri,
        onSuccess: () => {
          this.setState({ loading: false });
        }
      });
    }
    this.props.navigation.navigate('ConfirmPicture', { mode: this.state.imageSide });
  }

  render() {
    const width = Dimensions.get('window').width;
    const { imageSide } = this.state;
    const { frontImage, backImage } = this.props;
    return (
      <View
        style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#eb5757" />
        <Header title="Cyclist Toffee" leftIconName="close" leftIconType="material-community" navigation={this.props.navigation} />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}>
          <View style={{ flexDirection: 'row', margin: 10, width: '90%', height: 60, justifyContent: 'space-between', borderWidth: 0 }} >
            {frontImage && <ImageBackground source={{ uri: frontImage }} style={{ width: 60, height: 60, justifyContent: 'center' }} >
                <Text style={{ color: '#ffffff', fontSize: 12, padding: 7}} >Aadhaar Front</Text>
              </ImageBackground>}
            {backImage && <ImageBackground source={{ uri: backImage }} style={{ width: 60, height: 60, justifyContent: 'center' }} >
              <Text style={{ color: '#ffffff', fontSize: 12, padding: 7, alignSelf: 'center'}} >Aadhaar Back</Text>
            </ImageBackground>}
          </View>
          <View style={{ backgroundColor: '#eb575750', width: '100%', alignItems: 'center' }}>
            <Text h4 style={{ color: '#fff', marginTop: 32, fontSize: 16 }}>{imageSide === 'front' ? messages.frontCamera : messages.backCamera }</Text>
            <Button
              raised
              large
              onPress={() => this.clickPicture()}
              borderRadius={250}
              containerViewStyle={{ borderRadius: 250, margin: 25 }}
              icon={{ name: 'camera', size: 40, style: { marginRight: 0 } }} />
            <View style={{ flexDirection: 'row', width }} >
              <Button
              onPress={() => this.choosePicture()}
              title="Gallery"
              buttonStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0, borderColor: '#ffffff'}}
              titleStyle={{ fontSize: 16 }}
              containerViewStyle={{ flex: 1 }} />
              <Button
              onPress={() => false}
              title="Camera"
              buttonStyle={{ backgroundColor: 'transparent', borderBottomWidth: 1, borderColor: '#ffffff'}}
              titleStyle={{ fontSize: 16 }}
              containerViewStyle={{ flex: 1 }} />
            </View>
          </View>
        </RNCamera>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  frontImage: state.rootReducer.frontImage,
  backImage: state.rootReducer.backImage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setFrontImage: setFrontImage,
    setBackImage: setBackImage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImagePicker1)

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
    borderRadius: 30,
    backgroundColor: '#eb5757',
    marginTop: 26,
    padding: 18,
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})
