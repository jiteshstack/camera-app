import { createStackNavigator } from 'react-navigation';
import { Platform, Easing, Animated } from 'react-native';
import { HomeScreen, BirthdayScreen, NomineeScreen, VehicleScreen, InvoiceScreen, SuccessfulScreen, ImagePicker, ConfirmPicture } from '../screens';

export default createStackNavigator(
    {
        Home: HomeScreen,
        Birthday: BirthdayScreen,
        Nominee: NomineeScreen,
        Vehicle: VehicleScreen,
        Invoice: InvoiceScreen,
        Successful: SuccessfulScreen,
        ImagePicker,
        ConfirmPicture,
    },
    {
      navigationOptions: () => ({
        header: null,
        gesturedEnabled: Platform.OS === 'ios',
        transitionConfig: {
          duration: 500,
          timing: Animated.timing,
          easing: Easing.inOut(Easing.poly(4)),
          useNativeDriver: true,
        },
      }),
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                height: 0,
            },
        }
    }
);
