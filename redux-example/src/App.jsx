import { Header} from "./components/Header";
import { Email} from "./componets/Email";
import { addUser } from "./redux/userSlice";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch= useDispatch();

  useEffect(()=>{
    fetch ("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=>response.json())
    .then((data)=> dispatch(addUser(data)))
    .catch((error)=> console.log(error));
  },[]);

  
  return  (
  <div className="App">
    <Header/>
    <Email/>    
  </div>)
}

export default App;
