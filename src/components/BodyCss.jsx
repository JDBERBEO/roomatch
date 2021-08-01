import React from "react";
import {BreadCrumb} from "./CardBody"
import 'materialize-css/dist/css/materialize.min.css'

export const BodyCss = () => {

    return(
      <div>
				<div class="container">
					<div class="section">
						<div class="row">
							<div class="col s12 m4">
								<div class="icon-block">
									<h1 class="center brown-text"><i class="material-icons">home</i></h1>
									<h5 class="center">Encourage to be a host</h5>
									<p class="light"> 
										Share your space to earn extra money and take advantage of new opportunities
									</p>
								</div>
							</div>

							<div class="col s12 m4">
								<div class="icon-block">
									<h1 class="center brown-text"><i class="material-icons">insert_invitation</i></h1>
									<h5 class="center">Reserve your space</h5>

									<p class="light">Wherever you travel or live, you have a match with the best space and the best host</p>
								</div>
							</div>

							<div class="col s12 m4">
								<div class="icon-block">
									<h1 class="center brown-text"><i class="material-icons">card_travel</i></h1>
									<h5 class="center">Discover the best experiences</h5>
									<p class="light">Enjoy the activities that you love, next to the best company</p>
								</div>
							</div>

						</div>
					</div>
				</div>
				<br></br>
			</div>
    );
}