import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios"
import { getUSers, setloading, setloader } from './features/user';




function App() {
  const users = useSelector((state) => state.users.value)
  const loading = useSelector((state) => state.users.loading)
  const loader = useSelector((state) => state.users.loader)
  const [name, setName] = useState("")





  const dispatch = useDispatch()

  useEffect(() => {
    const res = async () => {
      dispatch(setloading(true))
      const result = await axios("https://jsonplaceholder.typicode.com/users")
      dispatch(setloading(false))
      dispatch(getUSers(result?.data))
    }

    res()
  }, [loader])

  const handler = () => {
    dispatch(setloader(!loader))
  }

  const delHandler = (id) => {
    console.log(id)
    const delData = users?.filter((item) => item.id != id)
    // setUsers(delData)
    dispatch(getUSers(delData))

  }

  const addHandler = () => {
    dispatch(getUSers([...users, {
      "id": 100,
      name: name
    }]))
  }

  return (
    <div className="App" style ={{marginTop:"rem"}}>

      <input value={name} onChange={(e) => { setName(e.target.value) }} /> <button onClick={addHandler}>Add User</button>
      <button onClick={handler}>Get All Users</button>
      {loading ? <p>loading ... </p> : users?.map((user) => {
        return (
          <div key={user?.id}>
            <p>{user?.name}</p>
            <button onClick={() => { delHandler(user.id) }} > Delete</button>
          </div>
        )
      })}
      <br />


    </div>
  );
}

export default App;
