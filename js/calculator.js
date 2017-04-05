/**
 * Created by David R on 29/03/2017.
 */
function calculate2(){
    var zipcode = document.getElementById("zipcode");
    var squaremeter = document.getElementById("squaremeter");
    var monthlyrent = document.getElementById("monthlyrent");
    console.log('zipcode: ');
    console.log(zipcode.value);

    console.log('m2: ');
    console.log(squaremeter.value);

    var zipvalue = 0;

    if (zipcode.value == 1) {
        zipvalue = 3;
    }
    else if (zipcode.value == 2){
        zipvalue = 4;
    }
    else if (zipcode.value == 3){
        zipvalue = 5;
    }
    else if (zipcode.value == 4){
        zipvalue = 5.5;
    }
    else if (zipcode.value == 5){
        zipvalue = 6;
    }
    else if (zipcode.value == 6){
        zipvalue = 6.5;
    }
    else if (zipcode.value == 7){
        zipvalue = 7;
    }
    else if (zipcode.value == 8){
        zipvalue = 7.5;
    }
    else if (zipcode.value == 9){
        zipvalue = 7.8;
    }
    else if (zipcode.value == 10){
        zipvalue = 7.9;
    }
    else if (zipcode.value == 11){
        zipvalue = 8;
    }
    else if (zipcode.value == 12){
        zipvalue = 8.3;
    }
    else if (zipcode.value == 13){
        zipvalue = 8.6;
    }
    else if (zipcode.value == 14){
        zipvalue = 8.9;
    }
    else if (zipcode.value == 15){
        zipvalue = 9;
    }
    else if (zipcode.value == 16){
        zipvalue = 9.1;
    }
    else if (zipcode.value == 17){
        zipvalue = 9.2;
    }
    else if (zipcode.value == 18){
        zipvalue = 9.5;
    }
    else if (zipcode.value == 19){
        zipvalue = 9.8;
    }
    else if (zipcode.value == 20){
        zipvalue = 10.1;
    }
    else{
        zipvalue = "District erroné."
    }
    console.log('zipvalue: ');
    console.log(zipvalue);

    var totalrent = (parseFloat(zipvalue) * parseFloat(squaremeter.value)*(3.8));

    console.log('totalrent: ');
    console.log(totalrent.value);

    if (isFinite(totalrent)) {
        // Fill in the output fields, rounding to 2 decimal places
        monthlyrent.innerHTML = totalrent.toFixed(2) + "€";
        // Save the user's input so we can restore it the next time they visit
        //save(zipcode.value, squaremeter.value);
    }
    else {
        // Result was Not-a-Number or infinite, which means the input was
        // incomplete or invalid. Clear any previously displayed output.
        //monthlyrent.innerHTML = "Le district introduit est erroné.";        // Erase the content of these elements
        monthlyrent.innerHTML = zipvalue;
    }
}


