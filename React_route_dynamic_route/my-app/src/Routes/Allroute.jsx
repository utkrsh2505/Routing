import { Route ,Switch} from "react-router-dom";
import { AllProduct } from "../Pages/AllProduct";

import { Home } from "../Pages/Home";
import {ProductDetail} from "../Pages/ProductDetail";
import { Error } from "../Pages/Error";
const Allroute = ()=>{
    return(
        <>
        <Switch>
       <Route exact path="/" >
           <Home/>
       </Route>
       <Route  exact path="/products" >
           <AllProduct/>
       </Route>
       <Route exact path="/products/:id">
       <ProductDetail/>
       </Route>
      
       </Switch>
        </>
    )
}
export  {Allroute};