import axios from 'axios';
import  React, {Fragment, useEffect, useState} from 'react'
import { Form, FormGroup, Input, Button, Container } from 'reactstrap'
import base_url from '../API/Bootapi';
import {toast} from 'react-toastify'

const AddCourse =() =>{
    
    useEffect(() => {
        document.title=" Add Courses";
    }, []);

    const [ course, setCourse] = useState({});
    
    // form handler function
    const handleForm= (e) =>{
    console.log(course);
    postDatatoServer(course);

    e.preventDefault();
    }

    const postDatatoServer =(data)=> {
        axios.post(`${base_url}/course`,data).then(
            (response)=> {
              console.log(response);
              console.log("success");
              toast.success("Success ");
              setCourse({ id: "", name: "", description: "" });
            }, 
            (error)=> {
                console.log(error);
                console.log("error");
                toast.error("Error ! Something went wrong");
            }
        );
    };

    return (
        <Fragment>
            <h1 className="text-center">Fill course detail</h1>
          <Form onSubmit={handleForm}>
            <FormGroup >
                <label for="id">Course ID</label>
                <Input type="text" placeholder="Enter here" name=" " id="id"
                 onChange={(e)=> {
                    setCourse({...course, id: e.target.value})
                }}>
                </Input>
            </FormGroup>

            <FormGroup> 
                <label for="name">Course Title</label>
                <Input type="textarea" placeholder="title" id="name" 
                onChange={(e)=>{
                    setCourse({...course , name: e.target.value})
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="description">Course Description</label>
                <Input  type="text" placeholder="title" 
                id="description" 
                style={{height:100}}

                onChange={(e)=> {
                    setCourse({...course, description: e.target.value})
                }}

                />
            </FormGroup>

             <FormGroup>
                <label for="price">Course Price</label>
                <Input  type="number" placeholder="title" 
                id="price" 
                //style={{height:200}}
                onChange={(e)=> {
                    setCourse({...course, price: e.target.value})
                }}
                />
            </FormGroup>

            <Container className='text-center m3'>
            <Button type="submit" className='mx-1' color="success" >Add Course</Button>
             <Button color="warning m1-2"  onClick={()=> {
                setCourse({ id: "", name: "", description: "" , price:""})
             }} >Clear</Button>
            </Container>
            
          </Form>
        </Fragment>
    );
};
export default AddCourse;