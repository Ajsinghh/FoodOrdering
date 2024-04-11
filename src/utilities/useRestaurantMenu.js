import {useState , useEffect} from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fethData();
    },[])
     const fethData = async()=>{
         const data = await fetch(
           MENU_API +
             resId +
             "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
         );
         const json = await data.json();
         setResInfo(json);
     }
     const updateState = (newValue) =>{
        setResInfo(newValue);
     } 
    return [resInfo , updateState];     
}
export default useRestaurantMenu 