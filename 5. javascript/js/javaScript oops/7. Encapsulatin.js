/*
  Javascript Encapsulation

  The javascript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that
  data. it allows us to control the data and validate it. To achieve an encapsulation in javascript:-

  * Use var keyword to make data members private.
  * Use setter methods to set the data and getter methods to get that data.
*/

class Student {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }
}

var stud = new Student();
stud.setName("Shankar")
stud.setMarks("90%")
console.log(stud)
console.log(stud.getName() + " " + stud.getMarks());



//javascript Encapsulation Example: validate

class student1 {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name
    }

    getMarks() {
        return this.marks
    }
    setMarks(marks) {
        if (marks < 0 || marks > 100) {

        return ("invalid marks")
        } 
        else {
            this.marks = marks;
        }
            
    }
}
var stud = new student1();
stud.setName("saketh")
stud.setMarks(90)
console.log(stud.getName() + " " + stud.getMarks());




// javascript Encapsulation Example:- prototype-based approch

function Student2(name,marks){
    var S_name=name;
    var S_marks=marks;
    Object.defineProperty(this,"name",{
        get:function(){
            return S_name
        },
        set:function(s_name){
            this.s_name=s_name
        }
    });

    Object.defineProperty(this,"marks",{
        get:function(){
            return S_marks;
        },
        set:function(S_marks){
            this.S_marks = S_marks;
        }
    });
}

var stud=new Student2("siva",95);
console.log(stud.name+" "+stud.marks)
