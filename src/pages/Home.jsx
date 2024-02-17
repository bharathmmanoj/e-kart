import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'
import useFetch from '../hooks/useFetch';
import { addTowishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/slices/cartSlice';
function Home() {
    const data = useFetch("https://dummyjson.com/products")
    console.log(data);
    const dispatch = useDispatch();
  return (
    <>
    <Row className='ms-3 me-3' style={{marginTop:"150px"}}>
        {
            data?.length>0?
            data?.map((item)=>(
            <Col className='mt-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}}/>
                     <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>
                    <p>{item.description.slice(0,50)}...</p>
                    <p>Price :{item.price}</p>
                    </Card.Text>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Button variant="outline-danger" onClick={()=>dispatch(addTowishlist(item))}><i class="fa-solid fa-heart"></i></Button>
                            <Button variant="outline-success" onClick={()=>dispatch(addtoCart(item))}><i class="fa-solid fa-cart-plus"></i></Button>
                        </div>
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

export default Home