function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function sayHiToHeadphonedRoommate(string) {
    const lowercaseString = string.toLowerCase();
  
    if (lowercaseString === "hello") {
      return "I can't hear you!";
    } else {
      return undefined;
    }
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
        if (string.toLowerCase() === "hello") {
          return "I can't hear you!";
        } else if (string.toUpperCase() === "HELLO") {
          return "YES INDEED!";
        } else if (string === "Let's have dinner together!") {
          return "I would love to!";
        } else {
          return "I can't hear you!";
        }
      }
      function sayHiToHeadphonedRoommate(string) {

        switch(string){
          case string.toLowerCase():
          return  "I can't hear you!";
          break;
          case string.toUpperCase():
            return "YES INDEED!";
            break;
            case string ="Let's have dinner together!":
              return "I would love to!";
              break;
        }
      }