// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./styles/main.scss";

import App from './App';
import "semantic-ui-css/semantic.min.css";
import { Provider } from 'react-redux';
import {createStore , applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import {reduxFirestore, getFirestore,createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider,getFirebase} from "react-redux-firebase";
import firebaseConfig from "./firebase";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app"





const store = createStore(rootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),reduxFirestore(firebaseConfig))) 

const profileSpecificProps = {
  userProfile:"users",
  useFirestoreForProfile:true,
  enabledRedirectHandling: false,
  resetBeforeLogin:false
}


const rrfProps = {
  firebase,
  config:firebaseConfig,
  config: profileSpecificProps,
  dispatch:store.dispatch,
  createFirestoreInstance
}

// const store = createStore(rootReducer);

ReactDOM.render(
  
     <Provider store={store}>
       <ReactReduxFirebaseProvider{...rrfProps}>
       
      <App />
      
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);
