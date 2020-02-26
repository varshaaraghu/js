/*console.log("First");

a=12;
b="naresh";
c=true;

console.log(a+" "+b+" "+c);
a="Rajan";
console.log(a);

x=[12,"Ram",true,888,"Naman"];
console.log(x);
console.log(x[2]);
console.log(x[3]);

x=[12,"Ganesh",[34,"Rajesh",12],"krishna"];
console.log(x);
console.log(x[2][1]);
console.log(x[2][2]);

y=[x,15];
console.log(y[0][1]);


z=[...x.15] //ES6 feature
*/

function fun()
{
    console.log("funny");
}

function funDisplay(a="Anonymous")
{
    console.log("Hi " + a);
}
fun3=function(){
    console.log("Hey");
};
funDisplay();
fun3();
/*
a=[124,545,"John",function(){
    console.log("fun");
}];
a[3]();

function call(p){
    console.log("line1");
    p("INDIA");
    console.log("line 3");
}

call(function(data){
    console.log("DATA IS " + data);
});

call(function(funny){
    console.log("line 34");
    console.log("DATA "+funny);
    console.log("line 36");
}
*/

function task(subtask,taskname){
    console.log("task started");
    if(taskname=="compiler")
        subtask("JAVA Compiler");
    else if(taskname=="interpret")
        subtask("V8 Engine") ;   
    console.log("task finished");
   }

   task(function(type){
       console.log("USER TASK with the interpreter" + type);
   },"interpret")

   task(function(type){
       console.log("User task with compiler " +type);
   },"compiler")

   /*function Student(sno,name){
       this.sno=sno;
       this.name=name;
   }
   Student.prototype.display=function(){
       console.log(this.sno+" "+this.name);
   }*/

  
 // the keyword constructor and class are ES6 features
 // member fuction inside a method need not have the keyword function
   class Student{
       constructor(sno,name){
       this.sno=sno;
       this.name=name;
       }
       display(){
           console.log(this.sno + " "+this.name);
       }
   }
   obj = new Student(1,"ram");
   obj1= new Student(2,"Rahul");
   obj.display();
   obj1.display();

   //anonymous function 
   myFun = function(){
       console.log("Hi")
   }

   //Arrow function

   myFun1=()=>{console.log("Hello Arrow function");}

   myFun();
   myFun1();

   add=function(a,b){
       return a+b;
   }
    sum=(a,b)=>a+b;//if the first line itself returns value ,no need to add the return keyword

    console.log(add(2,3));
    console.log(sum(3,4));

    class Test{
        constructor(message){
            this.message=message;
        }
        display(){
            console.log("message"+this.message);
        }
        change(){
            dataChanger(function(data){
                this.message=data;
            }.bind(this))
        }
    }

    function dataChanger(callback){
        console.log("DATA PROCESSED");
        callback("NEW MESSAGE");
    }

    ob=new Test("DEFAULT");
    ob.display();
    ob.change();
    ob.display();

    //any variable declared outside  a function is global.
    //but if the variable gets manipulated inside a function,it is reflected globally

    //scenario 1
    a=20;
    function manipulator()
    {
        a=90;
        console.log(a);
    }

    console.log(a);
    manipulator();
    console.log(a)

    //scenario2
    // use "var" to make a variable  function scope
    //the following will throw error since var b is in function scope
    // using var keyword in the global variable is of no use
    /*b=20;
    function manipulator()
    {
        var b=90;
        console.log(b);
    }

    console.log(b);
    manipulator();
    console.log(b);*/
    
    //ES6 introduces const and let

    //const is global scope as well as function scope and can't be overridden .but by using var we can override inside a function.

    // let is a local scope variable(block level variable)

    //Object  with properties

    person={sno:12,name:"Ramesh"};
    console.log(person);
    
    //any property/fuction can be added to the javascript object at any time.There is no restriction since it is a window object
    person.city="chennai";
    console.log(person);
    person.display=function(){
        console.log(this.sno+" "+this.name+" "+this.city)
    }
    person.display();

    //Asynchronous

    /*setInterval(function(){
        console.log(Math.random()*100);
    },1000);

    setTimeout(()=>{ console.log(Math.random()*100);},1000)*/

    

