export interface HelloResponse {
    statusCode: number;
    body: ResponseBody;
}

export interface ResponseBody {
    functionName: string;
    functionMemory: number;
}
