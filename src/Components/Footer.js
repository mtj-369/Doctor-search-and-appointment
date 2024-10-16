// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//        <footer className="footer-box mb-20">
//                     <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                         <p className="footer-company-name">All Rights Reserved. © 2023 <a href="#">Health Lab</a> Design By : <a>MRITUNJAY KUMAR</a></p>
//                         </div>
//                     </div>
//                     </div>

//                     <div className="right-top">
//                         <ul>
//                             <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
//                             <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
//                             <li><a href="https://www.instagram.com/mritunjay_2" target='blank'><i className="fa fa-instagram" aria-hidden="true" /></a></li>
//                             <li><a href="https://youtu.be/WOyJL6sD0_4" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
//                         </ul>
//                         </div>

//                 </footer>
//     </>
//   )
// }

// export default Footer


import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', padding: '20px 0', textAlign: 'center', color: '#fff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p style={{ margin: '0' }}>
              All Rights Reserved. © 2023 <a href="#" style={{ color: '#fff' }}>Health Lab</a> Design By: <a href="#" style={{ color: '#fff' }}>MRITUNJAY KUMAR</a>
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#fff' }}>
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#fff' }}>
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <a href="https://www.instagram.com/mritunjay_2" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#fff' }}>
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <a href="https://youtu.be/WOyJL6sD0_4" aria-label="YouTube" target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: '#fff' }}>
              <i className="fa fa-youtube-play" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

