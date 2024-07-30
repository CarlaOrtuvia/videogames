import React from "react";
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({ data }) => {
    return(
           <>
                <Card>
                  <Card.Img variant="top" src={data.image } />
                  <Card.Body>
                    <Card.Text>{data.title}</Card.Text>
                  </Card.Body>
                </Card>
              
              </>
            );
          }
      
          
    
export default ItemDetail