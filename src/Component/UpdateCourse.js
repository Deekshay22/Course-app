import {Fragment} from 'react'
import {Form, FormGroup,Card ,Input,Container, Button} from "reactstrap";

const UpdateCourse =()=>{
    return(
        <Fragment>
            <Form>
                <FormGroup>
                    <label for="courseId">Update Course ID</label>
                    <Input type="number" place="enter course Id" id="courseId"></Input>
                </FormGroup>
            </Form>
        </Fragment>
    )
}
export default UpdateCourse;