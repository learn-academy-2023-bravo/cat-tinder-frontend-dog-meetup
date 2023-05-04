import logo from './logo.png';

const Home = () => {
  return (
    <div className="home-center">
      <img src={logo} alt="Dog Tinder Logo" className="logo" />
      <h1>Welcome To Dog Tinder!</h1>
      <h2>It's Like Tinder, but for Dogs</h2>
    </div>
  );
};

export default Home