
// console.log('hjkdhshfgkli');

const loginButton = document.querySelector('.login-button');
const popup = document.querySelector('.pop-up');
const login = document.querySelector('.sign-in');

loginButton.addEventListener('click', (event) => {
    popup.classList.toggle('hide');
    // console.log(event);
})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')){
        popup.classList.toggle('hide');
    }
})

login.addEventListener('click', () => {
    const inputValue1 = document.getElementById('login').value; 
    const inputValue2 = document.getElementById('pass').value; 
    alert(inputValue1 + ' ' + inputValue2);
})



