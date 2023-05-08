import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import DogEdit from "./pages/DogEdit";
import DogIndex from "./pages/DogIndex";
import DogNew from "./pages/DogNew";
import DogShow from "./pages/DogShow";
import Footer from "./components/Footer";
import './App.css'
import mockDogs from "./mockDogs"


const App = () => {


  const [dogs, setDogs] = useState([])



  useEffect(() => {
    readDog()
  }, [])



  const readDog = () => {
    fetch('http://localhost:3000/dogs')
    .then(response => response.json())
    .then(payload => {
      setDogs(payload)
    })
    .catch(error => console.log("dog read errors", error))
  }



  const createDog = (createdDog) => {
    fetch('http://localhost:3000/dogs', {
      body: JSON.stringify(createdDog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(() => readDog())
    .catch(error => console.log("Create dog errors: ", error))
  }

  const updateDog = (selectedDog, id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      body: JSON.stringify(selectedDog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => readDog())
    .catch(error => console.log("Updated dog errors:", error))
  }

  return (

    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogindex" element={<DogIndex dogs={dogs}/>} />
          <Route path="/dogshow/:id" element={<DogShow dogs={dogs}/>} />
          <Route path="/dognew" element={<DogNew createDog={createDog}/>} />
          <Route path="/dogedit/:id" element={<DogEdit dogs={dogs} updateDog={updateDog}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    
    </>
  )
}


export default App;
