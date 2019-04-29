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
    todos: [],

    retriveThatThingToDo: function()
    {
        console.log("To Do List: \n");
        if(this.todos.length === 0)
        {
            console.log("This list is empty!");
        }
        else
        {
            for(var i = 0; i < this.todos.length; i++)
            {
                if(this.todos[i].completed === true)
                {
                    console.log("(x)", this.todos[i].todoItem);
                }
                else
                {
                    console.log("( )", this.todos[i].todoItem);
                }
            }
        }
    },
    createThatThingToDo: function(todoText)
    {
        this.todos.push(
            {
                todoItem: todoText,
                completed: false
            });
        this.retriveThatThingToDo();
    },
    updateThatThingToDo: function(position, todoText)
    {
        // this.todos[position] = newInput;
        this.todos[position].todoItem = todoText;
        this.retriveThatThingToDo();
    },
    deleteThatThingToDo: function(position)
    {
        this.todos.splice(position, 1);
        this.retriveThatThingToDo();
    },
    toggleCompleted : function(position)
    {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.retriveThatThingToDo();
    },
    toggleAll : function()
    {
        if(this.todos.completed === true)
        {
            this.todos.completed = false;
        }
        else
        {
            this.todos.completed = !this.todos.completed;

        };
        this.retriveThatThingToDo();
    }
};

toDoList.retriveThatThingToDo();
toDoList.createThatThingToDo("Brunch");
toDoList.retriveThatThingToDo();
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
/*
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