import { TRY_AUTH } from "../actions/actionTypes";

export const tryAuth = authData => {
  return {
    type: TRY_AUTH,
    authData: authData
  };
};
