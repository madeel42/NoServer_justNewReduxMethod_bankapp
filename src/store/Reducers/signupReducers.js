import allAction from '../Action/allAction';
let initialData = {
  loggedinUsers: {},
  transactions: [],

  users: []
};
export function login(state = initialData, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case allAction.edit_data:
      newState.transactions[action.payload.target].amount = action.payload.editAmount;
      return newState;
    case allAction.dell_data:
      if(newState.transactions[action.data.target].nature == 'withdraw'){
        newState.loggedinUsers.amount -= -(newState.transactions[action.data.target].amount)
      }else{
        newState.loggedinUsers.amount -= +(newState.transactions[action.data.target].amount)

      }
      const transactions = newState.transactions.filter(
        (value, key) => key != action.data.target
      );
      return { ...newState, transactions };
    // newState.transactions.filter((value,key)=>{
    //     return key !== action.data.target
    //   })
    //   return newState
    // newState.transactions.splice(action.data.target,1);
    // return newState;
    case allAction.trasaction_data:
      newState.transactions.push(action.data);
      if(action.data.nature == 'withdraw'){
      newState.loggedinUsers.amount -= +(action.data.amount)
      }else{
        newState.loggedinUsers.amount -= -(action.data.amount)
      }
      return newState;
    case allAction.signup_User:
      newState.users.push(action.data);
      return newState;
    case allAction.login_User:
      let userFound = newState.users.find(user => {
        return user.username == action.data.username;
      });
      if (userFound) {
        newState.loggedinUsers = userFound;
        alert('user found');
        return newState;
      } else {
        alert('not found');
      }
  }
  return newState;
}
