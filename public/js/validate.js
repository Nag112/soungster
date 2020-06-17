function validateForm()
{
    grecaptcha.execute();
    var inputs = document.getElementsByClassName('form-control');
    var i =0;
    while(i<inputs.length)
    {
        if(inputs[i].value==null|| inputs[i].value==undefined || inputs[i].value=="")
        {
            alert('please fill all the required fields');
            return false;
        }
        i++;
    }
    var value = document.getElementById('email').value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
    {
        submit();
    }
    else 
    {
        alert('Please enter a valid email');
        return false;
    }    
}
function submit()
{
   fetch('../send_mail');
window.location.reload();
}