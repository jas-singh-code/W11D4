import React from 'react'
import { connect } from 'redux'
import Greeting from './Greeting'
import {logoutCurrentUser} from '../actions/session_action';

const mapStateToProps = (state) => ({
    currentUsers: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => {
    logout_current_user: dispatch(logoutCurrentUser())
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);