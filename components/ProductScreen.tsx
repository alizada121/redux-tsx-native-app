import React,{useState,useEffect}from 'react'
import { useNavigation } from "@react-navigation/native";
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity} from "react-native"
import {Product} from "../interfaces"
import axios,{AxiosResponse} from 'axios'
import data from "../MOCK_DATA.json"
import  AsyncStorage  from "@react-native-async-storage/async-storage"
import SingleProduct from './SingleProduct';

function ProductScreen(props) {
  const navigation = useNavigation();


  const [product,setProduct]=useState<Product[]>([])
  useEffect(()=>{
      setProduct(data)
  },[]);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.mapBox}>
       {product.slice(0,10).map((item,index)=>(
        <View  key={index} style={styles.item}>
         
          <View style={styles.info}>
          <Text>
          {item.title}
          </Text>
          <Text>
            {item.price}
          </Text>
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate("SingleProduct",{id:item.id})}}>
            <Text></Text>
             <Image  source={{uri: item.img}} style={{height: 100, width: 200}} />
          </TouchableOpacity>
         
          
        </View> 
       ))}
      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    
  },
  info:{
    display:"flex",
    flexDirection:"row",
  },
  mapBox:{
    display:"flex",
    // flexWrap:"wrap"
  },
  item:{
    marginBottom:20
  }
})

export default ProductScreen