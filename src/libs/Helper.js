class Helper {
    static toCurrency(value, currency, position = "left") {
        if(position==="left"){
            return currency + " " + value; 
        } else if(position==="right"){
            return value + " " + currency;
        }
    }
}

export default Helper;