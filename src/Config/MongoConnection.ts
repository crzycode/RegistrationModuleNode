import mongoose,{connect} from "mongoose"


export function MongoConnect(){
    return connect("mongodb://localhost:27017/Testdb").then(() => {console.log("Connected")}).catch((err) => console.log(err))
}