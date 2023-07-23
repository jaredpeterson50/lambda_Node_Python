import json

def lambda_handler(event, context):
    # this takes param1 multiplies it by 2 then returns it

    #headers = {'Content-Type':'application/json',
    #                'Access-Control-Allow-Origin':'*',
    #                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'};
    
    
    headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'https://www.jaredpeterson50.com',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'};
    inputNum = event['queryStringParameters']['param1']
    #do a little input validation. check that its an integer and length less 10
    #white list a data type and length so it doens't overflow
    returnValue = ""; #defined if/else validation check
    length = len(inputNum)
    try:
        num = float(inputNum)
        if(length < 10 and type(num) == float):
            returnValue = num * 2
    except:
        returnValue = "sorry invalid input"

    
    return {
        'statusCode': 200,
        'headers':headers,
        'body': returnValue,
    }
