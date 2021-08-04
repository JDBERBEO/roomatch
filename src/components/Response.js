import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom'
import axios from 'axios'
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/profileReducer";

function queryString(query) {
	const res = {}
	query
		.replace('?', '')
		.split('&')
		.forEach(q => {
			const [key, value] = q.split('=')
			res[key] = value
		})
	return res
}

export const Response=()=> {
	const location = useLocation()
	let data1=""
	useEffect(() => {
		const { ref_payco } = queryString(location.search)

		axios({
			method: 'GET',
			baseURL: 'https://secure.epayco.co',
			url: `/validation/v1/reference/${ref_payco}`,
		})
			.then(({ data }) =>{
				console.log(data);
				data1={data};
			} )
	}, [location])

	return (
		<div className="container">
			<div>
				<h3>Thanks for trusting us!</h3>
			</div>
			<br></br>
			<div class="divider"></div>
			<br></br>
			<div class="row">
				<div class="col s12 m7">
					<div class="card">
						<div class="card-image">
							<img src="../../background1.jpg"/>
							<span class="card-title">{data1.x_business}</span>
						</div>
						<div class="card-content">
							<p>The roomatch team wishes you a good rest.
								We hope to see you soon!
							</p>
						</div>
						<div class="card-action red accent-2 ">
							<a class="text-white" href="/">Home </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}