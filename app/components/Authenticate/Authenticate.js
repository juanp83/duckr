import React, { PropTypes } from 'react'
import { centeredContainer, largeHeader, errorMsg } from 'sharedStyles/styles.css'
import {FacebookAuthButton} from 'components'

Authenticate.PropTypes= {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequire,
}

export default function Authenticate ({ error, isFetching, onAuth}) {
  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>{'Authenticate'}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  )
}
