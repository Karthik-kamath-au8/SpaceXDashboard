import React from "react";
import Logout from '../auth/Logout';

function Navbar() {
	return (
		<div style={{ backgroundColor: 'rgb(29, 28, 28)' }}>
			<div className="logo-container" style={{ textAlign : 'left'}}>
				<img  src="../spacex.png" alt="spacex-logo" width='13%' height='20px' />
			</div>
			<div style={{ textAlign : 'right'}}>
			<Logout/>
			</div>
		</div>
	);
}

export default Navbar;