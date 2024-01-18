var json = [
    {
        user_type: "admin",
        pass: "admin"
    },
    {
        user_type: "user",
        pass: "user"
    }
];

function login() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    for (let i = 0; i < json.length; i++) {
        if (user === json[i].user_type && pass === json[i].pass) {
            if (user === "admin") {
                window.location.href = "https://www.google.com/";
                console.log('Prueba 3')
                return;
            } else if (user === "user") {
                window.location.href = "https://www.w3schools.com/";
                console.log('Prueba 2')
                return;
            }
        }

        console.log('Prueba1')
    }

    alert("Usuario o contraseña incorrectos");
}


