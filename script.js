function clickAction(){
    let inputName = document.querySelector('.input-name');
    let inputPassword = document.querySelector('#input-password1');
    let inputValue = inputName.value;
    let passwordValue = inputPassword.value;
    if (passwordValue === '' || passwordValue != ('1234')) {
        alert('Enter a correct password');
    } else{
        alert(`Ayoo What's up? ${inputValue}`);
        clearInput();
    }
}
function clearInput(){
    let inputName = document.querySelector('.input-name');
    inputName.value = '';
    let inputPassword = document.querySelector('#input-password');
    inputPassword.value = '';
}
let icon1 = document.querySelectorAll('.icon1')[0];
let icon2 = document.querySelectorAll('.icon2')[0];
var data = document.getElementById('input-password1');
console.log(data.type);
icon1.onclick = function() {
    icon2.style.display = 'block';
    icon1.style.display = 'none';
    if(data.type == 'password'){
        data.type = 'text';
    }
}
icon2.onclick = function() {
    icon1.style.display = 'block';
    icon2.style.display = 'none';
    if(data.type == 'text'){
        data.type = 'password';
    }
}