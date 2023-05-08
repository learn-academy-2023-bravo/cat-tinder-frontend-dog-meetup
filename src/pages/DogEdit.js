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
    <h1 className="main-title">Edit your dog!</h1>
    <div className="container">
    <Form className="form">
        <FormGroup>
            <Label for="name" className="label">Name</Label>
            <Input 
            id= "dog-name"
            name="name"
            placeholder="Enter dog's name"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <FormGroup>
            <Label for="age" className="label">Age</Label>
            <Input 
            id= "dog-age"
            name="age"
            placeholder="Enter dog's age"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <FormGroup>
            <Label for="enjoys" className="label">Enjoys</Label>
            <Input 
            id= "dog-enjoys"
            name="enjoys"
            placeholder="Enter dog's enjoys"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <FormGroup>
            <Label for="image" className="label">Image URL</Label>
            <Input 
            id= "dog-image"
            name="image"
            placeholder="Enter dog's image"
            onChange={handleChange}
            type="text" 
             />
        </FormGroup>
        <Button className="button" onClick={handleSubmit} name="submit">
            Submit Updates
        </Button>
    </Form>
    </div>
        </>
    )
}

export default DogEdit