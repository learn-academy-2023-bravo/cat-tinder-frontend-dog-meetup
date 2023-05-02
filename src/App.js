import { useState } from 'react'
import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import DogEdit from "./pages/DogEdit";
import DogIndex from "./pages/DogIndex";
import DogNew from "./pages/DogNew";
import DogShow from "./pages/DogShow";
import Footer from "./components/Footer";
import './App.css'


const App = () => {

  const [dogs, setDogs] = useState()

  return(

    <>
      <Header />
      <Home />
      <DogIndex />
      <DogShow />
      <DogNew />
      <DogEdit />
      <NotFound />
      <Footer />
    
    </>
  )
}


export default App;
