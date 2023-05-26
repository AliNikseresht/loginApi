const _user = document.getElementById("user")
const _pas = document.getElementById("pass")
const _form = document.getElementById("form")

_form.addEventListener("submit", function (e) {
    e.preventDefault()


    console.log(myData);
    fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                username: _user.value,
                password: _pas.value,
            })
        })
        .then(res => res.json())
        .then(mydata => {

            // setTimeout(() => {
            //     if (
            //         mydata.username == _user.value
            //     ) {

            //         document.getElementById("searchBox").style.opacity = '1'
            //         document.getElementById("form").style.opacity = '0'
            //         document.getElementById(".token")
            //     } else {
            //         document.getElementById('msgform').innerText = "Enter for a valid username"
            //     }

            // }, 1000)


        })

})


let _height = document.querySelector(".token").clientHeight
document.querySelector(".token").style.height = '0'

function para(e) {
    setTimeout(() => {
        document.querySelector(".token").style.height = _height + "px"
    }, 1000);


}
