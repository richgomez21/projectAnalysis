async function logout() {
    // Create request object to make a POST request.	
    const requestObj = {
    method: 'POST',
    credentials: 'include', // This is necessary to include the session cookie with the request
};
    
    // Make request.
const response = await fetch('/users/logout', requestObj);

    // Check on response from server.
if (response.ok) {
    console.log('User successfully logged out');
    window.location.href = '/login.html'; // Redirect to login page after successful logout
} else {
    console.log('Logout failed');
}

}

async function getData(){
const messageElement = document.getElementById('message');

// Send a GET request to the /users/info route
const response = await fetch('/users/info');

if (response.ok) {
    // If the response is ok (status in the range 200-299), then the user is logged in
    const data = await response.json();
    messageElement.textContent = `Welcome, ${data.username}!`;
} else {
    // If the response is not ok, then the user is not logged in
    messageElement.textContent = 'Welcome!';
}
}

// Get the initial data. Below code is calling the getData() function
(async function() {
await getData();
})();