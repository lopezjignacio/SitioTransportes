import React from 'react';
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
	return (
		<footer>
			<p>Derechos reservados. Transporte X</p>
			<p>&copy;2022</p>
    		<address class="address">
    			Juan Ignacio López <a href="mailto:lopez.jignacio@gmail.com">lopez.jignacio@gmail.com</a>
  			</address>
  		</footer>
		);
	}

export default Footer;