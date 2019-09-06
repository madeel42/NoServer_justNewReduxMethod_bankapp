import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import allAction from './../store/Action/allAction';
import { connect } from 'react-redux';
class Dashboard extends React.Component {
  state = {
    editing: false,
    type: 'cash',
    // nature: 'deposite',
    date: new Date().toLocaleDateString(),
    Id: Math.floor(Math.random() * 1000000 + 1),
    amount: ''
  };
  handleValue = evt => {
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  withdraw = () => {
    let Id = Math.floor(Math.random() * 1000000 + 1);
    let nature = 'withdraw';
    this.props.transactionData({ ...this.state, Id, nature });
  };
  deposit = () => {
    let Id = Math.floor(Math.random() * 1000000 + 1);
    let nature = 'deposite';
    this.props.transactionData({ ...this.state, Id, nature });
  };
  otherRoute = () => {
    if (!this.props.loginUser.username) {
      return <Redirect to='/login' />;
    }
  };
  render() {
    console.log('transaction uodated', this.props.loginUser);
    return (
      <div>
        <div className='infostyl'>
          <nav>
            <div class='nav-wrapper'>
              <a href='#' class='brand-logo'>
                CITI BANK
              </a>
              <ul id='nav-mobile' class='right hide-on-med-and-down'>
                <li>
                  <a href='badges.html'>
                    Welcome to account{this.props.loginUser.username}
                  </a>
                </li>
                <li>
                  <a href='collapsible.html'>dwd</a>
                </li>
                <li>
                  <Link to='/'>Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
          <table>
            <tr>
              <td>NAME</td>
              <td></td>
            </tr>
            <tr>
              <td>Balance</td>
              <td>{this.props.loginUser.amount}</td>
            </tr>
            <tr>
              <td>
                <input type='text' name='amount' onChange={this.handleValue} />
              </td>
              <td>
                <button
                  onClick={this.withdraw}
                  class='waves-effect waves-light btn'
                >
                  WITHDRAW
                </button>
                <button
                  onClick={this.deposit}
                  class='waves-effect waves-light btn'
                >
                  DEPOSIT
                </button>
              </td>
            </tr>
          </table>
          <table>
            <thead>
              <th>transaction ID</th>
              <th>date</th>
              <th>nature</th>
              <th>type</th>
              <th>amount</th>
              <th>Dell transaction</th>
              <th>EDIT transaction</th>
            </thead>
            <tbody>
              {this.props.transactions.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td>{transaction.Id}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.nature}</td>
                    <td>{transaction.date}</td>
                    <td>
                      {this.state.editing ? (
                        <input
                          onChange={evt => {
                            this.setState({
                              editValue: evt.target.value
                            });
                          }}
                          defaultValue={transaction.amount}
                        />
                      ) : (
                        transaction.amount
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.deldata({
                            target: index
                          });
                        }}
                      >
                        delete
                      </button>
                    </td>
                    <td>
                      {!this.state.editing && (
                        <button
                          onClick={() => {
                            this.setState({
                              editing: true
                            });
                          }}
                        >
                          updated
                        </button>
                      )}
                      {/* </td> */}
                      {this.state.editing && (
                        <button
                          onClick={() => {
                            this.setState({
                              editing: false
                            });
                            this.props.editUpdated({
                              editAmount: this.state.editValue,
                              target: index
                            });
                          }}
                        >
                          Done
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {this.otherRoute()}
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    loginUser: state.login.loggedinUsers,
    transactions: state.login.transactions
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    transactionData: data => {
      dispatch(allAction.transactionData(data));
      // alert('user created');
    },
    deldata: data => {
      dispatch(allAction.delldata(data));
      // alert('user created');
    },
    editUpdated: data => {
      dispatch(allAction.editdata(data));
      // alert('user created');
    }
  };
}
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Dashboard);
