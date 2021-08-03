import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

export const FooterCss = () => {

    return(
			<div>
				<footer class="page-footer red lighten-1">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">About Us </h5>
								<p class="grey-text text-lighten-4">
									A Startup Application that seeks to connect roomies with their dream space and ideal roommate
								</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">RM Members</h5>
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