import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="part-a">
          <h2>Update your information</h2>
          <div className="cv-detail">
            <div className="input-section section-a">
              <h3>Basic Information</h3>
              <form className="form-container">
                <div className="inline-inputs">
                  <div>
                    <label htmlFor="firstname"><span>First name</span></label>
                    <input type="text" name="firstname" id="firstname" />
                  </div>
                  <div>
                    <label htmlFor="lastname"><span>Last name</span></label>
                    <input type="text" name="lastname" id="lastname" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email"><span>Email</span></label>
                  <input type="email" name="email" id="email" />
                </div>
                <div>
                  <label htmlFor="ph"><span>Phone Number</span></label>
                  <input type="text" name="ph" id="ph" />
                </div>
              </form>
            </div>
            <div className="input-section section-b">
              <h3>Educational Background</h3>
              <form className="form-container">
                <div>
                  <label htmlFor="institute"><span>College/University</span></label>
                  <input type="text" name="institute" id="institute" />
                </div>
                <div>
                  <label htmlFor="tos"><span>Title of Study</span></label>
                  <input type="text" name="tos" id="tos" />
                </div>
                <div className="inline-inputs">
                  <div >
                    <label htmlFor="start-year"><span>Started Year</span></label>
                    <input type="number" name="start-year" id="start-year" />
                  </div>
                  <div >
                    <label htmlFor="grad-year"><span>Graduated On/By</span></label>
                    <input type="number" name="grad-year" id="grad-year" />
                  </div>
                </div>
              </form>
            </div>
            <div className="input-section section-c">
              <h3>Experiences</h3>
              <form className="form-container">
                <div>
                  <label htmlFor="company"><span>Company Name</span></label>
                  <input type="text" name="company" id="company" />
                </div>
                <div>
                  <label htmlFor="position"><span>Position Title</span></label>
                  <input type="text" name="position" id="position" />
                </div>
                <div className="inline-inputs">
                  <div >
                    <label htmlFor="started-from"><span>Started From</span></label>
                    <input type="date" name="started-from" id="started-from" />
                  </div>
                  <div >
                    <label htmlFor="until"><span>Until</span></label>
                    <input type="date" name="until" id="until" />
                  </div>
                </div>
                <div>
                  <label htmlFor="responsibilities"><span>Responsibilities</span></label>
                  <textarea name="responsibilities" id="responsibilities" rows="6" cols="500" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="part-b">
          <h2>CV</h2>
          <div className="cv-view">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
