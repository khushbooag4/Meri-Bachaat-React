import React from 'react'
import {Grid , Box, Typography} from '@mui/material'
import img from '../../assets/Images/main.png';
import comp1 from '../../assets/Images/comp1.png';
import comp2 from '../../assets/Images/comp2.png';
import comp3 from '../../assets/Images/comp3.png';
import stat from '../../assets/Images/stat.jfif';
import comp4 from '../../assets/Images/comp4.png';
import stat1 from '../../assets/Images/stat1.jfif';
import f1 from '../../assets/Images/sample.png';
import f2 from '../../assets/Images/sample1.png';
import Footer from '../Footer/Footer'
import './Main.css'

function Main() {
    return (
        <div className="main-container">
        <section className="main">
        <div class="container">
              <div className="text">
              <h1>MeriBachat</h1>
              <h3>One shopstop for all your additional savings !</h3>
              <p>Meribachat is the leading platform for your gifting needs. 
                  Here at meribachat we offer the most exciting deals and help
                   you to save few bucks on top of brand discounts.</p>
              <button className="btn">Browse all gift cards</button>
              </div>
              <div>
                  <img src={img} alt="img" />
              </div>
        </div>
        </section>
        <section className="stats">
            <h1>Check out what’s cool about us !</h1>
            <div className="stats-container">
                <div className="stats-data">
                    <img src={comp1} alt ="img" />
                    <h2>Gift Card for 350+ Brands</h2>
                    <p>Gifting was never as easy and affordable, 
                        as it is with MeriBachat GiftCards</p>
                    <button className="btn">Buy Gift Card</button>
                </div>
                <div className="stats-data">
                    <img src= {comp2} alt="img" />
                    <h2>Unbeatable Cashback</h2>
                    <p>Make the most of your shopping experience 
                        through unbelievable savings.</p>
                    <button className="btn">Get Cashback</button>
                </div>
                <div className="stats-data">
                    <img src={comp3} alt="img" />
                    <h2>Product Comparison</h2>
                    <p>Compare prices, features and more for your favourite products!</p>
                    <button className="btn">Compare Now</button>
                </div>
             </div>
        </section>
        <section className="features">
        <Box>
             <Typography variant="h4" className="offers">Key Features</Typography>
             <Grid container rowSpacing={1} columnSpacing ={{xs : 1,sm:2, md:3}} className ="container-offer">
                <Grid item xs={4}>
                    <div className="shadow-box">
                    <img src={f1} alt="img" width="150px" height="57px"/>
                    <h3>Discounts throughout the year</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="shadow-box">
                    <img src={f2} alt="img" />
                    <h3>Additional discounts above the brand discount</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
               </Grid>
               <Grid item xs={4}>
                   <div className="shadow-box">
                    <img src={f1} alt="img" />
                    <h3>No limit whatsoever unlike credit cards</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
               </Grid>
               <Grid item xs={4}>
                  <div className="shadow-box">
                    <img src={f2} alt="img" />
                    <h3>Pay the exact amount you want to spend</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
               </Grid>
               <Grid item xs={4}>
                   <div className="shadow-box">
                    <img src={f2} alt="img" />
                    <h3>0% Convnience fee</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
               </Grid>
               <Grid item xs={4}>
                   <div className="shadow-box">
                    <img src={f1} alt="img" />
                    <h3>No hidden charges</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
               </Grid>
               </Grid>
            </Box>
        </section>
        <section className="options">
            <Box>
             <Typography variant="h4" className="offers">What do we offer</Typography>
             <Grid container rowSpacing={1} columnSpacing ={{xs : 1,sm:2, md:3}} className ="container-offer">
                <Grid item xs={4} >
                    <img src={stat} alt="img" width="150px" height="57px"/>
                    <p>India’s Largest pre-shopping destination</p>
                </Grid>
                <Grid item xs={4}>
                    <img src={comp4} alt="img" />
                    <p>Gift cards for 300+ brands</p>
               </Grid>
               <Grid item xs={4}>
                    <img src={stat1} alt="img" />
                    <p>Product Comparison</p>
               </Grid>
               <Grid item xs={4}>
                    <img src={comp4} alt="img" />
                    <p>Discounts  throughout 365 days</p>
               </Grid>
               <Grid item xs={4}>
                    <img src={comp4} alt="img" />
                    <p>Brand discount + meriBachatdiscount = Super savings</p>
               </Grid>
               <Grid item xs={4}>
                    <img src={stat1} alt="img" />
                    <p>Unbetable cashbacks</p>
               </Grid>
               </Grid>
            </Box>
        </section>
        
        <section className="tabs">
            <Box>
            </Box>
        </section>
        <footer><Footer /></footer>
        </div>
    )
}

export default Main
