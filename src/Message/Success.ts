export abstract class Success {
    public static Message =(
        Message: string,
        data?: any
    ):object => {
        var obj = {
            Message: Message,
            Code: 200,
            Data: data,
            Type: "Success",
          };
        return obj
    } 
}