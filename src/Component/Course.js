import {  react } from "react";
import {Button,CardText, Card, Container, CardBody, CardSubtitle} from "reactstrap";
import axios from "axios";
import {toast} from 'react-toastify'
import base_url from "../API/Bootapi";
const Course = ({course, update}) =>{

   const deleteCourse=(id)=> {
    axios.delete(`${base_url}/course/${id}`).then(
        (response)=>{
            toast.success("course deleted");
            update(id);
        },
        (error) => {
            toast.error("course not deleted || Server problem");
        }
    );
    };
    
    return (
        <Card className="text-center m-2">

        <CardBody>
            <CardSubtitle  className="font-weight-bold">{course.name}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <CardText>Rs: {course.price}</CardText>
            <Container  className="text-center">
                <Button color="danger m-2" onClick={()=> {
                    deleteCourse(course.id);
                }}>
                    Delete</Button>
                <Button color="warning ml-3">Update</Button>
            </Container >

        </CardBody>

    


        </Card>




    );
}
    

export default Course;
