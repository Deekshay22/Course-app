import './App.css';
import react from 'react';
//import {Button} from "reactstrap";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from 'react-toastify'
import Home from "./Component/Home"
import Header from "./Component/Header"
import Menu from "./Component/Menu"
import AddCourse from "./Component/AddCourse"
import AllCourses from "./Component/AllCourses"
import {BrowserRouter as Router, Route,Routes, BrowserRouter} from "react-router-dom"
import {Row, Col, Container} from "reactstrap"
function App() {

  // const btnHandler= ()=> {
  //   toast.success("This is my first message", {position:"bottom-center"});
  // }
  return (
    <Router>
     
     <ToastContainer />
    <Container>
      <Header />
      <Row>
        <Col md={4}>
        <Menu />
        </Col>
        <Col md={8}>
        <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/add-course" Component={AddCourse} exact />
        <Route path="/view-courses" Component={AllCourses} exact />
        <Route path="/about" Component={Home} exact />
        <Route path="/contact-us" Component={Home} exact />
      </Routes>
        {/* <Home /> */}
        </Col>

      </Row>
      
    </Container>
    </Router>
  );
}

export default App;
