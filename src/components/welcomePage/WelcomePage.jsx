/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import style from './WelcomePage.module.css'

function WelcomePage( ) {
  return (
    <div className={style.bg}>
    <div className={style.container}>
    <p className={style.helo_txt}>привет,</p>
      <h1 className={style.title}> это <strong className={style.strong}>не</strong> коммерческое задание</h1>
    </div>
    </div>
     )
}

export default WelcomePage;
