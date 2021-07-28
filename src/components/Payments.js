
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




export const Payments=()=> {
  const handler = window.ePayco.checkout.configure({
    key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
    test: true,
    external: false,
    autoclick: false,
    lang: 'es',
  })

  function handlePayment() {
    const data = {
      tax: 0,
      tax_base: 0,
      amount: 20000,
      name: 'Programa TOP Make it Real',
      description: 'Programa Fullstack Inmersivo',

      currency: 'cop',
      country: 'CO',

      invoice: '12345',
      extra1: 'extra1',
      extra2: 'extra2',
      extra3: 'extra3',

      response: `${process.env.REACT_APP_BASE_URL}/response`,

      name_billing: 'María Lopez',
      address_billing: 'Calle 23 # 54 - 10',
      type_doc_billing: 'CC',
      number_doc_billing: '1239075396',
      mobilephone_billing: '3298471233',

      methodsDisable: ['DP', 'PSE', 'SP'],
    }

    handler.open(data)
  }
  console.log(process.env.REACT_APP_EPAYCO_PUBLIC_KEY)
  return (
    <div className="App">
      <button class="waves-effect waves-pink pink btn-flat text-white" type="button" onClick={handlePayment}>Pagar
        <i class="material-icons left">payment</i>
      </button>
    </div>
  );
}



export default Payments;