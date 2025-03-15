function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').innerHTML = `<span style="color:green">${data.message}</span>`;
            window.location.href = data.redirectUrl;
        } else {
            document.getElementById('message').innerHTML = data.message;
        }
    })
    .catch(error => console.error('Khuch to Gadbad hai Daya !:', error));
}
