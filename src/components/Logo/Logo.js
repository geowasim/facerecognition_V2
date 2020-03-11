import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import chip from './chip.png'


const Logo = () => {
	return(
		<div className='ma4 mt0 mb0'>
				<Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 73, width: 80 }} >
		 			<div className="Tilt-inner p3">
		 				<img style={{paddingTop:'5px'}} alt='logo' src={chip} />
		 			</div>
				</Tilt>
		</div>
	);
}

export default Logo;