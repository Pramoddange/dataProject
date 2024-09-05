
import { Provider } from 'react-redux';
import './App.css';
import Body from './Componets/Body';
import Navbar from './Componets/Navbar';
import Store from './redux/Store';
import { useState } from 'react';

function App() {
  const [useNavbarA, setUseNavbarA] = useState(true); // Example st
  return (

   <Provider store={Store}>

     <Navbar/>
     <Body/>
  </Provider>
   
  );
}

export default App;
