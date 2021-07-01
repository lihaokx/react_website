 
import Menu from './MenuComponent';
import { useState } from 'react';
import  Dishdetail  from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

const HomePage = () => {
  return (  
    <Home  dish={DISHES.filter((dish) => dish.featured)[0]}
    promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
    leader={LEADERS.filter((leader) => leader.featured)[0]} />
  );
}
 

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

          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={DISHES} clickon={(dishId)=>onDishSelected(dishId)} />} />
              <Route exact path='/contactus' component={Contact} /> 
              <Redirect to="/home" />
          </Switch>

          {/* <Menu dishes={DISHES}  clickon={(dishId)=>onDishSelected(dishId)} /> */}
          {/* <Dishdetail  dish={DISHES.filter((dish) =>  dish.id === selectedDish)[0]} isImgSelected={isImgSelected}/> */}
          <Footer/>
          </div>
        </div>
    );
}
 
export default Main;

 
 


