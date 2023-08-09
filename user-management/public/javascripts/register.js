const registerForm = document.getElementById("register-form");

// Function to send POST request
async function sendPostRequest(url, data) {
    const requestObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(url, requestObj);
    return response.json();
}

async function logout(){
    const logoutResponse = await fetch('/user/logout', { method: 'POST' });
    if (logoutResponse.ok) {
        // If the logout was successful, redirect the user to the login page
        window.location.href = 'login.html';
    } else {
        // Show an error message if the logout was not successful
        console.error('Logout failed');
    }
}

async function register(event){
    event.preventDefault();

    const username = registerForm.username.value;
    const password = registerForm.password.value;

    const postBody = { username: username, password: password };

    const response = await sendPostRequest('/user/register', postBody);

    document.getElementById('message').textContent = response.message;
}