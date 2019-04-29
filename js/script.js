// Variables
var todos = ["Wake up", "prayer time","breakfast", "workout", "post-workout meal", "shower", "golf", "snack", "cryo chamber recovery", "snack", "family time / meetings / work calls", "lunch", "meetings / work calls", "pick up kids @ school", "snack", "workout #2", "shower", "dinner / family time", "bedtime"];

// Objects
    /*
        var Batman = { name: "Bruce Wayne", Residence: "Gotham City", Age: 80, weaponOfChoice: "Batarang"};
        var Flash = { name: "Jay Garrick", Residence: "Keystone City",  Age: 79, weaponOfChoice: "Helmet of Mercury"};
        var SpiderMan = {name: "Peter Parker", Residence: "Queens, New York", Age: 57, weaponOfChoice: "Web Shooters"};
        var Punisher = {name: "Frank Castle", Residence: "New York", Age: 45, weaponOfChoice:"Kelvar Skull Vest"};
        var Robocop = {name: "Alex Murphy", Residence: "Detroit", Age: 32, weaponOfChoice: "Auto 9 Handgun"};
    */
var toDoList = {
    todos: ["Wake up\n", "Grab a brush and put a little makeup\n", "Hide the scars to fade away the shakeup\n", "Why'd you leave the keys upon the table?\n"],

    retriveThatThingToDo: function()
    {
        console.log("To Do List: \n" + this.todos);
    },
    createThatThingToDo: function(todo)
    {
        this.todos.push(todo);
        this.retriveThatThingToDo();
    },
    updateThatThingToDo: function(position, newInput)
    {
        this.todos[position] = newInput;
        this.retriveThatThingToDo();
    },
    deleteThatThingToDo: function(position)
    {
        this.todos.splice(position, 1);
        this.retriveThatThingToDo();
    }
};

toDoList.createThatThingToDo("workout");

// Functions


// Custom functions

/*
    // Example of Example Built-In functions
    console.log("WWWWWWWWWWWWWWWWWWWWWWWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("At this moment, I writing this while listening to Joe Rogan with Kevin Smith");
    todos.push("Taco");
    todos.push("Put... the bunny... back... in the box.");
    console.log(todos);
*/

// Custom functions

/*
    // Example of Method
    function makeSandwichWith(filling)
    {

    }

    makeSandwichWith(chicken);
    console.log("My To Do List /n" + todos);
*/

function createThatThingToDo(newThingToDo)
{
    // newThingToDo = document.getElementById("txtInput").innerHTML;
    todos.push(newThingToDo);
    retriveThatThingToDo(todos);
}

function retriveThatThingToDo()
{
    console.log("To Do List: \n" +  todos);
}
    
function updateThatThingToDo(position, newInput)
{
    todos[position] = newInput;
    retriveThatThingToDo(todos);
}

function deleteThatThingToDo(position, doneThatThing)
{
    todos.splice(position, 1);
    retriveThatThingToDo(todos);    
}

/*
    - Add Value: todos.push("");
    - Remove Value: todos.splice(todos designation no, how many delete from no);
        Because of this decremental little sh*t, I found out about the Splice movie starring Aideen Brody
    - 
*/

// Objects
    /*
        var Batman = { name: "Bruce Wayne", Residence: "Gotham City", Age: 80, weaponOfChoice: "Batarang"};
        var Flash = { name: "Jay Garrick", Residence: "Keystone City",  Age: 79, weaponOfChoice: "Helmet of Mercury"};
        var SpiderMan = {name: "Peter Parker", Residence: "Queens, New York", Age: 57, weaponOfChoice: "Web Shooters"};
        var Punisher = {name: "Frank Castle", Residence: "New York", Age: 45, weaponOfChoice:"Kelvar Skull Vest"};
        var Robocop = {name: "Alex Murphy", Residence: "Detroit", Age: 32, weaponOfChoice: "Auto 9 Handgun"};
    */

// Relationship between objects & functions ('this' statement)
    /*    
        var theName = "Fox Scully";

        function sayName()
        {
            var theName = "Dana Mulder";
            console.log(this.theName);
        }

        sayName();
    */