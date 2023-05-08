import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'




import './Navbar.css';

function NavScrollExample() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))

    getDocs(categoriesRef)
      .then(snapshot => {
        const categoriesAdapted = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
        })
        setCategories(categoriesAdapted)
      })
  }, [])


  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar">
      <Container>
      <Link to="/"><img src= "https://res.cloudinary.com/dxfhquzse/image/upload/v1679883912/OIG.hs0wxlNBWIwsjsP_zoom_dx7wuq.png" style={{width: 50}} /></Link>
        <Link style={{textDecoration: "none", color: "black", fontSize: "x-large", padding: 5}} to="/">Andes Drink Co</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            
            {
            categories.map(cat => {
              return <NavLink key={cat.id} to={`/category/${cat.slug}`} className={"navbarLink" }>{cat.label}</NavLink>
            })
          }
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
