// const updateForm = document.getElementById("update-form")

async function sendPutRequest(url, data){
    const requestObj = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include', // Add this line to send cookies with the request
        body: JSON.stringify(data)
    };

    const response = await fetch(url, requestObj);

    return response.json();
}

async function update(event){
    event.preventDefault();

    const username = document.getElementById("update-email").value;
    const password = document.getElementById("update-password").value;
    

    const data = { username: username, password: password };

    const response = await sendPutRequest('/user/update', data);

    document.getElementById('message').textContent = response.message;
}