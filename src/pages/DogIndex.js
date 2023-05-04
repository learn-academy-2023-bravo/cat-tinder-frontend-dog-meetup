import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const DogIndex = ({dogs}) => {

  return(
    <main>
      <h1 style={{textAlign: 'center', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', fontFamily: "Bebas", color: "yellow"}}>Dogs Looking For Companions!</h1>
      <div className="card-container" style={{paddingTop: '110px'}}>
        {dogs?.map((dog, index) => {
          return(
            <Card
              color="black"
              style={{
                width: '18rem'
                
              }}
            >
              <img
                alt="Sample"
                src={dog.image}
                style={{
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <CardBody style={{ height: '200px' }}>
                <CardTitle style={{color: "white", fontFamily: "Bebas Neue"}} tag="h5">
                  {dog.name}
                </CardTitle>
                <CardSubtitle style={{color: "white", fontFamily: "Bebas Neue"}}>
                  {dog.age}
                </CardSubtitle>
                    
                <NavLink to={`/dogshow/${dog.id}`} style={linkStyle}>
                  Click To Learn More
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </main>
  );
};

const linkStyle = {
  color: "pink",
  fontSize: "1.2rem",
  textDecoration: "none",
  margin: "0 1rem",
  transition: "all 0.2s ease-in-out",
  fontFamily: "Kenzo"
};


export default DogIndex
