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
									<h2 class="center brown-text"><i class="material-icons">home</i></h2>
									<h5 class="center">Anímater a ser anfitrión</h5>
									<p class="light"> Comparte tu espacio para ganar dinero extra y aprovechar nuevas oportunidades</p>
								</div>
							</div>

							<div class="col s12 m4">
								<div class="icon-block">
									<h2 class="center brown-text"><i class="material-icons">insert_invitation</i></h2>
									<h5 class="center">Reserva tu spacio</h5>

									<p class="light">Por donde viajes o vivas  has match con el mejor espacio y mejor anfitrión</p>
								</div>
							</div>

							<div class="col s12 m4">
								<div class="icon-block">
									<h2 class="center brown-text"><i class="material-icons">card_travel</i></h2>
									<h5 class="center">Descubre las mejores experiencias</h5>
									<p class="light">Disfruta de las actividades que mas te gustan a la lado de la mejor compañia</p>
								</div>
							</div>

						</div>
					</div>
				</div>
				<br></br>
				<div class="container">
					<BreadCrumb/>
					<br></br>
				</div>
			</div>
    );
}