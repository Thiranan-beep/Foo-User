"use client"
import { useEffect, useState } from "react"

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    const fetchUsers = async () => {
     
        const res = await fetch(url);
        const data = await res.json();
        setTodos(data); 
        console.log(data)
    };

    

    fetchUsers();
  }, []); 

  return (
    <ul>
      {todos.map((todos) => (<li key={todos.id}>{todos.name}</li>
      ))}
    </ul>
  );
};

const User = () => {
    const [users, setUsers] = useState([])
    const url ="https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        const fetchUser = async() =>{
            const res = await fetch (url);
            const data = await res.json()
            console.log(data) // debug ว่าข้อมูลส่งมาได้จริง
            setUsers(data);
        };
        fetchUser();
    },[]);

    return (
        <ul>
           {users.map((user)=>(<li key={user.id}>{user.name}</li>))}
        </ul>
    )

}

const UserPage = () => {
  return (
    <>
        <User></User>
        <Todo></Todo>
    </>
  )
}
export default UserPage