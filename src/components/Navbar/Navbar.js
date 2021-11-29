import * as React from 'react';
import {Box , TextField} from '@mui/material'
import './Navbar.css';

function Navbar() {
   
    return (
        <>
        <nav>
          <div className="navbar">
              <h1 class="nav-logo">Meri Bachhat</h1>
              <div className="navmenu">
                  <div className="navlink">Locate Nearby <i class="fas fa-caret-down"></i></div>
                  <div className="navlink">Gift Cards <i class="fas fa-caret-down"></i></div>
                  <div className="navlink">Earn Certificate <i class="fas fa-caret-down"></i></div>
                  <Box sx = {{display : 'flex', alignItems : 'flex-end'}} className = "text-field">
                      <TextField id="input-with-sx" variant="standard" />
                  </Box>
              </div>
          </div>

       </nav> 
       </>
    )
}

export default Navbar