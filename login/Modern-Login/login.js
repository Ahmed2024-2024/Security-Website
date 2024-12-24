
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const backToHomeBtn = document.getElementById('backToHome');
const forgetPasswordLink = document.querySelector('.sign-in a'); 


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    if (validatePassword(password)) {
        const user = { name, email, password };
        localStorage.setItem(email, JSON.stringify(user));
        alert('Account created successfully!');
        container.classList.remove("active");
    } else {
        alert('Password must be at least 8 characters long and include at least one number, one uppercase letter, and one lowercase letter.');
    }
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = "../../Home-About/index.html";
    } else {
        alert('Invalid email or password.');
    }
});

forgetPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();

    const email = prompt('Please enter your email address:');
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser) {
        alert(`Your password is: ${storedUser.password}`);
    } else {
        alert('Email not found.');
    }
});

