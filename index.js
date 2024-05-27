#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let continueLoop = true;
while (continueLoop) {
    let listOpt = await inquirer.prompt({
        name: "choose",
        type: "list",
        message: "select your option",
        choices: ["viewList", "addList", "remove", "update", "exit"],
    });
    if (listOpt.choose === "viewList") {
        console.log("Here is your list:");
        console.log(todoList);
    }
    else if (listOpt.choose === "addList") {
        const questions = await inquirer.prompt({
            name: "q1",
            type: "input",
            message: "What do you add on your List?",
        });
        todoList.push(questions.q1);
        console.log(`You are successfully Add "${questions.q1}" in your list`);
    }
    else if (listOpt.choose === "remove") {
        let removeValue = await inquirer.prompt({
            name: "removeVal",
            type: "list",
            message: "Which one value to remove on your list?",
            choices: todoList.map(list => list),
        });
        let removed = todoList.filter(newVal => newVal !== removeValue.removeVal);
        todoList = [...removed];
        console.log(`You are successfully remove ${removeValue.removeVal} in your list`);
    }
    else if (listOpt.choose === "update") {
        let updateValue = await inquirer.prompt({
            name: "updateVal",
            type: "list",
            message: "Which one value to update on your list?",
            choices: todoList.map(list => list),
        });
        let newUpdateValue = await inquirer.prompt({
            name: "newUpdate",
            type: "input",
            message: "What is the new value?",
        });
        let updated = todoList.filter(newVal => newVal !== updateValue.updateVal);
        todoList = [...updated, newUpdateValue.newUpdate];
        console.log(`You are successfully updated your value in your list`);
    }
    else {
        console.log("You are successfully exit from your list");
        continueLoop = false;
    }
}
;
