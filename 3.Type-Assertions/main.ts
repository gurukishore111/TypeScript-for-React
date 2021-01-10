let message;

message = "abc";

let end = (<string>message).endsWith('c');

//same

let anotherway = (message as string).endsWith('c');
