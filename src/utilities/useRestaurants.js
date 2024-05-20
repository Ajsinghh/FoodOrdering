import {useState , useEffect} from "react"
import { MAIN_API } from "./constants";

const useRestaurants = ()=>{
    const[jsonData, setJsonData] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        const data = await fetch(MAIN_API)
        const json = await data.json();
        setJsonData(json);
    }
    return jsonData;
}

export default useRestaurants