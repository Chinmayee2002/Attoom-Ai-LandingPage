// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "AIzaSyDzGFeX8o34isOkFtTnMlUmSQXYMu_gKlY",
  authDomain: "attoom-ai-9b1e3.firebaseapp.com",
  databaseURL: "https://attoom-ai-9b1e3-default-rtdb.firebaseio.com",
  projectId: "attoom-ai-9b1e3",
  storageBucket: "attoom-ai-9b1e3.firebasestorage.app",
  messagingSenderId: "88981979980",
  appId: "1:88981979980:web:0e802021b276b4f25005e9",
};

firebase.initializeApp(firebaseConfig); // Initialize Firebase

//reference your database

var contactFormDB = firebase.database().ref("contactForm");

// ===== LOGIN  =====
function adminLogin() {
  let user = document.getElementById("adminUser").value;
  let pass = document.getElementById("adminPass").value;

  // --- hardcoded login and password ---
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "admin123";

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    document.getElementById("login").style.display = "none";
    document.getElementById("contentArea").style.display = "block";
    loadData();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

// ===== FETCH DATA FROM FIREBASE =====
function loadData() {
  contactFormDB.on("value", (snapshot) => {
    let tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    snapshot.forEach((child) => {
      let data = child.val();

      let row = `
        <tr onmouseover="this.style.backgroundColor='#f4f7ff';" onmouseout="this.style.backgroundColor='white';">
          <td style="padding: 12px 15px; border: 1px solid black;">${data.topic}</td>
          <td style="padding: 12px 15px; border: 1px solid black;">${data.name}</td>
          <td style="padding: 12px 15px; border: 1px solid black;">${data.email}</td>
          <td style="padding: 12px 15px; border: 1px solid black;">${data.phone}</td>
          <td style="padding: 12px 15px; border: 1px solid black;">${data.msgContent}</td>
        </tr>
      `;

      tableBody.innerHTML += row;
    });
  });
}
