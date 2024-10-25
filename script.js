const form = document.querySelector('.form')
form.addEventListener("submit", function (e) {
    e.preventDefault();

    function userData() {
        const userName = document.querySelector('#name').value
        const email = document.querySelector('#email').value

        if (userName === "" || email === "") {
            alert('Please Enter username and gmail')
        } else {
            console.log(`username : ${userName} and email is ${email}`)
        }
    }
    const btn = document.querySelector("#btn")
    btn.addEventListener('click', function () {
        userData();
    })
})
