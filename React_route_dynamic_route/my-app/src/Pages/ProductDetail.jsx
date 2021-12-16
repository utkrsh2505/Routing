import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";


const ProductDetail = ()=>{

const {id} = useParams()
const [data,setData] = React.useState(null);
const [isLoading,setIsLoading] = React.useState(false);

const handleFetch = (id)=>{
    return axios.get(`http://localhost:3001/products/${id}`)
}  

const handleFetchData = async()=>{
    try{
        setIsLoading(true)
        console.log(id)
        const getData = await handleFetch(id)
        console.log(getData)
        setData(getData)
        setIsLoading(false)
        
    }
    catch(err){

    }
}
useEffect(() => {
    handleFetchData()
 }, [])
if(isLoading){
    return <h1>...Loading</h1>
}
return(
        <>
        <h1>{id}</h1>
    <h1>Name :{data?.data?.name}</h1>
    <h3>Price: {data?.data?.price}</h3>
        </>
    )
}
export {ProductDetail};