class apiResponse{
    constructor(statusCode, message = "Success", data){
        this.statusCode = statusCode
        this.data = data
        this.message = 
        this.success = statusCode<400
    }
}

export {apiResponse}