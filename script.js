function amount_validation(){
  var principal = document.getElementById("principal").value;
  if(principal<=0){
    alert('Enter a positive number')
  }
}

function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
      alert('Enter a positive number')
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal + interest
    console.log('year: ', year)
    var result = "If you deposit <strong>"+principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"%</strong>\<br\>You will receive an amount of <strong>"+interest+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>"
    console.log('result: ', result)
    document.getElementById("result").innerHTML=result;
}


function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
