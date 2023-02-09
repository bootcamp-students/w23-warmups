//If (rating) = terrible, then finalAmount = bill (round up to nearest dollar)
//If (rating) = poor, then finalAmount = bill * 1.05 (round up to nearest dollar)
//If (rating) = good, then finalAmount = bill * 1.10 (round up to nearest dollar)
//If (rating) = great, then finalAmount = bill * 1.15 (round up to nearest dollar)
//If (rating) = excellent, then finalAmount = bill * 1.20 (round up to nearest dollar)


//Calculation for total amount due
function calculateTip(amount, rating) {
    if (rating = poor){
        finalAmount = $(amount); 
    } else if (rating = poor){
        finalAmount = $(amount * 1.05);
    } else if (rating = good){
        finalAmount = $(amount * 1.10);
    } else if (rating = great){
        finalAmount = $(amount * 1.15);
    } else if (rating = excellent){
        finalAmount = $(amount * 1.20);
    }
}
