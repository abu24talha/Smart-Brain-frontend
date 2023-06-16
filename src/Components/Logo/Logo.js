import React from "react";
import { Tilt }  from "react-tilt";
import logopng from './logopng.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className='Tilt br2 shadow-2' options={{max : 55}} style={{ height: 150, width: 150 }}>
      <div><img style={{paddingTop : '15px', width : '120px'}} alt = 'Logo' src={logopng}></img></div>
    </Tilt>
        </div>
    )
}
export default Logo;
