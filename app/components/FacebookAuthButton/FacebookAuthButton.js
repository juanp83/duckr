import React, { PropTypes } from 'react'
import { button } from './styles.css'

FacebookAuthButton.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function FacebookAuthButton ({ isFetching, onAuth }) {
  return (
    <button className ={button} onClick={onAuth}>
      {isFetching === true
      ? 'Loading'
      : 'Login with facebook'}
    </button>
  )
}
