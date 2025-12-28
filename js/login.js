const elLoginForm = document.querySelector(".login-form")


elLoginForm.addEventListener('submit' , (e) => {

    e.preventDefault()
    let email = elLoginForm.emailInput.value
    let password = elLoginForm.password.value

    if (email == "admin123@gmail.com" && password == "Admin123") {
        location.href = '../pages/admin.html'
    }else{
        location.href = './pages/user.html'
    }
})