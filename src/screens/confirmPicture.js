import React from 'react';
import { View, Text, ImageBackground, Dimensions }  from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearBackImage, clearFrontImage} from '../config/actions'

class ConfirmPicture extends React.Component {
  constructor(props) {
    super(props);

    this.onDiscard = this.onDiscard.bind(this);
  }

  onDiscard = (mode) => {
    if(mode === 'front'){
      this.props.clearFrontImage();
    }else{
      this.props.clearBackImage();
    }
    this.props.navigation.goBack();
  }

  render() {
    const { frontImage, backImage, navigation } = this.props;
    const mode = navigation.getParam('imageSide', 'front');
    const width = Dimensions.get('window').width;
    const imageUrl = mode === 'front' ? frontImage : backImage;

    return(<View style={{ flex: 1 }} >
      <ImageBackground
        style={{ width: '100%', height: '100%', alignItems: 'flex-end', justifyContent: 'flex-end' }}
        source={{ uri: imageUrl }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width, backgroundColor: '#eb575750', height: 50 }} >
              <Button
              onPress={() => this.onDiscard(mode)}
              title="Discard"
              buttonStyle={{ backgroundColor: 'transparent', borderColor: '#ffffff'}}
              titleStyle={{ fontSize: 20 }}
              containerViewStyle={{ flex: 1 }} />
              <View style={{ height: '100%', borderWidth: 1, borderColor: '#ffffff'}} />
              <Button
              onPress={() => navigation.goBack()}
              title="Keep"
              buttonStyle={{ backgroundColor: 'transparent', borderColor: '#ffffff'}}
              titleStyle={{ fontSize: 20 }}
              containerViewStyle={{flex: 1 }} />
            </View>
      </ImageBackground>
    </View>)
  }
}

const mapStateToProps = (state) => ({
  frontImage: state.rootReducer.frontImage,
  backImage: state.rootReducer.backImage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  clearFrontImage: clearFrontImage,
  clearBackImage: clearBackImage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPicture);
