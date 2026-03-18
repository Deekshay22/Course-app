import { Fragment, } from "react";
import { useEffect } from 'react';
import {Button, Card, Container} from "reactstrap";
const Home = ()=> {

    useEffect(() =>{
        document.title=" Courses || learn with deeksha";
    }, []);

 
    return (
        <Fragment>
        <Container className="text-center ">
            <Card>
                <h3 className="display-3">
                    Being a card so that i may use
                </h3>

                <Button color="primary" >Start using</Button>
           </Card>
        </Container>
        </Fragment>

    );
}
export default Home;