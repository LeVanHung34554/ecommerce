import React from 'react';
import {Link} from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs' 
import newsletter from "../images/newsletter.png";
import {SiZalo} from 'react-icons/si';
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt='newletter' />
                <h2 className='mb-0 text-white'>
                  Sign Up for Newsletter
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input type="text" className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">

                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div >
                  <address className='text-white'> 
                  Hno : 277 Near Vill chopal,<br/>Sonipat,Haryana <br/> PinCode: 123434</address>
                  <a href='tel:+032423' className='mt-3 d-block mb-1 text-white'>+03423423</a>
                  <a href='mailto:hunga37732@gmail.com' className='mt-2 d-block mb-0 text-white'>hunga37732@gmail.com</a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className='text-white' href='#'><BsGithub className='fs-4'/></a>
                <a className='text-white' href='#'><BsInstagram className='fs-4'/></a>
                <a className='text-white' href='#'><BsYoutube className='fs-4'/></a>
                <a className='text-white' href='#'><BsLinkedin className='fs-4'/></a>
                <a className='text-white' href='#'><SiZalo className='fs-4'/></a>
              </div>
              </div>
            </div>
            <div className="col-3">

              <h4 className='text-white mb-4'>Infomation</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Poicy</Link>
                <Link to='/shipping-policy'className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to='/term-conditions'className='text-white py-2 mb-1'>Term & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>
                Account
              </h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'> &copy;
                {new Date().getFullYear()};Powered by Developer's Corner('')
              </p>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer
