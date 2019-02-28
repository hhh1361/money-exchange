// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var quantity = {};
    var sum = currency;
    var rich = {}
    rich.error = 'You are rich, my friend! We don\'t have so much coins for exchange'; 
    
    if (Math.floor(sum / 50) > 0) {
        quantity.H = Math.floor(sum / 50)
    sum = sum - quantity.H * 50; 
    }; 
    if (Math.floor(sum / 25) > 0) {
        quantity.Q = Math.floor(sum / 25); 
    sum = sum - quantity.Q * 25; 
    }; 
    if (Math.floor(sum / 10) > 0) {
        quantity.D = Math.floor(sum / 10); 
    sum = sum - quantity.D * 10; 
    }; 
    if (Math.floor(sum / 5) > 0) {
        quantity.N = Math.floor(sum / 5); 
    sum = sum - quantity.N * 5; 
    }; 
    if (Math.floor(sum / 1) > 0) {
        quantity.P = Math.floor(sum / 1); 
    sum = sum - quantity.P * 1; 
    }
    
    return (currency > 10000)? rich : quantity;
    }
