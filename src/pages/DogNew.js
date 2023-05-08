import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import iphone from "../pages/iphone.png"
import "../App.css"

const DogNew = ({ createDog }) => {
  const navigate = useNavigate()
  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
  }

  const handleClick = () => {
    createDog(newDog);
    navigate("/dogindex");
  }

  return (
    <>
    <h1 className="main-title">Add Your Dog!</h1>
      <div className="container">
        <Form className="form">
          <FormGroup>
            <Label htmlFor="dog-name" className="label">
              Name
            </Label>
            <Input
              id="dog-name"
              name="name"
              placeholder="Enter dog's name"
              type="text"
              onChange={handleChange}
              value={newDog.name}
              className="input"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dog-age" className="label">
              Age
            </Label>
            <Input
              id="dog-age"
              name="age"
              placeholder="Enter dog's age"
              type="text"
              onChange={handleChange}
              value={newDog.age}
              className="input"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dog-enjoys" className="label">
              Enjoys
            </Label>
            <Input
              id="dog-enjoys"
              name="enjoys"
              placeholder="Enter dog's enjoyment"
              type="text"
              onChange={handleChange}
              value={newDog.enjoys}
              className="input"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dog-image" className="label">
              Image
            </Label>
            <Input
              id="dog-image"
              name="image"
              placeholder="Enter dog's selfie"
              type="text"
              onChange={handleChange}
              value={newDog.image}
              className="input"
            />
          </FormGroup>

          <Button className="button" onClick={handleClick}>
            Add
          </Button>
        </Form>

        <div className="iphone">
          <img src={iphone} alt="iphone" />
        </div>
      </div>
    </>
  )
}

export default DogNew
