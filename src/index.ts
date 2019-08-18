import { Handler, Context, Callback } from 'aws-lambda';
import { HelloResponse, ResponseBody } from "./types/responses";


const handler: Handler = (event: any, context: Context, callback: Callback) => {
    const  responseBody: ResponseBody = {
        functionName: context.functionName,
        functionMemory: context.memoryLimitInMB
    };

    const response: HelloResponse = {
        statusCode: 200,
        body: responseBody
    };

    callback(undefined, response);
};

export { handler }
