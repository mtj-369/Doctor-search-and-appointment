import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ot9hpiv', 'template_dt7zqga', form.current, {
        publicKey: 'fUONeaEkO-Tu9GbdW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div id="appointment" className="appointment-main">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Appointment</h2>
                            <p>Online Appointment, Phone-in Appointment, Walk-in Appointment with Token. </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                        <div className="well-block">
                            <div className="well-title">
                            <h2>Book an Appointment</h2>
                            </div>
                            <form ref={form} onSubmit={sendEmail} id="form">
                            {/* Form start */}
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md" />
                                </div>
                                </div>
                                {/* Text input*/}
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="email" required>Email</label>
                                    <input id="email" name="email" type="email" placeholder="E-Mail" className="form-control input-md" />
                                </div>
                                </div>
                                {/* Text input*/}
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="date">Preferred Date</label>
                                    <input id="date" name="date" type="date" placeholder="Preferred Date" className="form-control input-md" />
                                </div>
                                </div>
                                {/* Select Basic */}
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label" htmlFor="time">Preferred Time</label>
                                    <select id="time" name="time" className="form-control">
                                    <option value="8:00 AM to 9:00 AM">8:00 AM to 9:00 AM</option>
                                    <option value="9:00 AM to 10:00 AM">9:00 AM to 10:00 AM</option>
                                    <option value="10:00 AM to 1:00 AM">10:00 AM to 1:00 AM</option>
                                    <option value="02:00 PM to 3:00 PM">02:00 PM to 3:00 PM</option>
                                    <option value="03:00 PM to 04:00 PM">03:00 PM to 04:00 PM</option>
                                    <option value="04:00 PM to 05:00 PM">04:00 PM to 05:00 PM</option>
                                    </select>
                                </div>
                                
                                </div>
                                {/* Select Basic */}
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label" >Department</label>
                                    <select id="dept" name="dept" className="form-control">
                                    <option value="Choose Department">Choose Department</option>
                                    <option value="Anesthesiology">Anesthesiology</option>
                                    <option value="Ayurvedic">Ayurvedic</option>
                                    <option value="Gynecologist">Gynecologist/Obstetrician</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Orthology">Orthology</option>
                                    <option value="Dentist">Dentist</option>
                                    
                                    </select>
                                </div>
                                </div>

                                <div className="col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Doctor Name</label>
                                    <select id="app" name="app" className="form-control">
                                    <option value="Choose Name">Choose Name</option>
                                    <option value="Dr.K Sinha">Dr.K Sinha</option>
                                    <option value="Dr.Amrita Singh">Dr.Amrita Singh</option>
                                    <option value="Dr.Varun Kr Singh">Dr.Varun Kr Singh</option>
                                    <option value="Dr.Kristana">Dr.Kristana</option>
                                    <option value="Dr.Tanu Verma">Dr.Tanu Verma</option>
                                    </select>
                                </div>
                                </div>

                                {/* Button */}
                                <div className="col-md-12">
                                <div className="form-group">
                                    
                                    <button id="singlebutton" name="singlebutton" type="submit" value='send' className="new-btn-d br-2">Make An Appointment</button>
                                    
                                </div>
                                </div>
                            </div>
                            </form>

                            
                            {/* form end */}

                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                        <div className="well-block">
                            <div className="well-title">
                            <h2>Why Appointment with Us</h2>
                            </div>
                            <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">24/7 Hours Available</h4>
                                <div className="feature-content">
                                <p>Providing 24/7 appointments, you can cater to urgent cases that require immediate attention and ensure that patients receive timely care. </p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Experienced Staff Available</h4>
                                <div className="feature-content">
                                <p>Highly skilled and experienced staff ensures quality healthcare, expertise in diagnostics, and compassionate patient care, promoting positive outcomes.</p>
                                </div>
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Low Price &amp; Fees</h4>
                                <div className="feature-content">
                                <p>Affordable rates and transparent fees make healthcare accessible, easing financial burdens and fostering better health outcomes for all.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    </>
  );
};

export default ContactUs;