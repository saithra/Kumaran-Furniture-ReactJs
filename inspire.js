import React from 'react';
import "./inspire.css"
import img from "./img/ins1.webp";
import img1 from "./img/ins2.webp";
import img2 from "./img/ins3.webp";
import img3 from "./img/ins4.webp";
import img4 from "./img/ins5.webp";
import img5 from "./img/ins6.webp";
import Furn_nav from './furn_nav';
import Footer from './footer';

function Inspire() {
  return (
    <>
    <Furn_nav/>
    <div className='inspire_1'>
    INSPIRATION
    </div>
    <div className='inspire_grid'>
        <div>
            <img src={img} height={320} width={310}></img>
            <h1>Stories</h1>
            <p>A weekly anthology of articles on interiors, gardens, lifestyle, culture and recipes to inspire and intrigue.</p>
            <button className='button'>READ ON</button>
        </div>
        <div>
            <img src={img1} height={320} width={310}></img>
            <h1>Case studies</h1>
            <p>From bijoux city kitchens to large farmhouse conversions, customers share their design journeys.</p>
            <button className='button'>READ ON</button>
        </div>
        <div>
            <img src={img2} height={320} width={310}></img>
            <h1>Guides</h1>
            <p>Starting a project? Discover expert solutions to your planning, decorating, buying or styling queries.</p>
            <button className='button'>READ ON</button>
        </div>

    </div>
    <div className='inspire_box3'>
      <div className='box3_text'>
      <h1>Why Kumaran</h1>
      <p>From our design and engineering principles to the quality</p>
      <p>materials we work with, we explain what makes us special</p>
      </div>
      <div className='box3_img'>
        <div><img src={img3} height={350} width={350}></img>
        <button className='button'>OUR PHILOSOPHY</button></div>
        <div><img src={img4} height={350} width={350}></img>
        <button className='button'>OUR HISTORY</button></div>
        <div><img src={img5} height={350} width={350}></img>
        <button className='button'>SUSTAINABILITY STATEMENT</button></div>
      </div>
    </div>
   <Footer/>
    </>
  )
}

export default Inspire
