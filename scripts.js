function validateForm(){
    document.getElementById('errors-content').innerHTML = "";
    document.getElementById('errors').classList.
    remove('d-block');
    document.getElementById('errors').classList.
    add('d-none');


    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var Phonenumber = document.getElementById('Phonenumber').value;
    var Message = document.getElementById('Message').value;

var errors = "";

    if(isEmpty(Name) || isEmpty(Email) || isEmpty(Phonenumber) || isEmpty(Message)){
        errors += "<li>Please fill in all fields.</li>";
}
if (Message.length < 20) {
errors += "<li>Message too short, please provide more details.</li>";
}
if(errors != ""){
    document.getElementById('errors-content').innerHTML = "<ul>"+errors+"</ul>";
    document.getElementById('errors').classList.
    remove('d-none');
    document.getElementById('errors').classList.
    add('d-block');
return false;
}
else{
    return true;
}
}
function isTooShort(Message){
    if(Message.length > 20){
        return true;
    }
    else{
        return false;
    }
    }

function isEmpty(field){
if(field == ""){
    return true;
}
else{
    return false;
}
}