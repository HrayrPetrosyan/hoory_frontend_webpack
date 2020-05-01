export const ACTION_STATUSES = {
    UNDEFINED: 'undefined',
    PENDING: 'pending',
    SUCCESS: 'success',
    FAIL: 'fail',
};

export const ASSISTANT = {
    SET_ASSISTANT_NAME: '@@ASSISTANT/SET_ASSISTANT_NAME',
    SET_ASSISTANT_GENDER: '@@ASSISTANT/SET_ASSISTANT_GENDER',
    SET_ASSISTANT_COLOR: '@@ASSISTANT/SET_ASSISTANT_COLOR',
    SET_ASSISTANT_ICON_FILE_NAME: '@@ASSISTANT/SET_ASSISTANT_ICON_FILE_NAME',
    RESET_ASSISTANT: '@@ASSISTANT/RESET_ASSISTANT',

    ATTEMPT_GET_ASSISTANTS: '@@ASSISTANT/ATTEMPT_GET_ASSISTANTS',
    SET_ASSISTANTS_DATA: '@@ASSISTANT/SET_ASSISTANTS_DATA',
    SET_GET_ASSISTANTS_ACTION_STATUS: '@@ASSISTANT/SET_GET_ASSISTANTS_ACTION_STATUS',

    ATTEMPT_CREATE_ASSISTANT: '@@ASSISTANT/ATTEMPT_CREATE_ASSISTANT',
    SET_CREATE_ASSISTANT_ACTION_STATUS: '@@ASSISTANT/SET_CREATE_ASSISTANT_ACTION_STATUS',

    ATTEMPT_EDIT_ASSISTANT: '@@ASSISTANT/ATTEMPT_EDIT_ASSISTANT',
    SET_EDIT_ASSISTANT_ACTION_STATUS: '@@ASSISTANT/SET_EDIT_ASSISTANT_ACTION_STATUS',

    ATTEMPT_DELETE_ASSISTANT: '@@ASSISTANT/ATTEMPT_DELETE_ASSISTANT',
    SET_DELETE_ASSISTANT_ACTION_STATUS: '@@ASSISTANT/SET_DELETE_ASSISTANT_ACTION_STATUS',
};

export const PROFILE = {
    SET_PROFILE_INFO: '@@PROFILE/SET_PROFILE_INFO',
    RESET_PROFILE_INFO: '@@PROFILE/RESET_PROFILE_INFO',
    ATTEMPT_GET_PROFILE: '@@PROFILE/ATTEMPT_GET_PROFILE',
    SET_GET_PROFILE_ACTION_STATUS: '@@PROFILE/SET_GET_PROFILE_ACTION_STATUS',
};

export const SIGN_UP = {
    ATTEMPT_SIGN_UP: '@@SIGN_UP/ATTEMPT_SIGN_UP',
    SET_SIGN_UP_ACTION_STATUS: '@@SIGN_UP/ATTEMPT_SIGN_UP_ACTION_STATUS',
    RESET_SIGN_UP: '@@SIGN_UP/RESET_SIGN_UP',
};

export const SIGN_IN = {
    ATTEMPT_SIGN_IN: '@@SIGN_IN/ATTEMPT_SIGN_IN',
    SET_SIGN_IN_ACTION_STATUS: '@@SIGN_IN/ATTEMPT_SIGN_IN_ACTION_STATUS',
    RESET_SIGN_IN: '@@SIGN_UP/RESET_SIGN_IN',
};
