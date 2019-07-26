import Reactotron from 'reactotron-react-native';
import slowlog from 'react-native-slowlog';

const logger = {
  log    : (...args) => __DEV__ && Reactotron.log(...args),
  error  : err => __DEV__ && Reactotron.log(err.message, err.code, err.stack, err),
  message: (title, ...args) => __DEV__ && Reactotron.display({
    name   : 'JS',
    preview: title,
    value  : args,
  }),
  warn   : () => __DEV__ && Reactotron.warn(...arguments),
  slowlog: context => __DEV__ && slowlog(context, /.*/),
};

if (!__DEV__) {
  // eslint-disable-line no-undef
  [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeStamp',
    'trace',
    'warn',
  ].forEach((methodName) => {
    console[methodName] = () => { /* noop */ };
  });
}

export default logger;
