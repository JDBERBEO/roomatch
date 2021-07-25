import React from 'react'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


export const BreadCrumb = () => {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="">
              <Button>price</Button>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="">
              <Button>Type of accommodation</Button>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="">
              <Button>Free cancellation</Button>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="">
              <Button>Reserve now</Button>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="">
              <Button>More filters</Button>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
}
