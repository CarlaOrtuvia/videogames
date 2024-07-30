import React from "react";
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ data }) => {
    return(
           <>
                <Card bg="dark" text="white" className="m-5 w-75">
                  <Card.Img className="w-100 "  variant="top" src={data.image } />
                  <Card.Body>
                    <Card.Text>{data.title}</Card.Text>
                  </Card.Body>
                </Card>
              
              </>
            );
          }
      
          
    
export default ItemDetail