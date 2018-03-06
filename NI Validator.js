<form onsubmit="return validate()" method="post">
    National Insurance Number: <input type="text" name="nino" id="nino" /><br />
    <input type="submit" value="Submit" />
</form>

function validate() {
    var n1 = document.getElementById('nino');
    var pattern =  /(^GB)|(^BG)|(^NK)|(^KN)|(^TN)|(^NT)|(^ZZ).+/i;
    if(n1.match(pattern)) {
        alert("Thank you for submitting your details");
    }
    alert("The NI Number entered is incorrect");
}