const firebaseConfig = {
  apiKey: "AIzaSyAgYipgUopOHaO-qLfylZlB0n_PXfxgjmU",
  authDomain: "quiz-app-1040e.firebaseapp.com",
  databaseURL: "https://quiz-app-1040e-default-rtdb.firebaseio.com",
  projectId: "quiz-app-1040e",
  storageBucket: "quiz-app-1040e.firebasestorage.app",
  messagingSenderId: "797240707799",
  appId: "1:797240707799:web:8e3f57e875482ec8f3fe92"
};

  
  firebase.initializeApp(firebaseConfig); 
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      
      // Redirect to index.html after alert disappears
      window.location.href = "quiz.html";
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }