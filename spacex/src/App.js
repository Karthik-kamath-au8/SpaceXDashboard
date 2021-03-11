// import logo from './logo.svg';
import './App.css';
import Register from './component/auth/Register';

import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './component/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <Register/>  */}
    <Route path='/signin' component={SignIn}/>
    <Route path='/register' component={Register}/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
