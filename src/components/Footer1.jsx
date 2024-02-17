import React from 'react'
import { Link } from 'react-router-dom'

function Footer1() {
  return (
    <>
    <div className=' d-flex align-items-center justify-content-evenly
     bg-primary text-light w-100 mb-5 mt-5' style={{height:"300px"}}>
        <div style={{width:"400px"}}>
            <h4>
            <i class="fa-solid fa-cart-shopping"></i>
                E-kart
            </h4>
            <h6>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. A veniam minus laudantium 
                quisquam consectetur omnis quo suscipit eius
                deleniti ullam, inventore corrupti impedit
                officia,cumque aperiam voluptates culpa fugit vel.
            </h6>
        </div>
        <div>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:"none",color:"white"}}>
                <h6>Home</h6>
            </Link>
            <Link to={'/Cart'} style={{textDecoration:"none",color:"white"}}>
                <h6>Cart</h6>
            </Link>
            <Link to={'/WishList'} style={{textDecoration:"none",color:"white"}}>
                <h6>Wish List</h6>    
            </Link>

        </div>
        <div>
            <h4>Guides</h4>
            <h6>React</h6>
            <h6>React Bootstrap</h6>
            <h6>Bootswatch</h6>
        </div>
        <div>
            <h4>Contact Us</h4>
            <div className='d-flex '>
                <input type="text" name="" id="" placeholder='Enter your email'className='form-control'/>
                <button className='btn btn-warning ms-2'>Subscribe</button>

            </div>
            <div className='d-flex align-item-center justify-content-evenly fs-4 mt-3'>
            <i class="fa-brands fa-instagram"style={{}}></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            </div>

        </div>
    </div>
    <div className='text-center'>
        <p>Copyright &#169; 2024. E-Kart build with React and Redux</p>
    </div>
    
    </>
  )
}

export default Footer1