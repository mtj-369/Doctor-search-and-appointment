import React from 'react'

const Banner = () => {
  return (
    <>
       <div className="ulockd-home-slider">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="pogoSlider" id="js-main-slider">
                        <div className="pogoSlider-slide" data-transition="fade" data-duration={1500} style={{backgroundImage: 'url(images/slider-01.jpg)'}}>
                            <div className="lbox-caption pogoSlider-slide-element">
                            <div className="lbox-details">
                                <h1>Welcome to Health Lab</h1>
                                <p>Your health is our priority, and our website is your gateway to a healthier future. </p>
                                <a href="#contact" className="btn">Contact Us</a>
                            </div>
                            </div>
                        </div>
                        <div className="pogoSlider-slide" data-transition="fade" data-duration={1500} style={{backgroundImage: 'url(images/slider-02.jpg)'}}>
                            <div className="lbox-caption pogoSlider-slide-element">
                            <div className="lbox-details">
                                <h1>We are Expert in The Field of Health Lab</h1>
                                <p>Provide accurate and reliable laboratory testing and analysis.</p>
                                <a href="#appointment" className="btn">Appointment</a>
                            </div>
                            </div>
                        </div>
                        <div className="pogoSlider-slide" data-transition="fade" data-duration={1500} style={{backgroundImage: 'url(images/slider-03.jpg)'}}>
                            <div className="lbox-caption pogoSlider-slide-element">
                            <div className="lbox-details">
                                <h1>We are providing Free Medicines for Poor Peoples</h1>
                                <p>Providing free medicine to poor people is a compassionate and impactful way to contribute to the well-being of those who are less fortunate and might not have access to essential medicines.</p>
                                <a href="#contact" className="btn">Contact Us</a>
                            </div>
                            </div>
                        </div>
                        </div>{/* .pogoSlider */}
                    </div>
                    </div>
                </div>
    </>
  )
}

export default Banner
