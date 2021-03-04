import React from 'react'
import AboutTxt from './AboutTxt'
import Contact from './Contact'
import Skills from './Skills'
import './style.css'





const index = () => {


    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                    <Contact/>
                    <Skills/>
                </div>
                <div className="col-md-6">
                    <AboutTxt/>
                </div>
                </div>
              </div>
          </div>
        </div>
    )
}

export default index
