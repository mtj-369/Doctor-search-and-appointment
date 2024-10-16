import React from 'react'

const Subscribe = () => {
  return (
    <>
       <div className="subscribe-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="subscribe-inner text-center clearfix">
                            <h2>Subscribe</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <form action="#">
                            <div className="form-group">
                                <input className="form-control-1" id="email-1" name="email" placeholder="Email Address" required type="text" />
                            </div>
                            <div className="form-group">
                                <button  className="new-btn-d br-2" >
                                Subscribe
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    </>
  )
}

export default Subscribe
