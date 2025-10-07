#!/usr/bin/env node
import {program} from 'commander';
import inquirer from 'inquirer';
import fs from 'node:fs';
program
    .command('addName [name] [age] [active]')
    .description("Create a new user to store in system")
    .action(()=>{
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Write Name of Employee',
      },
      {
        type: 'number',
        name: 'age',
        message: 'Enter Age',
      },
      {
        type: 'confirm',
        name: 'active',
        message: "Is Active",
        default: true,
      }
    ]).then(answers => {
      let oldData = [];
      //read old data and store in arr oldData
      if(fs.existsSync('./data.json')){
        const fileContent = fs.readFileSync('./data.json', 'utf8');
        if (fileContent.trim()) {
          oldData = JSON.parse(fileContent);
        } 
      }
      oldData.push(answers);

      fs.writeFile('./data.json',JSON.stringify(oldData),'utf8',(err)=>{
        if(err){
          throw Error('The Error is', err)
        }
      })
    });
    })
program.command('list').action(()=>{
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  console.table(data);
})

program.parse(process.argv)

