import WelcomePage from "../welcomePage/WelcomePage";
//import {  ScrollView } from 'react-native';
import { Loader } from '@ui5/webcomponents-react';
import React, { Suspense,
  //useEffect, 
//  useState 
} from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';


function App() {
    return (
      <BrowserRouter>
      <Suspense fallback={<Loader />}>

      <Routes>
        <Route path={'/'} element={<WelcomePage />}/>

      </Routes>
      </Suspense>
      </BrowserRouter>
    );
  }
  
  export default App;
