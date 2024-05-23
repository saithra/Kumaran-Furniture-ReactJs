import React from 'react'
import { Link } from "react-router-dom"
import './furn_nav.css'
import fur from './img/furniture.jpg'
import acc from './img/acc.jpg'
import light from './img/light.jpg'
import paint from './img/paint.jpg'
import kit from './img/kit.jpg'
import design from './img/design.jpg'
import Fun_home from './fun_home'
function Furn_nav() {
    return (
        <>
             <div class="container-fluid" className='paraDiv'>
                <p class="text-center p-2" id='paraHeader-1'>Book a free kitchen design consultation today | Enjoy immediate availability on your installation.</p>
            </div>
    <nav class="navbar navbar-expand-sm bg-violet navbar-violet" id='nav_bar'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KUMARAN FURNITURE</a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link" href="/sales">Sales</a>
        </li>
  
        


        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Furniture</Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"></a>
            <div className='first'>
                                        <ul className='down-1'><br />
                                            <h6>KITCHEN & DINING</h6>
                                            <li><Link class="dropdown-item" to="/tables">Tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Chairs & benches</Link></li>
                                            <li><Link class="dropdown-item" to="#">Dressers & wine racks</Link></li>
                                            <li><Link class="dropdown-item" to="#">Sideboards</Link></li>
                                            <li><Link class="dropdown-item" to="#">Prep stations</Link></li>

                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head'>LIVING</h6>
                                            <li><Link class="dropdown-item" to="#">Sofas</Link></li>
                                            <li><Link class="dropdown-item" to="#">Armchairs</Link></li>
                                            <li><Link class="dropdown-item" to="#">Footstools & ottomans</Link></li>
                                            <li><Link class="dropdown-item" to="#">Coffee & side tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Console tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Media cabinets</Link></li>
                                            <li><Link class="dropdown-item" to="#">Bookcases & shelving</Link></li>
                                            <li><Link class="dropdown-item" to="#">Last chance upholstery</Link></li>
                                        </ul>


                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head'>HOME OFFICE</h6>
                                            <li><Link class="dropdown-item" to="#">Bookcases & shelving</Link></li>
                                            <li><Link class="dropdown-item" to="#">Desks & workstations</Link></li>
                                            <li><Link class="dropdown-item" to="#">Desk chairs</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head-1'>HALLWAY</h6>
                                            <li><Link class="dropdown-item" to="#">Coat racks</Link></li>
                                            <li><Link class="dropdown-item" to="#">Console tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Seating</Link></li>
                                            <li><Link class="dropdown-item" to="#">Coffee & side tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Console tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Media cabinets</Link></li>
                                            <li><Link class="dropdown-item" to="#">Bookcases & shelving</Link></li>
                                            <li><Link class="dropdown-item" to="#">Last chance upholstery</Link></li>

                                        </ul>
                                    </div>

                                    <br></br>

                                    <div className='first'>
                                        <ul className='down-2'>
                                            <br />
                                            <h6 className='head'>BEDROOM</h6>
                                            <li><Link class="dropdown-item" to="#">Beds & headboards</Link></li>
                                            <li><Link class="dropdown-item" to="#">Mattresses</Link></li>
                                            <li><Link class="dropdown-item" to="#">Bedside tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Dressing tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Chests of drawers</Link></li>
                                            <li><Link class="dropdown-item" to="#">Wardrobes</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <h6 className='head'>GARDEN</h6>
                                            <li><Link class="dropdown-item" to="#">Tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Chairs & benches</Link></li>
                                            <li><Link class="dropdown-item" to="#">Relaxed seating</Link></li>
                                            <li><Link class="dropdown-item" to="#">Occasional tables</Link></li>
                                            <li><Link class="dropdown-item" to="#">Garden sets</Link></li>
                                            <li><Link class="dropdown-item" to="#">Parasols & bases</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <h6 className='head'>BATHROOM</h6>
                                            <li><Link class="dropdown-item" to="#">Cabinetry</Link></li>
                                            <li><Link class="dropdown-item" to="#">Taps & accessories</Link></li>
                                        </ul>
                                    </div>

                                    <li><img src={fur} id='fur-1' /></li>
                                
            
            
            </li>
            
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Accessories</a>
          <ul class="dropdown-menu" id='dropdown-menu'>
            <li><Link class="dropdown-item" ></Link>
           
                                    <div className='first'>
                                        <ul className='down-1'><br />
                                            <h6>TABLETOP</h6>
                                            <li><Link class="dropdown-item" to="#">Tableware</Link></li>
                                            <li><Link class="dropdown-item" to="#">Glassware & barware</Link></li>
                                            <li><Link class="dropdown-item" to="#">Cutlery</Link></li>
                                            <li><Link class="dropdown-item" to="#">Place settings</Link></li>
                                            <li><Link class="dropdown-item" to="#">Table linen</Link></li>
                                            <li><Link class="dropdown-item" to="#">Serveware</Link></li>

                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head'>DECORATIVE</h6>
                                            <li><Link class="dropdown-item" to="#">Decorative bowls & platters</Link></li>
                                            <li><Link class="dropdown-item" to="#">Ornaments</Link></li>
                                            <li><Link class="dropdown-item" to="#">Photo frames</Link></li>
                                            <li><Link class="dropdown-item" to="#">Pots & planters</Link></li>
                                            <li><Link class="dropdown-item" to="#">Vases & jugs</Link></li>
                                        </ul>


                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head'>STORAGE</h6>
                                            <li><Link class="dropdown-item" to="#">Baskets</Link></li>
                                            <li><Link class="dropdown-item" to="#">Trays, boxes & jars</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head-1'>THE FLOWER SHOP</h6>
                                            <li><Link class="dropdown-item" to="#">Stems</Link></li>
                                            <li><Link class="dropdown-item" to="#">Twigs & greenery</Link></li>
                                            <li><Link class="dropdown-item" to="#">Succulents & plants </Link></li>
                                            <li><Link class="dropdown-item" to="#">Bouquets</Link></li>
                                            <li><Link class="dropdown-item" to="#">Vases & jugs</Link></li>
                                        </ul>
                                    </div>

                                    <br></br>
                                    <br />
                                    <div className='first'>

                                        <ul className='down-2'>
                                            <br />
                                            <h6 className='head'>CANDLES & FRAGRANCE</h6>
                                            <li><Link class="dropdown-item" to="#">Candles</Link></li>
                                            <li><Link class="dropdown-item" to="#">Candlesticks & holders</Link></li>
                                            <li><Link class="dropdown-item" to="#">Diffusers</Link></li>
                                            <li><Link class="dropdown-item" to="#">Bath & body</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <h6 className='head' id='up'>WALL HANGINGS</h6>
                                            <li><Link class="dropdown-item" to="#">Mirrors</Link></li>
                                            <li><Link class="dropdown-item" to="#">Wall art</Link></li>
                                            <li><Link class="dropdown-item" to="#">Wall clocks</Link></li>
                                        </ul>

                                        <ul className='down-1' id='up-1'>
                                            <h6 className='head' id='up'>Wall clocks</h6>
                                            <li><Link class="dropdown-item" to="#">Scatter cushions</Link></li>
                                            <li><Link class="dropdown-item" to="#">Throws</Link></li>
                                            <li><Link class="dropdown-item" to="#">Rugs & runners</Link></li>
                                            <li><Link class="dropdown-item" to="#">Table linen</Link></li>
                                            <li><Link class="dropdown-item" to="#">Bed linen</Link></li>
                                        </ul>
                                    </div>

                                    <li><img src={acc} id='acc-1' /></li>
                                

            </li>
            
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Lighting</a>
          <ul class="dropdown-menu" id='dropdown-menu-one'>
            <li><a class="dropdown-item" ></a>
            
                                    <div className='first'>
                                        <ul className='down-1'><br />
                                            <h6>LAMPS & LAMPSHADES</h6>
                                            <li><Link class="dropdown-item" to="#">Desk lamps</Link></li>
                                            <li><Link class="dropdown-item" to="#">Table lamps</Link></li>
                                            <li><Link class="dropdown-item" to="#">Floor lamps</Link></li>
                                            <li><Link class="dropdown-item" to="#">Lampshades</Link></li>
                                            <li><Link class="dropdown-item" to="#">Light bulbs</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head'>FITTED</h6>
                                            <li><Link class="dropdown-item" to="#">Pendants & ceiling lights</Link></li>
                                            <li><Link class="dropdown-item" to="#">Wall lights</Link></li>
                                            <li><Link class="dropdown-item" to="#">Outdoor lighting</Link></li>
                                        </ul>
                                        <li><img src={light} id='light-1' /></li>
                                    </div>
                               
                        

            
            </li>
            
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Paint</a>
          <ul class="dropdown-menu" id='dropdown-menu-two'>
            <li><a class="dropdown-item" ></a>
            <div className='first'>
                                        <ul className='down-1' id='down-01'><br />
                                            <h6>PAINT</h6>
                                            <li><Link class="dropdown-item" to="#">Shop by colour</Link></li>
                                            <li><Link class="dropdown-item" to="#">Signature palettes</Link></li>
                                            <li><Link class="dropdown-item" to="#">Timber treatments</Link></li>
                                        </ul>
                                        <li><img src={paint} id='paint-1' /></li>
                                    </div>
            </li>
           
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Kitchens</a>
          <ul class="dropdown-menu" id='dropdown-menu-three'>
            <li><a class="dropdown-item" ></a>
            <div className='first'>
                                        <ul className='down-1'><br />
                                            <h6>CABINETRY</h6>
                                            <li><Link class="dropdown-item" to="#">Our collections</Link></li>
                                            <li><Link class="dropdown-item" to="#">Chichester</Link></li>
                                            <li><Link class="dropdown-item" to="#">Henley</Link></li>
                                            <li><Link class="dropdown-item" to="#">Limehouse</Link></li>
                                            <li><Link class="dropdown-item" to="#">Suffolk</Link></li>
                                            <li><Link class="dropdown-item" to="#">Laundry</Link></li>
                                            <li><Link class="dropdown-item" to="#">Islands</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head'>DETAILS</h6>
                                            <li><Link class="dropdown-item" to="#">Worktops</Link></li>
                                            <li><Link class="dropdown-item" to="#">Appliances</Link></li>
                                            <li><Link class="dropdown-item" to="#">Handles & hardware</Link></li>
                                            <li><Link class="dropdown-item" to="#">Flooring</Link></li>
                                            <li><Link class="dropdown-item" to="#">Wall coverings & tiles</Link></li>
                                            <li><Link class="dropdown-item" to="#">Sinks & taps</Link></li>
                                            <li><Link class="dropdown-item" to="#">Bookcases & shelving</Link></li>
                                            <li><Link class="dropdown-item" to="#">Cabinet organisers</Link></li>
                                        </ul>


                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head-1'>DISCOVER</h6>
                                            <li><Link class="dropdown-item" to="#">Case studies</Link></li>
                                            <li><Link class="dropdown-item" to="#">Free design consultation</Link></li>
                                            <li><Link class="dropdown-item" to="#">Lifetime guarantee</Link></li>
                                            <li><Link class="dropdown-item" to="#">Design experts</Link></li>
                                            <li><Link class="dropdown-item" to="#">Solid timber cabinetry</Link></li>
                                            <li><Link class="dropdown-item" to="#">Craftsmanship</Link></li>
                                            <li><Link class="dropdown-item" to="#">Larder love</Link></li>
                                        </ul>
                                        <li><img src={kit} id='kit-1' /></li>
                                    </div>
            
            </li>
            
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Design Services</a>
          <ul class="dropdown-menu"  id='dropdown-menu-four'>
            <li><a class="dropdown-item"></a>
            <div className='first'>
                                        <ul className='down-1'><br />
                                            <h6>OUR SERVICES</h6>
                                            <li><Link class="dropdown-item" to="#">Interior design</Link></li>
                                            <li><Link class="dropdown-item" to="#">Kitchen design</Link></li>
                                            <li><Link class="dropdown-item" to="#">Colour consultancy</Link></li>
                                            <li><Link class="dropdown-item" to="#">Curtains & blinds</Link></li>
                                            <li><Link class="dropdown-item" to="#">Fabric by the metre</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head'>ROOM INSPIRATION</h6>
                                            <li><Link class="dropdown-item" to="#">Dining</Link></li>
                                            <li><Link class="dropdown-item" to="#">Living</Link></li>
                                            <li><Link class="dropdown-item" to="#">Kitchen</Link></li>
                                            <li><Link class="dropdown-item" to="#">Bedroom</Link></li>
                                            <li><Link class="dropdown-item" to="#">Garden</Link></li>
                                            <li><Link class="dropdown-item" to="#">Home office</Link></li>
                                        </ul>


                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head-1'>DISCOVER</h6>
                                            <li><Link class="dropdown-item" to="#">Case studies</Link></li>
                                            <li><Link class="dropdown-item" to="#">Introducing colour</Link></li>
                                            <li><Link class="dropdown-item" to="#">consultancy</Link></li>
                                            <li><Link class="dropdown-item" to="#">Planning a project</Link></li>
                                        </ul>

                                        <ul className='down-1'>
                                            <br />
                                            <h6 className='head-1'>TRADE</h6>
                                            <li><Link class="dropdown-item" to="#">Trade enquiries</Link></li>
                                            </ul>
                                        <li><img src={design} id='design-1' /></li>
                                    </div>
            </li>
            
          </ul>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/ourstores">Our Stores</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/inspiration">Inspiration</Link>
        </li>
        
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
        <Link class="nav-link" to='/sales'><i class="fa-solid fa-location-dot fa-lg"></i></Link>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <li class="nav-item">
        <Link class="nav-link" to='/sales'><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <li class="nav-item">
        <Link class="nav-link" to='/sales'><i class="fa-solid fa-bag-shopping fa-lg"></i></Link>
          
        </li>
        

      </ul>
    </div>
  </div>
</nav>

          


 




        </>
    );
}

export default Furn_nav;