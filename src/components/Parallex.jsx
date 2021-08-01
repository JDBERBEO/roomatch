import React, {useEffect}from "react"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/js/parallax';

export const Parallax=() =>{
    useEffect(()=>{
        let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements);
    },[]);

    return(
        <div class="container">
          <div className="parallax-container">
						<div className="parallax">
								<img src="../../fondo1.jpg"/>
						</div>
						<div className="section white">
							<h2 className="header"> Welcome!</h2>
							<h4 className="grey-text text-darken-3 lighten-3">Start living the experience of finding safe accommodation</h4>
						<div/>   
          </div>
        </div>
      </div>
    );
};
