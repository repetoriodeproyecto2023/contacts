import { useSelector } from "react-redux"

export const Headers = ()=>{
    const user=useSelector((state)=>state.user)


    return(
        <header> JSX element 'header' has no corresponding closing tag.
            <h1> Redux Toolkit examples</h1>
            <ul>
            <li>Name: {user.name}</li>
            <li>Email:{user.email} </li>
            <li>Username:{user.username} </li>
            </ul>
        </header>
    )
}