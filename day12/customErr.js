class customErr extends Error {
    constructor(name,errorCode, msg = "Error Occured"){
        super(msg)
        this.errorCode = errorCode
        this.message = msg
        this.name= name
    }
}

export default customErr