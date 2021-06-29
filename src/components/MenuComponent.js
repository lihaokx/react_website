
import React, { Component, useState } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

const Menu = (props) => {
    const menufile = props.dishes;
    const [isImgSelected, setIsImgSelected] =useState(false);
    const [selectedDish, setSelectedDish] = useState("");


    const onDishSelected = (dish) =>{
      if(dish){
        setIsImgSelected(true);
        setSelectedDish(dish);
      }
    }

    const menu = menufile.map((dish) => {
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
          {/* <div className="row">  */}
            <Dishdetail isImgSelected={isImgSelected} selectedDish={selectedDish} />
          {/* </div> */}
        </div>
      );
}
 
export default Menu;
 