import { NativeModules } from 'react-native';
import Reactotron, {
  asyncStorage, networking, openInEditor, overlay, trackGlobalErrors,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let reactotron = null;
// if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  if (scriptURL) {
    const scriptHostname = scriptURL.split('://')[1].split(':')[0];
    reactotron = Reactotron
      .configure({
        host: scriptHostname,
        port: 9090,
        socketIoProperties: {
          reconnection        : true,
          reconnectionDelay   : 2000,
          reconnectionDelayMax: 5000,
          reconnectionAttemps : 5,
        },
      })
      .use(trackGlobalErrors())
      .use(openInEditor())
      .use(overlay())
      .use(asyncStorage())
      .use(networking())
      .useReactNative()
      .use(reactotronRedux())
      .connect();
  }
// }

export default reactotron;
