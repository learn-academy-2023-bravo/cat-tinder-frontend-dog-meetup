import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DogNew = ({ createDog }) => {
  const navigate = useNavigate();
  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    createDog(newDog);
    navigate("/dogindex");
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="dog-name">Name</Label>
          <Input
            id="dog-name"
            name="name"
            placeholder="Enter dog's name"
            type="text"
            onChange={handleChange}
            value={newDog.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dog-age">Age</Label>
          <Input
            id="dog-age"
            name="age"
            placeholder="Enter dog's age"
            type="text"
            onChange={handleChange}
            value={newDog.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dog-enjoys">Enjoys</Label>
          <Input
            id="dog-enjoys"
            name="enjoys"
            placeholder="Enter dog's enjoyment"
            type="text"
            onChange={handleChange}
            value={newDog.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dog-image">Image</Label>
          <Input
            id="dog-image"
            name="image"
            placeholder="Enter dog's selfie"
            type="text"
            onChange={handleChange}
            value={newDog.name}
          />
        </FormGroup>

        <Button onClick={handleClick}>Add</Button>
      </Form>
    </>
  );
};

export default DogNew;
