import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react"



const DogEdit = ({ dogs, updateDog }) => {

    const { id } = useParams()
    let currentDog = dogs?.find((dog) => dog.id === +id)

    const [editDog, setEditDog] = useState({
        name: currentDog.name,
        age: currentDog.age,
        enjoys: currentDog.enjoys,
        image: currentDog.image
    })

    const handleChange = (e) => {
        setEditDog({ ...editDog, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate()
    const handleSubmit = () => {
        updateDog(editDog, currentDog.id)
        navigate("/dogindex")
    }

    return(

        <>
    <Form>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input 
            id= "dog-name"
            name="name"
            placeholder="Enter dog's name"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <FormGroup>
            <Label for="age">Age</Label>
            <Input 
            id= "dog-age"
            name="age"
            placeholder="Enter dog's age"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input 
            id= "dog-enjoys"
            name="enjoys"
            placeholder="Enter dog's enjoys"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <FormGroup>
            <Label for="image">Image URL</Label>
            <Input 
            id= "dog-image"
            name="image"
            placeholder="Enter dog's image"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
            Submit Updates
        </Button>
    </Form>
        </>
    )
}

export default DogEdit