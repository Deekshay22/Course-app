import {Fragment}  from "react";import React from 'react'
import { ListGroup, } from "reactstrap";
import { Link } from "react-router-dom";

const Menu=()=>{
    return (
        <Fragment>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" to="/" tag="a" action>
                Home
            </Link>

            <Link className="list-group-item list-group-item-action" to="/add-course" tag="a" action>
                Add Course
            </Link>

            <Link className="list-group-item list-group-item-action" to="/view-courses" tag="a" action>
                View Courses 
            </Link>

             <Link className="list-group-item list-group-item-action" to="/" href="/" tag="a" action>
                About
            </Link>

             <Link className="list-group-item list-group-item-action" to="/" tag="a" action>
                Contact US
            </Link>

        </ListGroup>
        </Fragment>
    )
}



export default Menu;
