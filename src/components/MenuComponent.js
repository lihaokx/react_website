
import React, { Component, useState } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';



const Menu = (props) => {
    const menufile = props.dishes;
    const [isImgSelected, setIsImgSelected] =useState(false);
    const [selectedDish, setSelectedDish] = useState("");
    console.log(menufile);

    const onDishSelected = (dish) =>{
      if(dish){
        setIsImgSelected(true);
        setSelectedDish(dish);
      }
    }

    const renderDish =(isImgSelected) =>{
      if(isImgSelected){        
        return(
          <Card>
            <CardImg top src={selectedDish.image} alt={selectedDish.name} />
            <CardBody>
              <CardTitle>{selectedDish.name}       
              </CardTitle>
              <CardText>{selectedDish.description}</CardText>
            </CardBody>
          </Card>
        )            
      }
      else{
        return(
          <div>
            <p></p>
          </div>
        )
      }
    }

    const menu = menufile.map((dish) => {
        console.log(dish.image);
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
              <Card key={dish.id} 
                onClick={() => {onDishSelected(dish)}}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card> 
          </div>
        );
    });
    
    return (
        <div className="container">
          <div className="row"> 
            {menu}
          </div>
          <div className="row"> 
            {renderDish(isImgSelected)}
          </div>
        </div>
      );
}
 
export default Menu;
 