export abstract class Error {
  public static Message = (
    Message: string,
    data?: any,
    Code: any = 300,
    type: any = "Failed",
  ): object => {
    var obj = {
      Message: Message,
      Code: Code,
      Data: data,
      Type: type,
    };
    return obj;
  };
  public static NotFound = (
    Message: string,
    Code?: any,
    type?: any,
    data?: any
  ): object => {
    var obj = {
      Message: Message,
      Code: 301,
      Data: null,
      Type: "Failed",
    };
    return obj;
  };
  public static Failed = (
    Message: string,
    Code?: number,
    type?: any,
    data?: any
  ): object => {
    var obj = {
      Message: Message,
      Code: 301,
      Data: null,
      Type: "Failed",
    };
    return obj;
  };
  public static Unknown = (
    Message: string,
    Code?: number,
    type?: any,
    data?: any
  ): object => {
    var obj = {
      Message: Message,
      Code: 301,
      Data: null,
      Type: "Failed",
    };
    return obj;
  };
}
