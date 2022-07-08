
import { firebase, googleAuthProvider, facebookAuthProvider} from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startGoogleLogin=()=>{
    
    return (dispatch)=>{
            firebase.auth().signInWithPopup(googleAuthProvider.setCustomParameters({prompt: "select_account"}))
      .then(({user})=>{   
            dispatch(login(user.uid, user.displayName));
            
        }
        )
    }
}
export const startFacebookLogin=()=>{
    
    return (dispatch)=>{
            firebase.auth().signInWithPopup(facebookAuthProvider.setCustomParameters({prompt: "select_account"}))
      .then(({user})=>{   
            dispatch(login(user.uid, user.displayName));
            
        }
        )
    }
}
export const login = ( uid, displayName) => ({
    type: types.authlogin,
    payload: {
        uid,
        displayName
    }
});
export const startLogOut=()=>{
    return async (dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logOut());
    }

}
const logOut=()=>({
        type:types.authlogout
})