//Here the APICall func executes after 3secs.We are trying to retuen a data from the function and store it in a variable.
//because of the delay in execution JS will return an undefined data.that is "DATA RECEIVED " will not be returned to the place
//place where APICall is called but after 3secs the function will be executed but no data returned.
//It is not recommended to use "return" keyword alone in a call back function

/*function APICall(){
    setTimeout(function(){
        console.log("Executing");
        return "Data Received";
    },3000)
}

data=APICall();
console.log(data);*/

//promises resolve design pattern(to overcome the aboe scenario)

function APICall(){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Executing");
            resolve( "Data Received");
        },3000)

    });
}

data=APICall();
console.log(data);

data.then(
    function(data){console.log(data)},//By default first call back for resolve
    function(error){console.log(error)} //second call back reject
);

console.log("REST ALL");