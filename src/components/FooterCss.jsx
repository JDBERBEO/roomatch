import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

export const FooterCss = () => {

    return(
			<div>
				<footer class="page-footer red lighten-1">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">Footer Content</h5>
								<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">INTEGRANTES</h5>
								<ul>
									<li><a class="grey-text text-lighten-3" href="#!">Aarón Hernández</a></li>
									<li><a class="grey-text text-lighten-3" href="#!">Kelly Correa</a></li>
									<li><a class="grey-text text-lighten-3" href="#!">David Berbeo</a></li>
									<li><a class="grey-text text-lighten-3" href="#!">Juan Sebastián </a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="footer-copyright">
						<div class="container">
							© 2014 Copyright Text
							<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
						</div>
					</div>
				</footer>
			</div>
    )
}