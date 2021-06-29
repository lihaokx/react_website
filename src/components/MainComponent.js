 
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { useState } from 'react';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';

const Main = () => {
    const [isImgSelected, setIsImgSelected] =useState(false);
    const [selectedDish, setSelectedDish] = useState("");
    const onDishSelected = (dishId) =>{
      if(!isNaN(dishId)){
        setIsImgSelected(true);
        setSelectedDish(dishId);
      }
    }

    return (
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
            </div>
          </Navbar>
          <div className="container">
          <Menu dishes={DISHES}  clickon={(dishId)=>onDishSelected(dishId)} />
          <Dishdetail  dish={DISHES.filter((dish) =>  dish.id === selectedDish)[0]} isImgSelected={isImgSelected}/>
          </div>
        </div>
    );
}
 
export default Main;

 
 


