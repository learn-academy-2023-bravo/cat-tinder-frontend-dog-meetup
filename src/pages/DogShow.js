import { useParams } from "react-router-dom"



const DogShow = ({dogs}) => {
    const { id } = useParams()
    let selectedDog = dogs.find(dog => dog.id === +id)

    return (
        <main>
            {selectedDog && (
                <>
                <img
                alt = 'dog pic'
                src = {selectedDog.image}
                />

                <h3>
                    {selectedDog.name} likes {selectedDog.enjoys}
                </h3>
                </>
            )}
        </main>
    )
}

export default DogShow