
import { useState, useEffect } from "react"
import { db } from "./config/firebase-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"


function App() {
  const [users, setUsers] = useState([])
  const [newAge, setNewAge] = useState(0)
  const [newName, setNewName] = useState("")
  const usersCollectionRef = collection(db, "users")

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }

    getUsers();

  }
  , [])

  async function createUser(){
    try {
      await addDoc(usersCollectionRef, {name: newName, age:parseInt(newAge)})
    } catch (error) {
      console.log(error)
    }
  }

  async function updateUser(id, age){
    try {
      //here we are specifying which document we are referrencing
      const userDoc = doc(db, "users", id)
      const newFields = {age: parseInt(age) + 1}
      await updateDoc(userDoc, newFields)
    } catch (error) {
      console.log(error)
    }
    window.location.reload(false);
  }

  async function deleteUser(id){
    try {
      //here we are specifying which document we are referrencing
      const userDoc = doc(db, "users", id)
      await deleteDoc(userDoc)
    } catch (error) {
      console.log(error)
    }
    window.location.reload(false);
  }

  return (
    <div>
      <div className="flex flex-col w-[250px] m-2">
        <input className="border" type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} required/>
        <input className="border my-2" type="number" placeholder="age" value={newAge} onChange={(e) => setNewAge(e.target.value)} required/>
        <button className="bg-gray-300 text-black my-2 p-2 hover:bg-gray-100" onClick={createUser}>Create User</button>
      </div>

      {users.map((user, index) => {
        return(
          <div className="mt-4 mx-2 bg-black text-white flex flex-col items-start w-[250px]" key={index}> 
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button className="bg-gray-300 text-black my-2 p-2 hover:bg-gray-100" onClick={() => updateUser(user.id, user.age)}>Increase Age</button>
            <button className="bg-gray-300 text-black my-2 p-2 hover:bg-gray-100" onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        )
      })}
    </div>
  )
}

export default App
