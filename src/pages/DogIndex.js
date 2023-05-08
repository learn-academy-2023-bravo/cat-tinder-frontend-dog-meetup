import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const DogIndex = ({ dogs }) => {
  return (
    <main>
      <h1 className="main-title">Dogs Looking For Companions!</h1>
      <div className="card-container">
        {dogs?.map((dog, index) => {
          return (
            <NavLink to={`/dogshow/${dog.id}`} key={index}>
              <Card color="black" className="card">
                <img alt="Sample" src={dog.image} className="card-img" />
                <CardBody className="card-body">
                  <CardTitle className="card-title">{dog.name}</CardTitle>
                  <CardSubtitle className="card-subtitle">{dog.age}</CardSubtitle>
                  <NavLink to={`/dogshow/${dog.id}`} className="card-link">
                    Click To Learn More
                  </NavLink>
                </CardBody>
              </Card>
            </NavLink>
          )
        })}
      </div>
    </main>
  )
}

export default DogIndex