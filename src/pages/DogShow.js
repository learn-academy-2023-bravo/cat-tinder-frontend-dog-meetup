import { useParams } from "react-router-dom"
import '../App.css'

const DogShow = ({ dogs }) => {
  const { id } = useParams()
  const selectedDog = dogs.find((dog) => dog.id === +id)

  return (
    <main>
      {selectedDog && (
        <>
          <img alt="dog pic" src={selectedDog.image} className="dog-image" />
          <h3>
            {selectedDog.name} likes {selectedDog.enjoys}
          </h3>
        </>
      )}
    </main>
  );
};

export default DogShow