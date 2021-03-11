import  firebase from "firebase/app"
import "firebase/auth"

export const register = (newUser) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) =>{
      return firebase
      .firestore()
      .collection("users").doc(resp.user.uid).set({
        username:newUser.userName,
        firstIntial:newUser.userName[0],
        
      })
    }).then(()=>{
      dispatch({type:"REGISTRATION_SUCCESS"})
    }).catch(err => {
      dispatch({type:"REGISTRATION_ERROR",err})
    })
  }
}


export const signIn = (credentials) => {
  return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password)
        .then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch((err) =>{
            dispatch({
                type:"LOGIN_ERROR,",err
            })
        })
      }
    }
    
            

export const signOut = () =>  {
  return (dispatch) =>{
    firebase.auth().signOut()
    .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
        })
        .catch(() => {
            dispatch({ 
                type: "SIGNOUT_ERROR", 
                });
        });
    }
}