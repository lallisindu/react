import {auth} from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
      // Create a new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
        
        // Get the ID token from the user
        const idToken = await user.getIdToken();
        console.log(idToken, "createUserWithEmailAndPassword Idtoken");

        // Return the ID token
        return idToken;
    } catch (error) {
      // Handle errors if user creation fails
      throw error;
    }
  };
  export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
      // Sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Get the ID token from the user
      const idToken = await user.getIdToken();
      console.log(idToken, "SignInWithEmailAndPassword Idtoken");
  
      // Return the ID token
      return idToken;
    } catch (error) {
      console.error('Error creating user:', error);
    throw error;
    
    }
  };
  
  export const doSignOut = () => {
    return auth.signOut();
  };