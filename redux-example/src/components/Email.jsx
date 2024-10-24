import {userSelector, useDispatch} from "react-redux";
import { changeEmail } from "../redux/userSlice";

export const Email=()=>{
    const dispatch=useDispatch();
    const email=userSelector((state)=>state.usee.email);
    const handleChange=(e)=>{
        dispatch(changeEmail (e.target.value))
    }
    return
    <input
     type="email"
     value={user.email} 
     placeholder="Email" 
     onChange={handleChange} />
}