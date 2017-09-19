import React, {PropTypes} from 'react';
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <h1 className={title}>{'Duckr'}</h1>
      <p className={slogan}>{'The real time, cloud based, modular, scalable social platform.'}</p>
    </div>
  )
}
