import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function ProductCard(){
    const ProductList = [
        {
            id: 1,
            title: "Optical Biometer",
            description: "Some quick example text to build on the card title and make up the....",
            image: "/assets/images/products/product1.png",   
        },
        {
            id: 1,
            title: "Optical Biometer",
            description: "Some quick example text to build on the card title and make up the....",
            image: "/assets/images/products/product1.png",   
        },
        {
            id: 1,
            title: "Optical Biometer",
            description: "Some quick example text to build on the card title and make up the....",
            image: "/assets/images/products/product1.png",   
        },
        {
            id: 1,
            title: "Optical Biometer",
            description: "Some quick example text to build on the card title and make up the....",
            image: "/assets/images/products/product1.png",   
        },
        {
            id: 1,
            title: "Optical Biometer",
            description: "Some quick example text to build on the card title and make up the....",
            image: "/assets/images/products/product1.png",   
        },
        {
            id: 1,
            title: "Optical Biometer",
            description: "Some quick example text to build on the card title and make up the....",
            image: "/assets/images/products/product1.png",   
        },
        {
            id: 1,
            title: "Optical Biometer",
            description: "Some quick example text to build on the card title and make up the Some quick example text to build on the card title and make up the Some quick example text to build on the card title and make up the",
            image: "/assets/images/products/product1.png",   
        },
    ];


    const TruncateString = (description,num)=>{
        if(description.length > num){
            return description.slice(0,num);
        }else{
            return description;
        }
    }


  return (
    
     ProductList.map((item,index) => (
    <Col md={3} lg={3} xl={3} className="mb-4">
        <Card key={index} style={{ width: '100%' }}>
            <Card.Img variant="top" style={{height:'320px'}} src={item.image} />
            <Card.Body className='text-justify'>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {TruncateString(item.description, 40) +"..."}
            <Link to="/diagnostic/productdetails" className="text-primary btn">Details</Link>
            </Card.Text>
                <Link to="/productbuy" state={item.title} className='float-end btn' style={{background:'#10218b',color:'white'}}>Interested</Link>
            </Card.Body>
        </Card>
        </Col>

      ))

    
  )
}
