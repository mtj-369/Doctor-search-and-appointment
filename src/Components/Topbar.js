import React from 'react'

const Topbar = () => {
  return (
    <>
         <div className="main-top">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="left-top">
                        <a className="new-btn-d br-2" href="#appointment"><span>Book Appointment</span></a>
                        <div className="mail-b"><a href="#contact"><i className="fa fa-envelope-o" aria-hidden="true" /> healthlab2023@gmail.com</a></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wel-nots">
                        <p>Welcome to Our Health Lab!</p>
                        </div>
                        
                    </div>
                 </div>
                </div>
        </div>
    </>
  )
}

export default Topbar
