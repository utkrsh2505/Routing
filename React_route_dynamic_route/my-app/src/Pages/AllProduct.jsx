import React ,{useEffect}from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const AllProduct = ()=>{
    const [data,setData] =React.useState([]);
    const [isLaoding,setIsLoading] = React.useState(true);
    const handleFetch = ()=>{
      return axios.get("http://localhost:3001/products")
    }

    const handleFetchData = async()=>{
       try{
           setIsLoading(true);
           const getData = await handleFetch()
             console.log(getData.data);
           setData(getData)
      
           setIsLoading(false)
       }
       catch(err){
       console.log(err)
       }
    }
    
    useEffect(()=>{
  handleFetchData()
    },[])
    
    if(isLaoding){
        return <h1>...Loading</h1>
    }
    return(
        <>
      <h1>All Product</h1>

      {data?.data?.map((item)=>(
         
      <div key={item.id}>
          <h3>{item.name}</h3>
        
          <Link to={`products/${item.id}`}>More Detail</Link>
      </div>
      ))}
        </>
    )
}
export {AllProduct};