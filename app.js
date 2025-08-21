const max = prompt ("Enter the max number");

const random = Math.floor(Math.random() * max)+1;

let Guess = prompt ("Enter the Guess number");

while(true) {
    if (Guess == "quit"){
        console.log("You are Quiting from game");
        break;
    }
    
    if (Guess == random){
        console.log("Congrats!! your Guess is right");
        break;
    }

    else if (Guess < random){
       Guess = prompt ("Hint: Your guess is too small");
    }

    else {
         Guess = prompt ("Hint: Your guess is too Large");
    }

}

