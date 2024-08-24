const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", () => {
  firebase.auth().signOut().then(() => {
    // Redirect the user to the login page or a landing page
    window.location.href = '/warden-login.html';
  }).catch((error) => {
    console.error("Error logging out:", error);
  });
});