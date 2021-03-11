
const initState = {
    authError : null
}

const authReducer = (state = initState, action) => {
    switch(action.type){

        case "LOGIN_ERROR":
            console.log("loggin error")
            return {
                 ...state,
                authError:"Login failed"
                } 
      
        case "LOGIN_SUCCESS" :
            console.log("login success")
            alert("login success")
            return {
                ...state,
                authError:null
              
                
            } 
          
            
        case "SIGNOUT_SUCCESS" :
            alert ("sign out successful ")      
            console.log ("sign out successful ") 
        
         break;
            
        case "REGISTRATION_SUCCESS" :
            console.log("registration success")
            alert("Registered")  
            return{
                ...state,
                authError:null
            } 
           
        case "REGISTRATION_ERROR" :
                console.log("registration failed")
                alert("RE--Registered")  
                return{
                    ...state,
                    authError:action.err.message
                }      
    
         default:
            return state; 
           
            
               
            
    }
}

export default authReducer;