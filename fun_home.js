import React from 'react'
import './fun_home.css'
import main from './img/hme1.jpg'
import main_1 from './img/hme2.jpg'
import main_2 from './img/hme3.jpg'
import first from './img/hme4.jpg'
import second from './img/hme5.jpg'
import third from './img/hme6.jpg'
import ten from './img/hme7.avif'
import nine from './img/hme8.avif'
import eigth from './img/hme9.avif'
import seven from './img/hme10.avif'
import sofa from './img/hme11.jpg'
import sofa1 from './img/hme12.jpg'
import table from './img/hme13.avif'
import Footer from './footer'
import Furn_nav from './furn_nav'
function Fun_home() {
  return (
    <>
    <Furn_nav/>
      <div className='main-image'>
        <img src={main} className='img' />
      </div>

      <div className='main-div'>
        <span className='main-span' >Our design expertise, your vision.<br /> Endless possibilities.</span><br />
        <button type='button' className='main-button'>EXPLORE KITCHENS</button>
      </div>

      <div className='div-side'>
        <p className='main-side'>K &nbsp;&nbsp; why kumaran furniture</p>
      </div>

      <div className='next-div'>
        <span className='next-span'>Furniture & accessories sale</span>
        <p className='next-para'>Save up to 60% on selected designs. New lines added.</p>
        <button type='button' className='menu'>SHOP ALL REDUCTIONS</button>
      </div><br /><br /><br />
<br />

      <div className='fun_grid'>
        <div><img src={sofa} height={350} width={355}></img>
          <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
            <p>Available now</p>
          </div>
        </div>

        <div><img src={table} height={350} width={355}></img>
          <div>Laverton Geometric Rug
            <p>Available now</p>
          </div>
        </div>

        <div><img src={sofa1} height={350} width={355}></img>
          <div>Chichester Potboard
            <p>Available now</p>
          </div>
        </div>

      </div>
      <br /><br /><br /><br/>
      <br />
      <hr />

      <div className='next-div-1'>
        <span className='next-span-1'>Breathe life into your kitchen</span>
        <p className='next-para-1'>From ambient lighting and artwork to jars, candles and bowls,<br /> here’s an edit of our kitchen styling favourites.</p>
        <button type='button' className='menu-1'>SHOP NOW</button>
      </div>

      <div><img src={main_1} className='next-div-img' /></div>
      <br /><br /><br />
      <hr />
      <div className='next-div-2'>
        <span className='next-span-2'>We’re throwing in the kitchen sink</span>
        <p className='next-para-2'>To celebrate 18 years of Neptune kitchens, we'll give you a free sink <br />cabinet when you spend £10,000 on kitchen or laundry cabinetry. </p>
        <p className='next-para-2'>For purchases of £20,000 or more, we'll throw in a kitchen sink <br />and tap from our collection, too. </p>
        <p className='next-para-2'>Enjoy immediate availability on installation.</p>
        <button type='button' className='menu-2'>DISCOVER KITCHEN DESIGN</button>
      </div>

      <div><img src={main_2} className='next-div-img-1' /></div>
      <br /><br /><br />
      <hr />

      <div className='main-flex'>
        <br /><br />
        <span className='main-next-span'>The collection</span>
        <ul className='main-ul'>
          <li><img className='main-img-ul' src={first} /></li>
          <li><img className='main-img-ul' src={second} /></li>
          <li><img className='main-img-ul' src={third} /></li>
        </ul>
      </div>

      <div className='main-flex-button'>
        <ul className='main-btn'>
          <li><button type='button' className='menu-3'>EXPLORE DESIGNS</button></li>
          <li><button type='button' className='menu-3'>READ STORIES</button></li>
          <li><button type='button' className='menu-3'>ORDER A BROCHURE</button></li>
        </ul>
      </div>
      <br /><br /><br />
      <hr />
      <br /><br /><br />

      <div className='next-div-3'>
        <span className='next-span'>Visit us</span><br />
        <p className='next-para-1'>Our stores feel more like homes than showrooms, bringing our <br />collections to life in a way that’s both tangible and inspirational. </p>
        <br /> <button type='button' className='menu-2'>FIND YOUR NEAREST STORE</button>
      </div>

      <div>
        <ul className='main-ul'>
          <li><img className='main-img-ul-v' src={ten} /></li>
          <li><img className='main-img-ul-v' src={eigth} /></li>
          <li><img className='main-img-ul-v' src={seven} /></li>
          <li><img className='main-img-ul-v' src={nine} /></li>
        </ul>
      </div>

      <div>
        <ul className='main-text'>
          <li><span className='main-text-ul'>Fellback</span></li>
          <li><span className='main-text-ul'>Guildford</span></li>
          <li><span className='main-text-ul'>Swindon Outlet</span></li>
          <li><span className='main-text-ul'>Bath</span></li>
        </ul>
      </div>

      <div>
        <ul className='main-text-1'>
          <li><span className='main-text-ul'>October 2018</span></li>
          <li><span className='main-text-ul-1'>November 2019</span></li>
          <li><span className='main-text-ul-2'>December 2020</span></li>
          <li><span className='main-text-ul-1'>July 2021</span></li>
        </ul>
      </div>
      <br/><br/><br/>
      <Footer/>
    </>
  )
}

export default Fun_home