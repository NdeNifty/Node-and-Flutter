//console.time() is used to start the timer of an event or calcultation in node
console.time('eventtime');
var x = 98.9876245;
var y = 6.987;
var result = x/y;

if(result == 2){
    console.log("Result : %d".result)
}else{
    console.log("Result : " + result);
}

//console.timeEnd()is used to get the time at the end of the event started at console.time()
console.timeEnd('eventtime');	