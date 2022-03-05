function namef(){
    // muss großer als 3 Zeichen sein
    let x = document.getElementById('name').value;

    if(x.length < 3){
        document.getElementById('error1').style.display = 'block';
    }else{
        document.getElementById('error1').style.display = 'none';
    }
}

function emailf(){
    // ein @ . muss vor kommen und muss länger als 5 Zeichen lang sein
    let a = "";
    let element = document.getElementById('error2');
    a = document.getElementById('email').value;

    if(a.length <= 5){
        element.style.display = 'block';
        element.innerHTML = 'Your email is too short!';
    }else{
        element.style.display = 'none';
        if(a.includes('@')){
            element.style.display = 'none';
            if(a.includes('.')){
                element.style.display = 'none';
            }else{
                element.style.display = 'block';
                element.innerHTML = 'The . is missing!';
            }
        }else{
            element.style.display = 'block';
            element.innerHTML = 'The @ is missing!';
        }
    }
}
function password1f(){
    // muss länger als 8 Zeichen lang sein
    let x = document.getElementById('password1').value;

    if(x.length <= 8){
        document.getElementById('error3').style.display = 'block';
        return false;
    }else{
        document.getElementById('error3').style.display = 'none';
        return true;
    }
}

function password2f(){
    // muss gleich wie passwort1 sein
    let a = document.getElementById('password1').value;
    let b = document.getElementById('password2').value;

    if(a == b){
        document.getElementById('error4').style.display = 'none';
        return true;
    }else{
        document.getElementById('error4').style.display = 'block';
        return false;
    }
}

function checkf(){
    if(document.getElementById('check').checked){
        document.getElementById('error5').style.display = 'none';
    }
}

function buttonf(){
    // kontrolle ob alle stimmen, erst dann auf eine andere Seite wechseln

    if(document.getElementById('name').value.length > 3 && document.getElementById('error1').style.display == 'none' && document.getElementById('email').value.length > 0 && document.getElementById('error2').style.display == 'none' && document.getElementById('password1').value.length > 0 && document.getElementById('error3').style.display == 'none' && document.getElementById('password2').value.length > 0 && document.getElementById('error4').style.display == 'none' && document.getElementById('check').checked){
        window.location = "./sprite.html";
    }else{
        if(document.getElementById('name').value.length <= 3 || document.getElementById('error1').style.display != 'none'){ 
            document.getElementById('error1').style.display = 'block';
        }
        if(document.getElementById('email').value.length == 0 || document.getElementById('error2').style.display != 'none'){
            document.getElementById('error2').style.display = 'block';
        }
        if(document.getElementById('password1').value.length == 0 || document.getElementById('error3').style.display != 'none'){
            document.getElementById('error3').style.display = 'block';
        }
        if(document.getElementById('password2').value.length == 0 || document.getElementById('error4').style.display != 'none'){
            document.getElementById('error4').style.display = 'block';
        }
        if(document.getElementById('check').checked != true){
            document.getElementById('error5').style.display = 'block';
        }
    }
}