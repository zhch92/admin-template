// src/reducers/cart-actions.js
export const USER_TOGGLE_TOKEN = 'USER_TOGGLE_TOKEN';
// 用户登录/退出
export function userToggleToken(token) {
  return {
    type: USER_TOGGLE_TOKEN,
    payload: {
      token
    }
  }
}
