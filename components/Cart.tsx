import React,{useEffect} from 'react'
import {View,Text} from "react-native"
import {useAppSelector,useAppDispatch} from "../hooks"
function Cart() {
  const product=useAppSelector((state)=>state.prod)
  
  

  useEffect(()=>{
    console.log(product)
    console.log("Salamkee")
  })
  return (
    <Text>Salam</Text>
  )
}

export default Cart