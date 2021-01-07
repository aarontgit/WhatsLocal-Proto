"use strict"; // write out shopping cart table,10/31/2020, Aaron Tiktin


var subtotal = 0;
var cartHTML = "<table><thead><tr><th>Item Description</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead><tbody>";

for(var i = 0; i<item.length; i++) {

var cost = price[i]*qty[i];
cartHTML = cartHTML + "<tr><td>"+item[i]+"</td><td>$"+price[i].toFixed(2)+"</td><td>"+qty[i]+"</td><td>$"+cost.toFixed(2)+"</td></tr></tbody>";
subtotal = subtotal + cost;


}


var serviceCharge = Math.floor(.05*subtotal);

var orderTotal = subtotal + serviceCharge;

cartHTML = cartHTML.concat("<tfoot><tr><td colspan='3'>Subtotal</td><td>$"+subtotal.toFixed(2)+"</td></tr><tr><td colspan='3'>Service Fee*</td><td>$"+serviceCharge.toFixed(2)+"</td></tr><tr><td colspan='3'>Total</td><td>$"+orderTotal.toFixed(2)+"</td></tr></tfoot></table>");
document.getElementById('cart').innerHTML=cartHTML;

var now = new Date();
now.setDate(now.getDate()+3);
var cancelDays = now;
document.getElementById('sdate').innerHTML = "* You have until " + cancelDays + " to cancel.";



