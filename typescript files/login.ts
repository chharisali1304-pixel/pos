
const register = document.querySelector<HTMLElement>(".login-btn1");
const login = document.querySelector<HTMLElement>(".login-btn2");

const title = document.querySelector<HTMLElement>(".login-header h1");
const emailInput = document.querySelector<HTMLInputElement>(".email-input");
const emaillogo = document.querySelector<HTMLElement>(".email-logo");
const usernameInput = document.querySelector<HTMLInputElement>(".username-input");
const passwordInput = document.querySelector<HTMLInputElement>(".password-input");

// Check that all elements exist
if (
    !register ||
    !login ||
    !title ||
    !emailInput ||
    !emaillogo ||
    !usernameInput ||
    !passwordInput
) {
    throw new Error("Required HTML elements not found.");
}

// Redirect only if already logged in
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "POS.html";
} else {

    let currentMode: "login" | "register" = "login";

    // Show registration form
    function showRegister(): void {
        currentMode = "register";

        title!.innerHTML = "Register";
        emailInput!.style.display = "block";
        emaillogo!.style.display = "block";

        register!.classList.remove("login-btn2");
        login!.classList.add("login-btn2");
    }

    // Show login form
    function showLogin(): void {
        currentMode = "login";

        title!.innerHTML = "Login";
        emailInput!.style.display = "none";
        emaillogo!.style.display = "none";

        register!.classList.add("login-btn2");
        login!.classList.remove("login-btn2");
    }

    // Register button
    register.addEventListener("click", () => {

        // First click switches to registration
        if (currentMode !== "register") {
            showRegister();
            return;
        }

        // Validate fields
        if (
            emailInput.value.trim() === "" ||
            usernameInput.value.trim() === "" ||
            passwordInput.value === ""
        ) {
            alert("Please fill in all the fields.");
            return;
        }

        // Store user details (demo only)
        localStorage.setItem("inputuser", usernameInput.value);
        localStorage.setItem("inputpass", passwordInput.value);

        localStorage.setItem("user", usernameInput.value);
        localStorage.setItem("pass", passwordInput.value);

        alert("Registration successful!");

        usernameInput.value = "";
        passwordInput.value = "";
        emailInput.value = "";

        showLogin();
    });

    // Login button
    login.addEventListener("click", () => {

        // First click switches to login
        if (currentMode !== "login") {
            showLogin();
            return;
        }

        const savedUser = localStorage.getItem("user");
        const savedPass = localStorage.getItem("pass");

        // Validate empty fields
        if (
            usernameInput.value.trim() === "" ||
            passwordInput.value === ""
        ) {
            alert("Please enter your username and password.");
            return;
        }

        // Check credentials
        if (
            savedUser !== null &&
            savedPass !== null &&
            savedUser === usernameInput.value &&
            savedPass === passwordInput.value
        ) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "POS.html";
        } else {
            alert("Invalid username or password.");
        }
    });

    // Set default form to login
    showLogin();
}
