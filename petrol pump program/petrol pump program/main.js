
document.write("<h1><center>Hello Customer Hope You Are Fine ! </center></h1>");

let price = + prompt("enter price");
let petrolPrice = 323.28;

if (price.toString().charCodeAt(0)>=48 && price.toString().charCodeAt(0)<=59){
    let getFuel = price/petrolPrice;
    if (price >= 40){
    document.write('<h1><center> You Will Get '+getFuel+' Litre Fuel</center></h1>');
    document.write('<h1><center>The curent Petrol Price Is '+petrolPrice+'</center></h1>');
    }
    else{
    document.write('<h1><center>Please Enter 40PKR+ value</center></h1>');
    }
}
else if (price.toString().charCodeAt(0)>=65 && price.toString().charCodeAt(0)<=90 || price.toString().charCodeAt(0)>=97 && price.toString().charCodeAt(0)<=122) {
    let litre =+ prompt("enter litre");
    if (litre.toString().charCodeAt(0)>=48 && litre.toString().charCodeAt(0)<=59){
    document.write('<h1><center> You Will Get '+litre+' Litre Fuel</center></h1>');
    document.write('<h1><center>The cureent Petrol Price Is '+petrolPrice+'</center></h1>');
    }
    else {
    document.write('<h1><center>Please Enter How Many Litres You want !</center></h1>');
    }
}
else {
    document.write('<h1><center>Please Enter Price</center></h1>');
}

