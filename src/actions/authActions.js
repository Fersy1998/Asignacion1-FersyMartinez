
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startGoogleLogin=()=>{
    
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider.setCustomParameters({prompt: "select_account"}))
       /* .then(userCred=>{
            console.log(userCred);
        })*/
      .then(({user})=>{   
            console.log(user);
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
        console.log('saliendoooo');
        await firebase.auth().signOut();
        dispatch(logOut());
    }

}
const logOut=()=>({
        type:types.authlogout
})