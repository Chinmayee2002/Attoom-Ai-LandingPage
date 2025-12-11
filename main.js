const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active-nav");
});
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzGFeX8o34isOkFtTnMlUmSQXYMu_gKlY",
  authDomain: "attoom-ai-9b1e3.firebaseapp.com",
  databaseURL: "https://attoom-ai-9b1e3-default-rtdb.firebaseio.com",
  projectId: "attoom-ai-9b1e3",
  storageBucket: "attoom-ai-9b1e3.firebasestorage.app",
  messagingSenderId: "88981979980",
  appId: "1:88981979980:web:0e802021b276b4f25005e9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference your database

const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();

  var topic = getElementVal("topic");
  var name = getElementVal("name");
  var email = getElementVal("emailid");
  var phone = getElementVal("phone");
  var msgContent = getElementVal("msgContent");

  saveMessages(topic, name, email, phone, msgContent);
  console.log(topic, name, email, phone, msgContent);
  //   enable alert
  document.querySelector(".alert").style.display = "flex";
  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);
  //   reset the form
  document.getElementById("contactForm").reset();
}
const saveMessages = (topic, name, email, phone, msgContent) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    topic: topic,
    name: name,
    email: email,
    phone: phone,
    msgContent: msgContent,
  });
  // console.log("Saving to Firebase...");
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
