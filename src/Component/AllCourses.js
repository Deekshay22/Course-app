import {react} from 'react'
import Course from './Course'
import { useState, useEffect } from 'react';
import {Card,} from 'reactstrap';
import axios from 'axios';
import { toast } from "react-toastify";
import base_url from '../API/Bootapi';

const AllCourses = ()=>{
    useEffect(() =>{
        document.title="All course";
        getAllCourseFromServer();
    }, []);


    const getAllCourseFromServer= () =>{
        axios.get(`${base_url}/course/courses`).then(
            (response) => {
                    // console.log(response);
                    console.log(response.data);
                    toast.success("course has been loaded");
                    setCourse(response.data);
            },
            (error)=>{
                console.log(error);
                toast.success("something went wrong");
            }

        )
    };

    const[courses, setCourse]=useState([
        //{title:"Java Courses", description:"This is demo course"},
    ]);
    const updatedCourseById= (id) =>{
      setCourse(courses.filter((c) => c.id != id));
    };
    return (
        <div>
            {/* <Button onClick={() => {
                 console.log("test");
                
                 setCourse([
                    ...courses, 
                    {
                        title:"Java Courses", 
                        description:"This is demo course"
                    },
                ]);
            }}>
                Test
            </Button> */}
            <Card>
            <h1 className='text-center'>All Courses</h1>
            <p className='text-center'> List of courses are :</p>
            {
                courses.length> 0
                ? courses.map((item)=> <Course key={item.id}  course={item} update={updatedCourseById} />)
                : "No courses"
            }
            </Card>
        </div>
    );
}
export default AllCourses;