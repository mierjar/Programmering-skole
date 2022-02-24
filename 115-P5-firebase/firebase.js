const firebaseConfig = {
    apiKey: "AIzaSyCTEyy_ERhxW7aiyDFe2ekklIhVx788Ckg",
    authDomain: "p5-diary-177b2.firebaseapp.com",
    projectId: "p5-diary-177b2",
    storageBucket: "p5-diary-177b2.appspot.com",
    messagingSenderId: "1097380436791",
    appId: "1:1097380436791:web:848258e470ab0e0d6098b2"
  };

  //start firebase
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()