import React,{useEffect,useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import data from "../MOCK_DATA.json"
import {SingleProductInter} from "../interfaces"
import { useAppSelector,useAppDispatch } from '../hooks';
import {AddToCart} from "../Slices/ProductSlice"


function SingleProduct(props) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { id } = props.route.params;
  const [item,setItem]=useState<SingleProductInter[]>([])
  useEffect(()=>{
    setItem(data.filter((item)=>item.id==id))
  },[])
  return (

    <View style={styles.detail}>
      <Text>SAlam</Text>
      {data && data.filter((item)=>item.id===id).map((e,index)=>{
        return(
          <View key={index} >
            <Text>
          
              {e.title}
            </Text>
            {/* onPress={()=>{navigation.navigate("Cart",{id:item.id})}} */}
           <TouchableOpacity style={styles.button} onPress={()=>{
            dispatch(AddToCart(id))
            console.log(id)
            navigation.navigate("Cart")}}>
            <Text>SALAM</Text>
           </TouchableOpacity>
          </View>

    
        )
      })}
    </View>
  )
}

const styles=StyleSheet.create({
  detail:{
    width:300,
    backgroundColor:"red"

  },
  button:{
    borderWidth:2
  }



})

export default SingleProduct