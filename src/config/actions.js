export const Types = {
    SAVE_FRONT_IMAGE: 'SAVE_FRONT_IMAGE',
    SAVE_BACK_IMAGE: 'SAVE_BACK_IMAGE',
    SAVE_FRONT_IMAGE_SUCCESS: 'SAVE_FRONT_IMAGE_SUCCESS',
    SAVE_BACK_IMAGE_SUCCESS: 'SAVE_BACK_IMAGE_SUCCESS',
    SAVE_FRONT_IMAGE_ERROR: 'SAVE_FRONT_IMAGE_ERROR',
    SAVE_BACK_IMAGE_ERROR: 'SAVE_BACK_IMAGE_ERROR',
    CLEAR_FRONT_IMAGE: 'CLEAR_FRONT_IMAGE',
    CLEAR_BACK_IMAGE: 'CLEAR_BACK_IMAGE',
    SAVE_NAME: 'SAVE_NAME',
};

export const setFrontImage = ({ frontImageUrl, onSuccess }) => ({
    type: Types.SAVE_FRONT_IMAGE,
    payload: {
      frontImageUrl,
      onSuccess,
    },
});

export const setBackImage = ({ backImageUrl, onSuccess }) => ({
    type: Types.SAVE_BACK_IMAGE,
    payload: {
      backImageUrl,
      onSuccess,
    },
});

export const clearFrontImage = () => ({
    type: Types.CLEAR_FRONT_IMAGE,
});

export const clearBackImage = () => ({
    type: Types.CLEAR_BACK_IMAGE,
});

export const saveName = ({ name }) => ({
    type: Types.SAVE_NAME,
    payload: name
});