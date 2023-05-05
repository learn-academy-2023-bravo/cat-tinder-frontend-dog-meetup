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

      <Form style={{ marginTop: 200, width: "500px", margin: "auto", paddingTop: "200px" }}>
        <FormGroup>
          <Label for="dog-name" style={{fontFamily: "Kenzo", fontSize: "1.5rem"}}>Name</Label>
          <Input
            id="dog-name"
            name="name"
            placeholder="Enter dog's name"
            type="text"
            onChange={handleChange}
            value={newDog.name}
            style={{ width: "400px", height: "30px", margin: "auto"}}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dog-age" style={{fontFamily: "Kenzo", fontSize: "1.5rem"}}>Age</Label>
          <Input
            id="dog-age"
            name="age"
            placeholder="Enter dog's age"
            type="text"
            onChange={handleChange}
            value={newDog.name}
            style={{ width: "400px", height: "30px", margin: "auto" }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dog-enjoys" style={{fontFamily: "Kenzo", fontSize: "1.5rem"}}>Enjoys</Label>
          <Input
            id="dog-enjoys"
            name="enjoys"
            placeholder="Enter dog's enjoyment"
            type="text"
            onChange={handleChange}
            value={newDog.name}
            style={{ width: "400px", height: "30px", margin: "auto" }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="dog-image" style={{fontFamily: "Kenzo", fontSize: "1.5rem"}}>Image</Label>
          <Input
            id="dog-image"
            name="image"
            placeholder="Enter dog's selfie"
            type="text"
            onChange={handleChange}
            value={newDog.name}
            style={{ width: "400px", height: "30px", margin: "auto" }}
          />
        </FormGroup>

        <Button style={{ margin: "auto", display: "block", backgroundColor: "black", fontFamily: "Kenzo", padding: "10px 20px", fontSize: "1.5rem"}}onClick={handleClick}>Add</Button>
      </Form>
    </>
  );
};

export default DogNew;
