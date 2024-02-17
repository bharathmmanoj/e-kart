import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
function Header1() {
    const wishlist = useSelector((state)=>state.wishlistReducer);
    const cartlist = useSelector((state)=>state.cartReducer)
    console.log("wishlist",wishlist);
  return (
    <>
     <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:"1"}} >
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}><Link to='/' style={{color:"white",textDecoration:"none"}}><i class="fa-solid fa-cart-shopping"></i>E-Kart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"style={{color:"white"}} className='btn border rounded me-3'>
                <Link to='/WishList' style={{textDecoration:"none",color:"white"}}>WishList<Badge bg="secondary" className='ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link href="#link"style={{color:"white"}} className='btn border rounded'>
                <Link to='/Cart'  style={{textDecoration:"none",color:"white"}} >Cart<Badge bg="secondary" className='ms-2'>{cartlist.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header1