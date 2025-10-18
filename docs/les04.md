# Documentation: Introduction to Express.js vs Native Node.js

## 📋 Project Overview

This project demonstrates a comparison between **Express.js** framework and **Native Node.js** HTTP server implementation, showing how to handle routing and static files in both approaches.

## 📁 Project Structure

```
express-vs-nodejs/
├── app.js          # Express.js implementation
├── index.js        # Native Node.js implementation
└── views/
    ├── index.html  # Sample HTML file
    └── style.css   # Sample CSS file
```

## 🔍 Code Comparison

### 1. **Express.js Implementation** (`app.js`)

#### Key Features:
- **Framework**: Uses Express.js for simplified routing
- **Static Files**: Built-in middleware for serving static files
- **Middleware**: Custom logging middleware example
- **JSON Responses**: Automatic JSON serialization for objects/arrays

#### Code Breakdown:

```javascript
// Simplified static file serving
app.use(express.static('./views'))

// Route handlers
app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/about', (req, res) => {
    res.send([
        {id: 1, title: "product1"},
        {id: 2, title: "product2"}
    ]);
});

// Custom middleware
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
app.use(myLogger())
```

### 2. **Native Node.js Implementation** (`index.js`)

#### Key Features:
- **No Dependencies**: Uses only built-in Node.js modules
- **Manual Routing**: Manual URL checking and routing
- **File Reading**: Manual file reading and serving
- **Content-Type**: Manual header setting required

#### Code Breakdown:

```javascript
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write(homepage);
    } else if(req.url == '/style.css') {
        res.write(style_home);
    }
    res.end();
});
```

## ⚡ Key Differences

| Feature | Express.js | Native Node.js |
|---------|------------|----------------|
| **Static Files** | Automatic with `express.static()` | Manual file reading required |
| **Routing** | Clean syntax with `app.get()`, `app.post()` | Manual `if-else` conditions |
| **Middleware** | Built-in support | Must be implemented manually |
| **JSON Responses** | Automatic serialization | Manual JSON.stringify() required |
| **Code Readability** | High | Lower |
| **Development Speed** | Faster | Slower |

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm package manager

### Installation & Running

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd express-vs-nodejs
```

2. **Run Express.js Server**
```bash
node app.js
# Server runs on http://localhost:3002
```

3. **Run Native Node.js Server**
```bash
node index.js
# Server runs on http://localhost:3001
```

## 📚 Learning Points

### Express.js Advantages:
- **Simplified Syntax**: Less boilerplate code
- **Middleware Ecosystem**: Rich middleware support
- **Automatic Headers**: Content-Type automatically set
- **RESTful Routing**: Clean API endpoint creation

### Native Node.js Advantages:
- **No Dependencies**: Lighter weight
- **Full Control**: Complete control over request/response
- **Learning Value**: Better understanding of HTTP protocol

## 🔧 Common Use Cases

### Choose Express.js when:
- Building REST APIs
- Developing web applications
- Need rapid development
- Require middleware functionality

### Choose Native Node.js when:
- Building simple servers
- Learning HTTP fundamentals
- Need minimal dependencies
- Performance-critical applications

## 📝 Additional Notes

- The commented code in `app.js` shows the manual approach before using `express.static()`
- Middleware in Express.js follows a specific order of execution
- Error handling is more streamlined in Express.js

## 🌟 Next Steps

1. Explore Express.js middleware (body-parser, cors, etc.)
2. Learn about template engines with Express
3. Study RESTful API design patterns
4. Explore authentication middleware

