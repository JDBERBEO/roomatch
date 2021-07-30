import React from "react";
import Card from 'react-bootstrap/Card'

export const CardBody = () => {
	return (
		<div>
			<Card>
				<Card.Header><h1>¿QUIÉNES SOMOS?</h1></Card.Header>
				<Card.Img variant="top" src="../../hostProfile.jpg" />
				<Card.Body>
					<Card.Text>
					Una Startup que busca la comodidad y seguridad del usuario al buscar hospedajes.
					Aplicación ideal para viajeros, estudiantes e incluso para personas que buscan rentar de forma prolongada.
					Nuestra propuesta de valor se basa en la transparencia al brindar seguridad al usuario por medio de rankings.
					Podrás evaluar a tu roomie, casero y compartir tu experiencia de forma pública,
					de tal manera que cada usuario tendrá un historial con comentarios y ranking asignado. 
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}
