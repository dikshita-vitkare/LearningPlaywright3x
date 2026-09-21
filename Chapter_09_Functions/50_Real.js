//Normal Function
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//Expression Function
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//Arrow Function
const validateStatusCode_Arrow = (status) => {            
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}

validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);