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
					A Startup that seeks the comfort and security of the user when looking for accommodation.
					The perfect app for travelers, students, and even for people looking to rent for a long time.
					Our value proposition is based on transparency by providing security to the user through our
					user ranking and feedback.
					You will be able to evaluate your roommate, landlord and share your experience publicly.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}
