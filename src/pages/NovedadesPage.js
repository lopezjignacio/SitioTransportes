import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

	const [loading, setLoading] = useState(false);
	const [novedades, setNovedades] = useState([]);

	useEffect(() => {
		const cargarNovedades = async () =>{
			setLoading(true);
			const response = await axios.get('http://localhost:3000/api/novedades');
			setNovedades(response.data);
			setLoading(false);
		};

		cargarNovedades();
	}, []);

	return (
		<section className="holder">
			<h2>Novedades</h2>
			<h3>Título</h3>
			{loading ? (
				<p>Cargando ... </p>
			):(
					novedades.map(item => <NovedadItem 
						key={item.id}
						title={item.titulo}
						subtitle={item.subtitulo}
						imagen={item.imagen}
						body={item.cuerpo} />)
				)}
		</section>
	);
}

export default NovedadesPage;



// useState const [state, setState] = useState(initialState);
// Returns a stateful value, and a function to update it.

// During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

// The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

// setState(newState);
// During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.

// ---- useEffect---- 
// useEffect(didUpdate);
// Accepts a function that contains imperative, possibly effectful code.

// Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

// Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

// By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.

// Cleaning up an effect
// Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function. For example, to create a subscription:

// useEffect(() => {
//   const subscription = props.source.subscribe();
//   return () => {
//     // Clean up the subscription
//     subscription.unsubscribe();
//   };
// });
// The clean-up function runs before the component is removed from the UI to prevent memory leaks. Additionally, if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect. In our example, this means a new subscription is created on every update. To avoid firing an effect on every update, refer to the next section.

// */