export const handler = async (event) => {
    //for CORS to work you need this header with lambda
    const headers = {'Content-Type':'application/json',
                      'Access-Control-Allow-Origin':'https://www.jaredpeterson50.com',
                      'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'};
    
    const inputNum = event['queryStringParameters']['param1'];
    //do a little input validation. check that its an integer and length less 10
    //white list a data type and length so it doens't overflow
    let returnValue = ""; //defined if/else validation check
    const length = inputNum.length;
    let num;
    try{
      num = Number(inputNum);
    }
    catch{
      num = "sorry!!";
    }
    if(length < 10 && typeof(num) === "number"){
      returnValue = num * 2;
    }
    else{
      returnValue = "sorry invalid input";
    }
    const response = {
        statusCode: 200,
        headers:headers,
        body: returnValue,
    };
  return response;
  };