function repeat(item){
  if (item) {
    	if(item.className=='hidden'){
        	item.className = 'unhidden' ;
    	}else{
        	item.className = 'hidden';
    	}
	}
}

<!-- Citizen Income Predictor -->
function citizenIncomePredictor(clickedButton, cipID) {
    var enterCip = document.getElementById(cipID);
	  repeat(enterCip);

}



<!--View Summary -->
function summary(clickedButton, summaryID) {
    var displaySummary = document.getElementById(summaryID);
	  repeat(displaySummary);
}

<!-- Submit Details -->
function submitclick(clickedButton, submitID) {
    var submitDetails = document.getElementById(submitID);
	repeat(submitDetails);
}

function taxpayable() {
    document.getElementById("taxamount").innerHTML = "Yes you are eligible for tax payment";
}

function purchasepower() {
    document.getElementById("purchasepower").innerHTML = "$8K";
}
