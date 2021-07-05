 
import Menu from './MenuComponent';
import { useState } from 'react';
import  Dishdetail  from './DishdetailComponent';
// import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const Main = (props) => {
  // console.log("props of main");
  // console.log(props);
    const [isImgSelected, setIsImgSelected] =useState(false);
    const [selectedDish, setSelectedDish] = useState("");
    const onDishSelected = (dishId) =>{
      if(!isNaN(dishId)){
        setIsImgSelected(true);
        setSelectedDish(dishId);
      }
    }

    const HomePage = () => {
      // console.log("Home component: props" );
      // console.log(props);
      return (  
        <Home  dish={props.dishes.filter((dish) => dish.featured)[0]}
        promotion={props.promotions.filter((promo) => promo.featured)[0]}
        leader={props.leaders.filter((leader) => leader.featured)[0]} />
      );
    }

    const DishWithId = ({match}) => {
      console.log("dish details: match" );
      console.log(match);
      return(
          <Dishdetail dish={props.dishes.filter((dish) => dish.id === parseInt( match.params.dishId,10))[0]} 
            comments={props.comments.filter((comment) => comment.dishId === parseInt( match.params.dishId,10))} />
      );
    };

    return (
        <div className="App">
          <Header/>
          <div className="container">

          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={props.dishes} clickon={(dishId)=>onDishSelected(dishId)} /> } />
              <Route path='/menu/:dishId' component={(match) => DishWithId(match)} />
              <Route path='/aboutus' component={() => <About leaders={props.leaders} /> }/>
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
 

export default withRouter(connect(mapStateToProps)(Main));

 
 


