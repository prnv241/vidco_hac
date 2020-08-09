import React from 'react'

export default function patientcatagories() {
  return (
    <div className="container">
      <p className="text-center mt-5 display-4">Categories</p>
      <p className="text-center">Select from below catagries to proceed!</p>
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Health</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Therapy</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Education</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Career</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Business</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Leagel</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Financial</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <p>Travel</p>
              <a href="/patient/dashboard" className="btn btn-primary mt-5 float-right">View People</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
