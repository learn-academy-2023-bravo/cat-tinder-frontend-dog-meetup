import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"


const DogIndex = ({dogs}) => {

    return(
        <main>
            {dogs?.map((dog, index) => {
            return(
                <Card
                color="white"
                style={{
                  width: '18rem'
                }}
              >
                <img
                  alt="Sample"
                  src={dog.image}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {dog.name}
                  </CardTitle>
                  <CardSubtitle>
                    {dog.age}
                  </CardSubtitle>
                    
                  <NavLink to={`/dogshow/${dog.id}`}>
                    Howl's It Going
                  </NavLink>
                </CardBody>
              </Card>

            

        
            )
        })}
           
        
        </main>

       
    )
}

export default DogIndex