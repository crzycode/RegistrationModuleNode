export class Message {
    public static Error = (Message: string,data?: any,Code: any = 300,type: any = "Failed",): object => {
        var obj = {
          Message: Message,
          Code: Code,
          Data: data,
          Type: type,
        };
        return obj;
      };
}