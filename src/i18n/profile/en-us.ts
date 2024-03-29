/**
 * @author WMXPY
 * @namespace I18n_Profile
 * @description EN-US
 */

import { PROFILE } from "./profile";

export const ENGLISH_UNITED_STATES: Record<PROFILE, string> = {

    [PROFILE.ERROR_NO_EXPOSURE_KEY]: "No Exposure Key",
    [PROFILE.ERROR_NO_EXPOSURE_KEY_DESCRIPTION]: "This page encountered an error, if you are redirected to this page, please try again or contact the administrator of the application you are attempt to sign-in.",

    [PROFILE.MANUAL_INPUT_EXPOSURE_KEY]: "Manual Input Exposure Key",
    [PROFILE.MANUAL_INPUT_EXPOSURE_KEY_DESCRIPTION]: "Please input the exposure key manually, if you are not sure about the exposure key, please try again or contact the administrator of the application you are attempt to sign-in.",
    [PROFILE.MANUAL_INPUT_EXPOSURE_KEY_ERROR]: "Exposure key verification failed",

    [PROFILE.SIGN_IN_FAILED_DESCRIPTION]: "Sign-in failed, please try again.",

    [PROFILE.SUBMITTED_SUCCESSFULLY]: "Submitted Successfully",
    [PROFILE.SUBMITTED_SUCCESSFULLY_DESCRIPTION]: "Your sign-in has been successfully submitted, you can safely close this page and revisit the application you are signing-in.",
};
