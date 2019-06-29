export function whatsYourName(){
    let nameSet = false;
    let name = '';

    while(!nameSet){
        name = prompt("What's your name?");

        nameSet = confirm(`Are you sure your name is: ${name}`);
    }

    alert(`Hello ${name}, nice to meet you!`);
}
