import {Link} from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
       
        <Link to="/">Home</Link>
        <Link to="/products">All Product</Link>
        </>
    )
}
export {Navbar};