// Variables
var toDoList = ["Wake up", "prayer time","breakfast", "workout", "post-workout meal", "shower", "golf", "snack", "cryo chamber recovery", "snack", "family time / meetings / work calls", "lunch", "meetings / work calls", "pick up kids @ school", "snack", "workout #2", "shower", "dinner / family time", "bedtime"];
var input = document.getElementById("txtInput").innerHTML;

// Functions


// Custom functions

/*
    // Example of Example Built-In functions
    console.log("WWWWWWWWWWWWWWWWWWWWWWWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("At this moment, I writing this while listening to Joe Rogan with Kevin Smith");
*/

toDoList.push("Taco");
toDoList.push("Put... the bunny... back... in the box.");
console.log(toDoList);


// Custom functions

/*
    // Example of Method
    function makeSandwichWith(filling)
    {

    }

    makeSandwichWith(chicken);
    console.log("My To Do List /n" + toDoList);
*/

function createThatThingToDo(newThingToDo)
{
    toDoList.push("create");
    retriveThatThingToDo();
}

function retriveThatThingToDo(allThingsToDo)
{
    toDoList.push(toDoList);
}
    
function updateThatThingToDo(differentThingToDo)
{
    toDoList.push("update");
}

function deleteThatThingToDo(doneThatThing)
{
    toDoList.splice("delete");
}

/*
    - Add Value: toDoList.push("");
    - Remove Value: toDoList.splice(toDoList designation no, how many delete from no);
        Because of this decremental little sh*t, I found out about the Splice movie starring Aideen Brody
    - 
*/