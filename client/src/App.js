// import { useEffect, useState } from 'react';
import './App.css';
import First from './components/First/First'
import Products from './components/Products/Products';
import Reasons from './components/Reasons/Reasons';
import Reviews from './components/Reviews/Reviews';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';


function App() {

  // const [backendData, setBackendData] = useState([])

  // useEffect(() => {
  //   fetch("/api")
  //     .then(response => response.json())
  //     .then(data => setBackendData(data))
  // }, [])

  // console.log(backendData);

  return (
    <div className="App">

      <First />
      {/* <Products backendUserInfo={backendData} /> */}
      <Products />
      <Reasons />
      <Reviews />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
