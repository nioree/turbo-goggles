(function() {
  const config = {
    apiKey: "1u0TDI4Q1gdHya18L6HWNxK9udkeWA4XMTJ9RUNEo7E0",
    authDomain: "read-me-31394.firebaseapp.com",
    databaseURL: "https://read-me-31394.firebaseio.com",
    storageBucket: "read-me-31394.appspot.com",
  };
  firebase.initializeApp(config);
  
  const preObject = document.getElementById('a_simple_m');
  
  const dbRefObject = firebase.database().ref().child('a_simple_m');
  
  dbRefObject.on('value', snap =>  {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });
  
}());
