import { createLogic } from "redux-logic";
import { RNS3 } from 'react-native-s3-upload';
import uuid from 'uuid';
import { Types } from "./actions";
import { s3config } from './s3';
import { logger } from '../config'

const setFrontImage = createLogic({
  type: Types.SAVE_FRONT_IMAGE,
  processOptions: {
    failType: Types.SAVE_FRONT_IMAGE_ERROR,
  },
  async process({ action }, dispatch, done) {
    const { frontImageUrl, onSuccess } = action.payload;
    try {
      const file = {
        uri: frontImageUrl,
        name: uuid.v4().concat('.jpg'),
        type: "image/jpg"
      }
      const s3Response = await RNS3.put(file, s3config);
      if (s3Response.status === 201) {
        logger.log('s3Response', s3Response, action.payload);
        dispatch({ type: Types.SAVE_FRONT_IMAGE_SUCCESS, payload: s3Response.body.postResponse.location });
        if (onSuccess) onSuccess();
      }
      done();
    } catch (err) {
      dispatch({ type: Types.SAVE_FRONT_IMAGE_ERROR });
      done();
    }
  }
});

const setBackImage = createLogic({
  type: Types.SAVE_BACK_IMAGE,
  processOptions: {
      failType: Types.SAVE_BACK_IMAGE_ERROR,
  },
  async process({ action }, dispatch, done) {
    const { backImageUrl, onSuccess } = action.payload;
      try {
        const file = {
          uri: backImageUrl,
          name: uuid.v4().concat('.jpg'),
          type: "image/jpg"
        }
        const s3Response = await RNS3.put(file, s3config);
        if (s3Response.status === 201) {
          logger.log('s3Response', s3Response, action.payload);
          dispatch({ type: Types.SAVE_BACK_IMAGE_SUCCESS, payload: s3Response.body.postResponse.location });
          if (onSuccess) onSuccess();
        }
        done();
      } catch (err) {
        dispatch({ type: Types.SAVE_BACK_IMAGE_ERROR });
        done();
      }
  }
});

const logics = [
  setFrontImage,
  setBackImage,
];

export default logics;
