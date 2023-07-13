var someName = ["jason", "Joachim", "cynthia", "Cecilia", "nado", "thomas", "john", "emerson"]
for(var i = 0; i < someName.length; i++){
    if(someName[i].charAt(0)==="j" || someName[i].charAt(0)==="J"){
        console.log("Goodbye " + someName[i]);
    }else{
        console.log("hello " + someName[i]);
    }
};