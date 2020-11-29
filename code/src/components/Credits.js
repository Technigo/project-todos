import React from 'react'

import './credits.css'
import ic_github from '../assets/ic_github.svg'

export const Credits = () => {
  return (
    <div className="credits-container">
      <p className="credits">Created by Axel Hammarbäck for <a href="https://www.technigo.io/" target="_blank">Technigo Bootcamp</a>. <br/><a href="https://github.com/AxelHammarback/project-todos" target="_blank"><img src={ic_github}></img> View on Github</a></p>
    </div>
  )
}