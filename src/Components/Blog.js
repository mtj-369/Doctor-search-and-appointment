import React from 'react'

const Blog = () => {
  return (
    <>
        <div id="blog" className="blog-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="title-box">
                            <h2>Blog</h2>
                            <p>We use an integrated approach instead of working with only one sector beacuse poverty is multidimentional</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-inner">
                            <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-01.jpg" alt />
                            </div>
                            <div className="item-meta">
                            <a href="#"><i className="fa fa-comments-o" /> 6 Comment </a>
                            <a href="#"><i className="fa fa-user-o" /> Admin</a>
                            <span className="dti">25 January 2023</span>
                            </div>
                            <h2>Medical Prescription</h2>
                            <p>Treatment is safe, effective, and appropriate for the patient's specific health condition.</p>
                            <a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true" /></a>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-inner">
                            <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-02.jpg" alt />
                            </div>
                            <div className="item-meta">
                            <a href="#"><i className="fa fa-comments-o" /> 5 Comment </a>
                            <a href="#"><i className="fa fa-user-o" /> Admin</a>
                            <span className="dti">10 March 2023</span>
                            </div>
                            <h2>Neurological Patients</h2>
                            <p>The most effective treatment will depend on factors such as the diagnosis, severity of the condition and individual responses to treatments.</p>
                            <a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true" /></a>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-inner">
                            <div className="blog-img">
                            <img className="img-fluid" src="images/blog-img-03.jpg" alt />
                            </div>
                            <div className="item-meta">
                            <a href="#"><i className="fa fa-comments-o" /> 8 Comment </a>
                            <a href="#"><i className="fa fa-user-o" /> Admin</a>
                            <span className="dti">18 July 2023</span>
                            </div>
                            <h2>Orthopedic Patients</h2>
                            <p>Patients to be in good health and well-mannered, it's essential to consider both physical and emotional well-being</p>
                            <a className="new-btn-d br-2" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    </>
  )
}

export default Blog
