import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { addUser, onFirstNameChange, onLastNameChange, onEmailChange, loadUsers, deleteUser, getUsers } from './actions';

import './App.css';

import User from './components/User/User';

const App = (props) => {

  const user = {
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    email: props.user.email
  }

  useEffect(() => {
    console.log('Getting users...')
    props.getUsers();
  }, [])

  const addUser = (event, user) => {
    event.preventDefault();
    props.addUser(user);
  }

  return (
    <div className="App">
      <form>
        <label>Ime:</label>
        <input value={props.user.firstName} onChange={event => props.onFirstNameChange(event)} /> <br />
        <label>Prezime:</label>
        <input value={props.user.lastName} onChange={event => props.onLastNameChange(event)} /> <br />
        <label>Email:</label>
        <input value={props.user.email} onChange={event => props.onEmailChange(event)} /> <br />
        <button onClick={event => addUser(event, user)}>Dodaj korisnika</button>
      </form>

      <div className="usersList">
        {
          props.users.map((user) => {
            const id = user._id
            return (
              <User
                key={id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                clicked={() => props.deleteUser(id)} />
            )
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    addUser: (user) => dispatch(addUser(user)),
    deleteUser: (id) => dispatch(deleteUser(id)),
    onFirstNameChange: (event) => dispatch(onFirstNameChange(event)),
    onLastNameChange: (event) => dispatch(onLastNameChange(event)),
    onEmailChange: (event) => dispatch(onEmailChange(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
