const submitButton = document.getElementById('submit-button');
const password1 = document.getElementById('user_password');
const password2 = document.getElementById('confirm_password');



submitButton.addEventListener('click', (e) => {
    const password = password1.value;
    const confirmPassword = password2.value;


    console.log(password);

    console.log(confirmPassword);
    if (password !== confirmPassword) {
        alert("Passwords don't match");
        e.preventDefault();
    }
})