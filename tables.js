import React from 'react';
import "./tables.css"
import tab from "../Furniture/img/tab1.webp"
import tab_1 from "../Furniture/img/tab2.webp"
import tab_2 from "../Furniture/img/tab3.webp"
import tab_3 from "../Furniture/img/tab17.jpg"
import tab_4 from "../Furniture/img/tab16.jpg"
import tab_5 from "../Furniture/img/tab15.jpg"
import tab_6 from "../Furniture/img/tab14.jpg"
import tab_7 from "../Furniture/img/tab13.jpg"
import tab_8 from "../Furniture/img/tab12.jpg"
import tab_9 from "../Furniture/img/tab11.webp"
import tab_10 from "../Furniture/img/tab10.png"
import tab_11 from "../Furniture/img/tab9.png"
import tab_12 from "../Furniture/img/tab8.jpg"
import tab_13 from "../Furniture/img/tab7.jpg"
import tab_14 from "../Furniture/img/tab6.jpg"
import tab_15 from "../Furniture/img/tab5.webp"
import tab_16 from "../Furniture/img/tab4.jpg"
import tab_17 from "../Furniture/img/tab3.webp"
import Furn_nav from './furn_nav'
import Footer from './footer';

function Tables() {
  return (
    <>
    <Furn_nav/>
    <div className='fun_txt'>
    <p>COLLECTION</p>
    <h2>Tables</h2>
    <p>Solid timber dining tables built to last for generations. Our<br></br> collection spans intimate tables for four and extending designs for <br></br>up to 14.</p>
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
     <div><img src={tab} height={350} width={355}></img>
     <div>Shoreditch Large Sofa, Hugo<br></br> Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_1} height={350} width={355}></img>
     <div>Laverton Geometric Rug
      <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_2} height={350} width={355}></img>
     <div>Chichester Potboard
      <p>Available now</p>
    </div>
    </div>
     <div><img src={tab_3} height={350} width={355}></img>
     <div>Pembroke Fitted Storage
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_4} height={350} width={355}></img>
     <div>Charlie Headboard, Holkham Sand
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_5} height={350} width={355}></img>
     <div>Pembroke Fitted Storage
      <p>Available now</p>
    </div>
    </div>
     <div><img src={tab_6} height={350} width={355}></img>
     <div>Olivia Super King Headboard, <br></br>Angus Flint
      <p>Available now</p>
    </div>
    </div>
     <div><img src={tab_7} height={350} width={355}></img>
     <div>Brown accent chairs </div>
     <p>Available now</p>
     </div>
     <div><img src={tab_8} height={350} width={355}></img>
     <div>Lottie Medium Sofa, Isla<br></br> Kingfisher with Vintage Oak Legs
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_9} height={350} width={355}></img>
     <div>Carter Bookcase
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_10} height={350} width={355}></img>
     <div>Mowbray Dining Chair, Elliot<br></br> Granite with Vintage Oak
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_11} height={350} width={355}></img>
     <div>Matilda Armchair, Clara<br></br> Mocha with Dark Oak Legs
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_12} height={350} width={355}></img>
     <div>Shoreditch Small Sofa,<br></br> Hugo Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_13} height={350} width={355}></img>
     <div>Laverton Geometric Rug
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_14} height={350} width={355}></img>
     <div>Shoreditch Small Sofa,<br></br> Hugo Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_15} height={350} width={355}></img>
     <div>Laverton Geometric Rug
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_16} height={350} width={355}></img>
     <div>Shoreditch Small Sofa,<br></br> Hugo Pale Oat with Pale Oak Legs
     <p>Available now</p>
     </div>
     </div>
     <div><img src={tab_17} height={350} width={355}></img>
     <div>Shoreditch Dining Chair, Clara <br></br>Warm White with Pale Oak Legs
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

export default Tables
