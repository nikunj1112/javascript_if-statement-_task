// discount calculation

var amount = 2000;
{
    
    if (amount > 5000) {
        purchase_amount = 'above5000';
    } else if (amount >= 1000 && amount <= 5000) {
        purchase_amount = 'between1000and5000';
    } else {
        purchase_amount = 'below1000';
    }

    switch (purchase_amount) {
        case 'above5000':
            discountPercentage = 0.20;  // 20% discount
            break;
        case 'between1000and5000':
            discountPercentage = 0.10;  // 10% discount
            break;
        case 'below1000':
            discountPercentage = 0;   // No discount
            break;
        default:
            discountPercentage = 0;  
    }

    const discountAmount = amount * discountPercentage ;
    const finalAmount = amount - discountAmount;

    console.log(finalAmount);
}  


