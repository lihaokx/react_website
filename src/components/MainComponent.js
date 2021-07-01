 
import Menu from './MenuComponent';
import { useState } from 'react';
import  Dishdetail  from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


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
          <Header/>
          <div className="container">
          <Menu dishes={DISHES}  clickon={(dishId)=>onDishSelected(dishId)} />
          <Dishdetail  dish={DISHES.filter((dish) =>  dish.id === selectedDish)[0]} isImgSelected={isImgSelected}/>
          <Footer/>
              </div>
        </div>
    );
}
 
export default Main;

 
 


