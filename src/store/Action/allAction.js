class allAction {
  static signup_User = 'signup_User';
  static login_User = 'login_User';
  static trasaction_data = 'trasaction_data';
  static dell_data = 'dell_data';
  static edit_data = 'edit_data';
  static editdata(payload) {
    return {
      type: this.edit_data,
      payload
    };
  }
  static delldata(data) {
    return {
      type: this.dell_data,
      data
    };
  }
  static transactionData(data) {
    return {
      type: this.trasaction_data,
      data
    };
  }
  static signupUser(data) {
    return {
      type: this.signup_User,
      data
    };
  }
  static loginUser(data) {
    return {
      type: this.login_User,
      data
    };
  }
}
export default allAction;
