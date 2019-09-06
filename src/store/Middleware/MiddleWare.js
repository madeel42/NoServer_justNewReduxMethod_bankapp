import allAction from '../Action/allAction';
class Middleware {
  static signupMiddleWare(data) {
    return dispatch => {
      dispatch(allAction.signupUser(data));
  }
}
  static loginMiddleware(data) {
    return dispatch => {
      dispatch(allAction.loginUser(data));
    }  
    }
  }
export default Middleware;
