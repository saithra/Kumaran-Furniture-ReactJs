import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
    <footer className='footer'>
    <div className='footer_ul'>
        <ul>
            <h3>WHY KUMARAN</h3>
            <li>Our philosophy</li>
            <li>History</li>
            <li>Careers</li>
            <li>Our stores</li>
            <li>Sustainability</li>
            <li>Gender pay</li>
            <li>Modern slavery</li>
        </ul>
        <ul>
            <h3>YOUR ORDER</h3>
            <li>Delivery & returns</li>
            <li>Track your order</li>
            <li>Care guides</li>
            <li>Gift cards</li>
            <li>Trade</li>
            <li>The Outlet</li>
        </ul>
        <ul>
            <h3>INSPIRATION</h3>
            <li>Stories</li>
            <li>Case studies</li>
            <li>Guides</li>
            <li>Brochures</li>
            <li>Samples & swatches</li>
        </ul>
        <ul>
            <h3>STAY IN TOUCH</h3>
            <li>Contact us</li>
            <li>Find a store</li>
            <li>Book a design service</li>
            <li>Login</li>
        </ul>
        <ul>
            <h3>NEWSLETTER</h3>
            <li>Subscribe to our newsletter. We only send emails<br></br> once a week and only about good things.</li><br></br>
            <li><input type='email' placeholder='Email address' className='input'></input></li>
        </ul>
        </div>
        <div className='footer_2'>
            <select className='selector'>
                <option>United Kingdom(GBP $)</option>
                <option>France (EUR $)</option>
                <option>Germany (EUR $)</option>
                <option>Ireland (EUR $)</option>
            </select>
            <p>© All Rights Reserved 2024 · Kumaran Europe Ltd</p>
            <div className='foot_flex'>
                <ul>
                    <li>Terms & conditions</li>
                    <li>Cookie policy</li>
                    <li>Privacy policy</li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-pinterest"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer
