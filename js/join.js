function login(event) {
    event.preventDefault(); // يمنع الريفريش

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if(email === savedEmail && password === savedPassword) {
        alert("Login successful");

        // حفظ حالة الدخول
        localStorage.setItem("loggedIn", "true");

        // تحويل للصفحة الرئيسية
        window.location.href = "index.html";
    } else {
        alert("Email or Password is incorrect");
    }
}



function register(event) {
    event.preventDefault();

    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if(email === "" || password === "") {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created successfully");

    window.location.href = "login.html";
}
