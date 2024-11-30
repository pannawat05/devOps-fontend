import React, {useEffect,useState} from 'react'

function App() {
const [data,setData] = useState([]);
  useEffect(() => {
 fetch(import.meta.env.VITE_API+'/users')
 .then(res => res.json())
 .then(results => {
  setData(results)
})
  }, [])
  return (
    <div>
      <h1>React App</h1>
      <ul>
       { data.map((item) => (
          <li key={item.id}>{item.id} {item.name} {item.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App