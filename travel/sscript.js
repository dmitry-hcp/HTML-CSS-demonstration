const loginButton = document.querySelector('.login-button');
const popup = document.querySelector('.pop-up');
const popupWrapper = document.querySelector('.pop-up-wrapper'); 
const h1 = document.querySelector('.pop-up-header1');
const h2 = document.querySelector('.pop-up-header2');
const h2Sh = document.querySelector('.pop-up-header2 hide');
const socialWrapper = document.querySelector('.social-wrapper');
const lines = document.querySelector('.lines');
const underButton = document.querySelector('.under-button-text');
const register = document.querySelector('.register');
const login = document.querySelector('.login');
const loginSh = document.querySelector('.login hide');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-ref');
const sign = document.querySelector('.sign-in-button'); 
const signText1 = document.querySelector('.sign-in-text1');
const signText2 = document.querySelector('.sign-in-text2');

// ///burger
// const burgerMenu = document.querySelector('.burger-pic');
// const
// // const burgerMenu = document.querySelector('.burger-menu');

// burgerMenu.addEventListener('click', () => {
//     burgerMenu.classList.toggle('hide');
// })

loginButton.addEventListener('click', () => {
    popup.classList.toggle('hide');
    h1.classList.toggle('hide');
    socialWrapper.classList.toggle('hide');
    lines.classList.toggle('hide');
    signText1.classList.toggle('hide');
    underButton.classList.toggle('hide');
    register.classList.toggle('hide');
    // console.log(event);
})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')){
        popup.classList.toggle('hide');
        h1.classList.toggle('hide');
        socialWrapper.classList.toggle('hide');
        lines.classList.toggle('hide');
        signText1.classList.toggle('hide');
        underButton.classList.toggle('hide');
        register.classList.toggle('hide');
    }
})

popupWrapper.addEventListener('click', (event) => {
    // console.log(event);
})

sign.addEventListener('click', () => {
    const inputValue1 = document.getElementById('login').value; 
    const inputValue2 = document.getElementById('pass').value; 
    alert(inputValue1 + ' ' + inputValue2);
})

registerLink.addEventListener('click', () => {
        //hide
        h1.classList.toggle('hide');
        socialWrapper.classList.toggle('hide');
        lines.classList.toggle('hide');
        signText1.classList.toggle('hide');
        underButton.classList.toggle('hide');
        register.classList.toggle('hide');
        //show
        h2.classList.toggle('hide');
        signText2.classList.toggle('hide');
        login.classList.toggle('hide');
})

loginLink.addEventListener('click', () => {
    //hide
    h2.classList.toggle('hide');
    signText2.classList.toggle('hide');
    login.classList.toggle('hide');
    //show
    h1.classList.toggle('hide');
    socialWrapper.classList.toggle('hide');
    lines.classList.toggle('hide');
    signText1.classList.toggle('hide');
    underButton.classList.toggle('hide')
    register.classList.toggle('hide');
})



