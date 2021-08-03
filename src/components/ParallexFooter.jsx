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
							<h3 className="header">GET IN TOUCH</h3>
							<p className="grey-text text-darken-3 lighten-3">
							Do you still have doubts? Like many travelers around the world, 
							our team has found the issues about finding a place where
							they can stay and leave their baggage without fear of not finding them.
							 For this reason, we know that safety and comfort are one of the main pillars
							  to have a pleasant time. For that reason, we developed an app where you can find 
							  accommodations that meet your needs. You could share and read the experience of other users. 
							  Last but not least, you will be able to know the ranking assigned to your next roommate
							</p>
						<div/>   
					</div>
				</div>
			</div>
    );
};
