import React from 'react'
import "./sales.css"
import img from "../Furniture/img/sofa2.jpg"
import opi from "../Furniture/img/opicity.jpg"
import img_1 from "../Furniture/img/sofa.png"
import opi_1 from "../Furniture/img/opi_1.jpg"
import img_2 from "../Furniture/img/living3.webp"
import opi_2 from "../Furniture/img/opi_2.jpg"
import img_3 from "../Furniture/img/sofa3.avif"
import opi_3 from "../Furniture/img/opi_3.jpeg"
import img_4 from "../Furniture/img/bed.jpg"
import opi_4 from "../Furniture/img/opi_03.jpg"
import img_5 from "../Furniture/img/sofa4.jpg"
import opi_5 from "../Furniture/img/opi_5.jpg"
import img_6 from "../Furniture/img/bed1.jpg"
import opi_6 from "../Furniture/img/opi_03.jpg"
import img_7 from "../Furniture/img/chair4.jpg"
import opi_7 from "../Furniture/img/opi_6.webp"
import img_8 from "../Furniture/img/living1.jpg"
import opi_8 from "../Furniture/img/opi_7.webp"
import img_9 from "../Furniture/img/table.avif"
import opi_9 from "../Furniture/img/opi_8.jpeg"
import img_10 from "../Furniture/img/dining.jpg"
import opi_10 from "../Furniture/img/opi_9.webp"
import img_11 from "../Furniture/img/chair2.avif"
import opi_11 from "../Furniture/img/opi_10.jpg"
import img_12 from "../Furniture/img/living.avif"
import opi_12 from "../Furniture/img/opi_11.webp"
import img_13 from "../Furniture/img/chair3.avif"
import opi_13 from "../Furniture/img/opi_12.jpeg"
import img_14 from "../Furniture/img/bed3.avif"
import opi_14 from "../Furniture/img/opi_13.jpeg"
import img_15 from "../Furniture/img/chair5.jpg"
import opi_15 from "../Furniture/img/opi_14.jpg"
import img_16 from "../Furniture/img/bal.jpg"
import opi_16 from "../Furniture/img/opi_1.jpg"
import img_17 from "../Furniture/img/dining3.webp"
import opi_17 from "../Furniture/img/opi_1.jpg"
import Furn_nav from './furn_nav'
import Footer from './footer'



function Sales() {
  return (
    <>
    <Furn_nav/>
    <div className='fun_txt'>
    <p>COLLECTION</p>
    <h2>Furniture & accessories sale</h2>
    <p>Enjoy up to 60% off timeless designs this winter, with savings<br></br> across everything from dining tables and chairs to tableware and<br></br> lighting.</p>
    <div className='sticky'>
    <button>
    <select>
        <option>Collection</option>
        <option>Show all</option>
        <option>Alderney</option>
        <option>Allium</option>
        <option>Amelia</option>
        <option>Auburn</option>
        <option>Basil</option>
        <option>Beech</option>
    </select>
    </button>
    <button>
    <select>
        <option>Type</option>
        <option>Show all</option>
        <option>Aprons</option>
        <option>Armchairs</option>
        <option>Beds</option>
        <option>Candles</option>
        <option>Chairs</option>
        <option>Tables</option>
    </select>
    </button>
    <button><input type='checkbox'></input>Avaliable now</button>
    <p className='para_1'>
    <select>
        <option>Sort by: Featured</option>
        <option>Featured</option>
        <option>Best Selling</option>
        <option>Alphabetically,A-Z</option>
        <option>Alphabetically,Z-A</option>
        <option>Price,low to high</option>
        <option>Price,high to low</option>
        <option>Date,old to new</option>
        <option>Date,new to old</option>
    </select>
    </p>
    </div>
    </div>
    <div className='fun_grid'>

     <div className='container'>
     <img src={img} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_1} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_1} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_2} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_2} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>


     <div className='container'>
     <img src={img_3} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_3} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_4} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_4} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_5} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_5} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_6} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_6} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>
     

     <div className='container'>
     <img src={img_7} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_7} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_8} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_8} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>


     <div className='container'>
     <img src={img_9} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_9} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>


     <div className='container'>
     <img src={img_10} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_10} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>


     <div className='container'>
     <img src={img_11} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_11} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>
     <div className='container'>
     <img src={img_12} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_12} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_13} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_13} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_14} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_14} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_15} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_15} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_16} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_16} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>

     <div className='container'>
     <img src={img_17} height={350} width={355} className='image'></img>
     <div className='overlay'>
      <img src={opi_17} height={351} width={355} className='text'></img>
     </div>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>


    </div>
    <div className='text_sale'>
    <div className='text_sale_1'>
        <h1>Furniture & accessories sale</h1>
        <p>Enjoy up to 60% off selected designs.</p>
        <button>EXPLORE DESIGNS</button>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Sales


