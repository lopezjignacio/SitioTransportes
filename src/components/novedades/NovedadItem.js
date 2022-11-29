import React from 'react';

const NovedadItem = (props) => {
	const {title, subtitle, imagen, body} = props;

	return (
		<div className="novedades">
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<img src={imagen} />
			<div dangerouslySetInnerHTML={{ __html: body }} />
			<hr />
		</div>
		);
}

export default NovedadItem;


/*dangerouslySetInnerHTML
dangerouslySetInnerHTML es el reemplazo de React para usar innerHTML en el DOM del navegador. En general, configurar HTML desde el código es arriesgado porque es fácil exponer inadvertidamente a sus usuarios a un ataque de secuencias de comandos entre sitios (XSS). Por lo tanto, puede configurar HTML directamente desde React, pero debe escribir dangerouslySetInnerHTML y pasar un objeto con una clave __html para recordar que es peligroso.*/