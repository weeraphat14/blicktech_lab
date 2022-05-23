class HttpResponse {
    success = false
    data = null
    message = ""
    constructor(data, message){
        if(data){
            this.data = data
            this.success = true
        }
        this.message = message
    }

}

module.exports = {
    HttpResponse
}