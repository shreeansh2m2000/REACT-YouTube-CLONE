import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyBzFtSZSY08i4jEg_AyqmL_A3ManR5BGQ0",
   authDomain: "yt-clone-ef15a.firebaseapp.com",
   projectId: "yt-clone-ef15a",
   storageBucket: "yt-clone-ef15a.appspot.com",
   messagingSenderId: "686777462872",
   appId: "1:686777462872:web:591629594c36f8cef89a2d"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
