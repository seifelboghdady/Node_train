# 🧾 seif-cls — Employee CLI (updated)
![Node.js](https://img.shields.io/badge/node-v16%2B-brightgreen) 
![TypeModule](https://img.shields.io/badge/type-module-blue) 
![License-MIT](https://img.shields.io/badge/license-MIT-orange)

A small, clean, and user-friendly **Node.js CLI** for managing simple employee records stored in a local `data.json`.
Designed to be minimal, extendable, and ready to impress on GitHub.

---

## ⚡ Highlights

* Interactive prompts using **Inquirer** (`addName`).
* Simple data persistence in `data.json`.
* `list` command prints a nice table of saved records.
* Easy to extend (`delete`, `update`, filters, etc.).
* Works as a global CLI command: `seif-cls`

---

## ✅ Features (current)

* `seif-cls addName` — Add a new employee (name, age, active).
* `seif-cls list` — Show all saved employees in a table.

*Planned / easy-to-add features:* `seif-cls delete <name | id>`, `seif-cls update <name | id>`, filters (active/inactive).

---

## 📦 Installation (local development)

1. Clone the repo and open the project folder:

   ```bash
   git clone https://github.com/<your-username>/<repo>.git
   cd <repo-folder>
   ```

2. Initialize (if you deleted `package.json`) and install deps:

   ```bash
   npm init -y
   npm install commander inquirer
   ```

3. Make sure `package.json` contains:

   ```json
   {
     "type": "module",
     "main": "index.js",
     "bin": {
       "seif-cls": "./index.js"
     }
   }
   ```

   and your `index.js` starts with the shebang:

   ```js
   #!/usr/bin/env node
   ```

4. Link the package globally for local testing:

   ```bash
   npm link
   ```

   Now you can run:

   ```bash
   seif-cls addName
   seif-cls list
   ```

> If Windows doesn't recognize `seif-cls` after `npm link`, make sure the npm global bin folder is in your PATH (e.g. `C:\Users\<you>\AppData\Roaming\npm`) and reopen your terminal.

---

## ▶️ Usage examples

### Add a user (interactive)

```bash
seif-cls addName

? Write Name of Employee: Seif
? Enter Age: 21
? Is Active? Yes

✅ Data saved successfully!
Name: Seif
Age: 21
Active: true
```

### List users

```bash
seif-cls list
```

Output:

```
┌─────────┬────────┬─────┬────────┐
│ (index) │ name   │ age │ active │
├─────────┼────────┼─────┼────────┤
│ 0       │ 'seif' │ 20  │ true   │
│ 1       │ 'ziad' │ 19  │ false  │
└─────────┴────────┴─────┴────────┘
```

`data.json` example:

```json
[
  { "name": "seif", "age": 20, "active": true },
  { "name": "ziad", "age": 19, "active": false }
]
```

---

## 🧭 Quick command reference

|                             Command | Description                              |
| ----------------------------------: | ---------------------------------------- |
|                  `seif-cls addName` | Interactive prompt to add a new employee |
|                     `seif-cls list` | Print all saved employees                |
| *(future)* `seif-cls delete <name>` | Remove an employee by name               |
| *(future)* `seif-cls update <name>` | Update an employee’s data                |

---

## 🧩 Project structure (recommended)

```
lesson02/
├─ index.js         # main CLI script (starts with #!/usr/bin/env node)
├─ package.json
├─ data.json        # persisted employee records (array)
└─ README.md
```

---

## ⚙️ Minimal implementation notes (short)

* Use `commander` to define commands and parse `process.argv`.
* Use `inquirer` for interactive prompts.
* For safe persistence:

  1. If `data.json` exists, read it and `JSON.parse`.
  2. If parsed value is an object, wrap it in an array (`Array.isArray` check).
  3. Push the new record and `JSON.stringify(data, null, 2)` before writing.
* Handle empty or corrupted `data.json` gracefully (recreate with `[]`).

---

## 🛡️ Tips & best practices

* Validate inputs (e.g., ensure `age` is a positive number).
* Use `Array.isArray()` when reading `data.json`.
* Use `fs.readFileSync` + `fs.writeFileSync` for simplicity in small CLIs; switch to async for heavy usage.
* Add unit tests for critical flows (optional).

---

## 🧑‍💻 Contributing

Want to add `delete`, `update`, or filters? Open a PR or open an issue describing your idea. Keep changes small and add tests where appropriate.

---

## 📜 License & Author

**License:** MIT
**Author:** Seif Elboghdady — GitHub: `@seifelboghdady`

[**Source Code**](../lesson02/index.js)