import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ot9hpiv', 'template_euw8dzt', form.current, {
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
         <div id="contact" className="contact-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Contact us</h2>
                            <p>. </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xs-12">
                        <div className="contact-block">
                            {/* <form id="contactForm"> */}
                            <form ref={form} onSubmit={sendEmail} id="form">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                    <div className="help-block with-errors" />
                                </div>                                 
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                                    <div className="help-block with-errors" />
                                </div> 
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Your number" id="number" className="form-control" name="number" required data-error="Please enter your number" />
                                    <div className="help-block with-errors" />
                                </div> 
                                </div>
                                <div className="col-md-12">
                                <div className="form-group"> 
                                    <textarea className="form-control" id="message" placeholder="Your Message" rows={8} data-error="Write your message" required defaultValue={""} />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="submit-button text-center">
                                    <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                                    <div id="msgSubmit" className="h3 text-center hidden" /> 
                                    <div className="clearfix" /> 
                                </div>
                                </div>
                            </div>            
                            </form>
                        </div>
                        </div>
                        <div className="col-lg-12 col-xs-12">
                        <div className="left-contact">
                            {/* <h2>Contact</h2> */}
                            <div className="media cont-line">
                            <div className="media-left icon-b">
                                <i className="fa fa-location-arrow" aria-hidden="true" />
                            </div>
                            <div className="media-body dit-right">
                                <h4><a href="https://www.google.com/maps" target="blank">Address</a></h4>
                                <p>Fleming 196 Woodside Circle 700100,Kolkata, West Bengal</p>
                            </div>
                            </div>
                            <div className="media cont-line">
                            <div className="media-left icon-b">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </div>
                            <div className="media-body dit-right">
                                <h4><a href="https://www.google.com/mail" target="_blank">Email</a></h4>
                                <a href="#">healthlab2026@gmail.com</a>
                            </div>
                            </div>
                            <div className="media cont-line">
                            <div className="media-left icon-b">
                                <i className="fa fa-volume-control-phone" aria-hidden="true" />
                            </div>
                            <div className="media-body dit-right">
                                <h4>Phone Number</h4>
                                <a href="#">+91 6289290913</a><br />
                                <a href="#">+91 8294662714</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    </>
  )
}

export default ContactUs
