import React, {useEffect}from "react"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/js/parallax';

export const ParallaxFooter=() =>{
    useEffect(()=>{
        let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements);
    },[]);

    return(
			<div class="container">
				<div class="divider"></div>
					<br></br>
					<div className="parallax-container">
						<div className="parallax">
								<img src="../../fondo2.jpg"/>
						</div>
						<div className="section white">
							<h3 className="header">CONTÁCTANOS</h3>
							<p className="grey-text text-darken-3 lighten-3">¿Aún tienes dudas? Al igual que muchos viajeros del mundos,
							nuestro equipo se visto en vuelto en problemáticas de encontrar un hospedaje donde puedan salir
							y dejar sus pertenencias sin miedo a no encontrarlas. Por lo mismo, sabemos que la seguridad y 
							el comfort es uno de los principales pilares para pasar una instancia agradable. 
							Es por ello que decidimos crear una app donde puedas encontrar hospedajes que cumplan con tus necesidades,
							que puedas compartir y leer la experiencia de los demás usuarios. Y no solo eso, en caso de querer roomies,
							usted podrá ver la evaluación asiganda a su proximo compañero de cuarto así como podrá conocer los gustos y
							costumbres de su futuro compañero de cuarto</p>
						<div/>   
					</div>
				</div>
			</div>
    );
};
