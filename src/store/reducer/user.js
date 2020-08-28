import {USER_TOGGLE_TOKEN} from '../actions/user.js'
const initialState={
  token:''
}
export default function(state=initialState, action) {
  switch (action.type) {
    case USER_TOGGLE_TOKEN: {
      return action.payload
    }
    default:
      return state;
  }
}