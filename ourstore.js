import React from 'react'
import './ourstore.css'
import inside from './img/our.webp'
import our1 from './img/our1.webp'
import our2 from './img/our2.webp'
import our3 from './img/our3.webp'
import our4 from './img/our4.webp'
import Footer from './footer'
import Final from './final'
import Furn_nav from './furn_nav'
function Ourstore() {
    return (
        <div>
            <Furn_nav/>


            <div className='next-div-our'>
                <span className='next-span-our'> Our stores</span>
                <p className='next-para-our'>We design our stores to feel more like homes than showrooms. <br />Each one brings our collections to life in a way that's both <br />tangible and inspirational.</p>
                <button type='button' className='menu-our'>FIND A STORE</button>
            </div><br /><br /><br />
            <br />

            <div><img src={inside} className='our-img' /></div>
            <br />
            <p className='hori_line'></p>
            <br /><br /><br />

            <div className='next-div-our-main'>
                <span className='next-span-our'> Store types</span>
                <p className='next-para-our'>With more than 30 Neptune stores in the<br />
                    UK and Europe, as well as Neptune by<br />
                    and partner stores, there is always a<br />
                    Neptune near you.</p>
            </div>


            <div className='fin'>
                <Final />
            </div>


            <br /><br /><br />
            <p className='hori_line'></p>


            <br /><br /><br />





            <div className='our-div'>
                <center>
                    <span className='our-span'>Find your local Neptunes</span>
                </center>

                <div className='grid-color'>
                    <div className='grid-our'>

                        <ul>
                            <p className='grid-para'>South East</p>
                            <li>Canterbury</li>
                            <li>Chesham</li>
                            <li>Chichester</li>
                            <li>Farnham</li>
                            <li>Guildford</li>
                            <li>Hailsham</li>
                            <li>Hove</li>
                            <li>Reading</li>
                            <li>Tonbridge</li>
                            <li>Winchester</li>
                        </ul>

                        <ul>
                            <p className='grid-para'>London</p>
                            <li>Chiswick</li>
                            <li>Fulham</li>
                            <li>Weybridge</li>
                            <li>Wimbledon</li>
                        </ul>

                        <ul>
                            <p className='grid-para'>East of England</p>
                            <li>Bury St Edmunds</li>
                            <li>Cambridge</li>
                            <li>Colchester</li>

                        </ul>

                        <ul>
                            <p className='grid-para'>South West</p>
                            <li>Bath</li>
                            <li>Bristol</li>
                            <li>Cheltenham</li>

                        </ul>


                        <div className='grid-second'>

                            <ul>
                                <p className='grid-para'>North West</p>
                                <li>Chester</li>
                                <li>Knutsford</li>
                                <li>Southport</li>
                            </ul>

                            <ul>
                                <p className='grid-para'>North East</p>
                                <li>York</li>
                                <li>Yorkshire Outlet</li>
                            </ul>

                            <ul>
                                <p className='grid-para'>West Midlands</p>
                                <li>Edgbaston</li>
                            </ul>
                        </div>

                        <div className='grid-third'>

                            <ul>
                                <p className='grid-para'>Northern Ireland</p>
                                <li>Belfast</li>
                            </ul>

                            {/* <ul>
                                <p className='grid-para'>Europe</p>
                                <li>Paris, France</li>
                                <li>Berlin, Germany</li>
                                <li>Fellbach, Germany</li>
                                <li>Köln, Germany</li>
                                <li>Tegernsee, Germany</li>
                            </ul> */}
                        </div>
                    </div>


                </div>

            </div>

            <br /><br /><br /><br />
            <p className='hori_line'></p>

            <br /><br /><br />
            <div>
                <span className='our-p'>Discover our services</span>
                <br /><br /><br />
                <div>
                    <ul className='ourgrid-01' >
                        <li><img src={our1} className='our-img-1' /><br /><br /><p>Kitchen design</p></li>
                        <li><img src={our2} className='our-img-1' /><br /><br /><p>Home design</p></li>
                        <li><img src={our3} className='our-img-1' /><br /><br /><p>Color consultancy</p></li>
                        <li><img src={our4} className='our-img-1' /><br /><br /><p>Curtain & blinds</p></li>
                    </ul>

                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </div>
    )
}

export default Ourstore