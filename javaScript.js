const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const purpose = document.getElementById('purpose');

function msgsubmit(){
    const nValue = username.value.trim();
    const eValue = email.value.trim();
    const pValue = purpose.value.trim();
    if(nValue ==='' )
    {
        window.alert("Name field is empty");
    }
    if(eValue === '')
    {
        window.alert("Email field is empty");
    }
    if(pValue === '')
    {
        window.alert("Purpose field is empty");
    }
    else{
        window.alert("Form is successfully submitted");
    }

}