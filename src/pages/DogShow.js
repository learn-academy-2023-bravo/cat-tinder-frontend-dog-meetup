import { useParams, NavLink } from "react-router-dom"




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
            <div>
                <NavLink to={`/dogedit/${selectedDog.id}`} className= "nav-link">
                   Edit Dog Profile
                </NavLink>
            </div>
        </main>
    )
}

export default DogShow