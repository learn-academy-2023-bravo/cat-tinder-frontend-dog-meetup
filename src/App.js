import { useState } from 'react'
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
  const [dogs, setDogs] = useState(mockDogs)

  const createDog = (createdDog) => {
    console.log("created dog:", createdDog)
  }

  const updateDog = (dog, id) => {
    console.log("dog: ", dog)
    console.log("id: ", id)
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
