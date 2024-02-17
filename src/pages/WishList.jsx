import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log("===wishlist array",wishlistArray);
    return (
    <>
    <Row className='m-5 p-5'style={{marginTop:"400px"}}>
        <Link to={'/'} style={{textDecoration:"none",color:"blue"}} className='m-3'><i class="fa-solid fa-arrow-left me-3"></i>Back To Home</Link>
    {       
            wishlistArray?.length>0?
            wishlistArray?.map((item)=>(
            <Col className='mb-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}}/>
                     <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>
                    <p>{item.description.slice(0,50)}...</p>
                    <p>Price :{item.price}</p>
                    </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
            )):
            <p>No Items to Display</p>
    }
    </Row>
    </>
  )
}

export default WishList