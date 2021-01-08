// import React from 'react'
// import firebase from 'firebase/app'
// import 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyD_ybaiHaGC0LobWwODnBwS9hKYg1ltOcs",
//   authDomain: "fir-demo-1c557.firebaseapp.com",
//   projectId: "fir-demo-1c557",
//   storageBucket: "fir-demo-1c557.appspot.com",
//   messagingSenderId: "68185354875",
//   appId: "1:68185354875:web:e01f97050875f4b97228de",
//   measurementId: "G-L9CB6SL6NL",
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   // firebase.analytics();
// }

// export interface IFirebaseContext {
//   firebase: firebase.app.App,
//   authProviders: string[]
// }

// export const FirebaseContext = React.createContext({} as IFirebaseContext)

// export const FirebaseProvider = ({ children }: any) => {
//   return (
//       <div>
//           <FirebaseContext.Provider value={{ 'firebase': firebase.app(), authProviders } as IFirebaseContext}>
//               {children}
//           </FirebaseContext.Provider>
//       </div>
//   );
// }