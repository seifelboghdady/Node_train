# Task: Employee Management CLI

Write a CLI system using Node.js and Commander.js that:

- Has a command called `addEmployee`
- When executed, it asks the user 3 sequential questions:
  1. What is the employee's name?
  2. What is the employee's age?
  3. Is the employee interactive? (yes/no)
- After answering, it stores the data in an `employees.json` file
- If the file doesn't exist, create it
- If the file exists, add the new employee alongside previous employees

## Requirements:
- Use Commander.js for CLI structure
- Use Inquirer.js for interactive prompts
- Store data in JSON format
- Handle file creation and appending logic

## Expected Behavior:
```bash
$ node app.js addEmployee
? What is the employee's name? John Doe
? What is the employee's age? 30
? Is the employee interactive? (yes/no) yes
Employee added successfully!
```

The data should be saved in `employees.json` with this format:
```json
[
  {
    "name": "John Doe",
    "age": 30,
    "interactive": true
  }
]
```

**Note:** Please implement the solution without providing the actual code implementation.

