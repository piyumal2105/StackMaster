// Complete Question Database
const questionsDB = {
  // MONGODB QUESTIONS
  "mongodb-1": {
    category: "MongoDB",
    level: "Entry",
    question: "What is MongoDB and what are its key features?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>MongoDB</strong> is a popular NoSQL document-oriented database that stores data in flexible, JSON-like documents called BSON (Binary JSON).</p>
        
        <h4>Key Features:</h4>
        <ul>
            <li><strong>Document-Based:</strong> Stores data in documents instead of rows and columns</li>
            <li><strong>Schema Flexibility:</strong> No rigid schema, documents can have different structures</li>
            <li><strong>Scalability:</strong> Horizontal scaling through sharding</li>
            <li><strong>High Performance:</strong> Optimized for read and write operations</li>
            <li><strong>Rich Query Language:</strong> Supports complex queries and aggregations</li>
            <li><strong>Indexing:</strong> Support for various types of indexes</li>
        </ul>
        
        <h4>Example Document:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
{<br>
  "_id": ObjectId("..."),<br>
  "name": "John Doe",<br>
  "email": "john@example.com",<br>
  "skills": ["JavaScript", "React", "Node.js"]<br>
}
            </code>
        </div>`,
  },

  "mongodb-2": {
    category: "MongoDB",
    level: "Entry",
    question: "What is the difference between SQL and NoSQL databases?",
    answer: `<strong>Answer:</strong>
        
        <h4>SQL Databases (RDBMS):</h4>
        <ul>
            <li><strong>Structure:</strong> Table-based with rows and columns</li>
            <li><strong>Schema:</strong> Fixed, predefined schema</li>
            <li><strong>ACID:</strong> Strong ACID compliance</li>
            <li><strong>Scaling:</strong> Vertical scaling (scale up)</li>
            <li><strong>Query Language:</strong> Structured Query Language (SQL)</li>
            <li><strong>Examples:</strong> MySQL, PostgreSQL, Oracle</li>
        </ul>
        
        <h4>NoSQL Databases:</h4>
        <ul>
            <li><strong>Structure:</strong> Document, key-value, graph, or column-based</li>
            <li><strong>Schema:</strong> Dynamic, flexible schema</li>
            <li><strong>ACID:</strong> Eventually consistent (BASE)</li>
            <li><strong>Scaling:</strong> Horizontal scaling (scale out)</li>
            <li><strong>Query Language:</strong> Various query methods</li>
            <li><strong>Examples:</strong> MongoDB, Redis, Cassandra, Neo4j</li>
        </ul>`,
  },

  "mongodb-3": {
    category: "MongoDB",
    level: "Entry",
    question: "Explain CRUD operations in MongoDB",
    answer: `<strong>Answer:</strong>
        
        <p><strong>CRUD</strong> operations in MongoDB are Create, Read, Update, and Delete operations.</p>
        
        <h4>Create Operations:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
// Insert one document<br>
db.users.insertOne({name: "John", age: 25});<br><br>

// Insert multiple documents<br>
db.users.insertMany([<br>
  {name: "Alice", age: 30},<br>
  {name: "Bob", age: 28}<br>
]);
            </code>
        </div>
        
        <h4>Read Operations:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
// Find all documents<br>
db.users.find();<br><br>

// Find with conditions<br>
db.users.find({age: {$gte: 25}});
            </code>
        </div>
        
        <h4>Update Operations:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
// Update one document<br>
db.users.updateOne(<br>
  {name: "John"},<br>
  {$set: {age: 26}}<br>
);
            </code>
        </div>
        
        <h4>Delete Operations:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
// Delete one document<br>
db.users.deleteOne({name: "John"});
            </code>
        </div>`,
  },

  "mongodb-4": {
    category: "MongoDB",
    level: "Intermediate",
    question: "What is MongoDB Aggregation Pipeline?",
    answer: `<strong>Answer:</strong>
        
        <p>The <strong>Aggregation Pipeline</strong> is a framework for data aggregation that processes data through a sequence of stages.</p>
        
        <h4>Common Pipeline Stages:</h4>
        
        <h5>1. $match - Filter documents:</h5>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>{ $match: { status: "active", age: { $gte: 18 } } }</code>
        </div>
        
        <h5>2. $group - Group and aggregate:</h5>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>{ $group: { _id: "$category", total: { $sum: "$amount" } } }</code>
        </div>
        
        <h4>Complete Example:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
db.orders.aggregate([<br>
  { $match: { status: "completed" } },<br>
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },<br>
  { $sort: { total: -1 } }<br>
])
            </code>
        </div>`,
  },

  // EXPRESS QUESTIONS
  "express-1": {
    category: "Express",
    level: "Entry",
    question: "What is Express.js and what are its main features?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>Express.js</strong> is a minimal and flexible Node.js web application framework.</p>
        
        <h4>Main Features:</h4>
        <ul>
            <li><strong>Routing:</strong> Define routes for different HTTP methods</li>
            <li><strong>Middleware:</strong> Functions that execute during request-response cycle</li>
            <li><strong>Template Engines:</strong> Support for EJS, Pug, Handlebars</li>
            <li><strong>Static Files:</strong> Serve CSS, JS, images</li>
            <li><strong>Error Handling:</strong> Built-in error handling</li>
        </ul>
        
        <h4>Basic Express Server:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const express = require('express');<br>
const app = express();<br><br>

app.get('/', (req, res) => {<br>
  res.send('Hello World!');<br>
});<br><br>

app.listen(3000);
            </code>
        </div>`,
  },

  "express-2": {
    category: "Express",
    level: "Intermediate",
    question: "What is middleware in Express.js?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>Middleware</strong> functions execute during the request-response cycle.</p>
        
        <h4>Application-level middleware:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
app.use((req, res, next) => {<br>
  console.log('Time:', Date.now());<br>
  next();<br>
});
            </code>
        </div>
        
        <h4>Built-in middleware:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
app.use(express.json());<br>
app.use(express.static('public'));
            </code>
        </div>`,
  },

  "express-3": {
    category: "Express",
    level: "Intermediate",
    question: "How do you handle error handling in Express.js?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>Error handling</strong> in Express involves catching and processing errors.</p>
        
        <h4>Basic Error Handling:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
app.use((err, req, res, next) => {<br>
  console.error(err.stack);<br>
  res.status(500).send('Something broke!');<br>
});
            </code>
        </div>
        
        <h4>Custom Error Handler:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const errorHandler = (err, req, res, next) => {<br>
  const statusCode = err.status || 500;<br>
  res.status(statusCode).json({<br>
    error: {<br>
      message: err.message,<br>
      status: statusCode<br>
    }<br>
  });<br>
};
            </code>
        </div>`,
  },

  // REACT QUESTIONS
  "react-1": {
    category: "React",
    level: "Entry",
    question: "What is React and what are its key features?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>React</strong> is a JavaScript library for building user interfaces.</p>
        
        <h4>Key Features:</h4>
        <ul>
            <li><strong>Component-Based:</strong> Reusable UI components</li>
            <li><strong>Virtual DOM:</strong> Efficient rendering</li>
            <li><strong>JSX:</strong> JavaScript syntax extension</li>
            <li><strong>One-Way Data Flow:</strong> Predictable data flow</li>
            <li><strong>Hooks:</strong> State and lifecycle in functional components</li>
        </ul>
        
        <h4>Simple Component:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
function Welcome(props) {<br>
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;<br>
}
            </code>
        </div>`,
  },

  "react-2": {
    category: "React",
    level: "Entry",
    question: "What is JSX and how does it work?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>JSX</strong> (JavaScript XML) allows you to write HTML-like code within JavaScript.</p>
        
        <h4>JSX Benefits:</h4>
        <ul>
            <li><strong>Readable:</strong> More intuitive than React.createElement()</li>
            <li><strong>Familiar:</strong> Similar to HTML syntax</li>
            <li><strong>Powerful:</strong> Full power of JavaScript expressions</li>
        </ul>
        
        <h4>JSX Examples:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const name = 'John';<br>
const element = &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;<br><br>

const element = &lt;img src={user.avatarUrl} alt={user.name} /&gt;;
            </code>
        </div>`,
  },

  "react-3": {
    category: "React",
    level: "Intermediate",
    question: "What is the difference between useState and useReducer?",
    answer: `<strong>Answer:</strong>
        
        <h4>useState:</h4>
        <ul>
            <li>Best for simple state management</li>
            <li>Straightforward state updates</li>
            <li>Less boilerplate code</li>
        </ul>
        
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const [count, setCount] = useState(0);
            </code>
        </div>
        
        <h4>useReducer:</h4>
        <ul>
            <li>Better for complex state logic</li>
            <li>Multiple related state variables</li>
            <li>Redux-like pattern</li>
        </ul>
        
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const [state, dispatch] = useReducer(reducer, initialState);
            </code>
        </div>`,
  },

  "react-4": {
    category: "React",
    level: "Intermediate",
    question: "What is React Context API and when should you use it?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>React Context API</strong> provides a way to pass data through the component tree without prop drilling.</p>
        
        <h4>When to Use Context:</h4>
        <ul>
            <li>Global state (authentication, theme, language)</li>
            <li>Avoiding prop drilling</li>
            <li>Sharing data between distant components</li>
        </ul>
        
        <h4>Creating Context:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const ThemeContext = React.createContext();<br><br>

function ThemeProvider({ children }) {<br>
  const [theme, setTheme] = useState('light');<br>
  return (<br>
    &lt;ThemeContext.Provider value={{theme, setTheme}}&gt;<br>
      {children}<br>
    &lt;/ThemeContext.Provider&gt;<br>
  );<br>
}
            </code>
        </div>`,
  },

  // NODE.JS QUESTIONS
  "nodejs-1": {
    category: "Node.js",
    level: "Entry",
    question: "What is Node.js and what are its main features?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>Node.js</strong> is a JavaScript runtime built on Chrome's V8 engine.</p>
        
        <h4>Key Features:</h4>
        <ul>
            <li><strong>Asynchronous:</strong> Non-blocking I/O operations</li>
            <li><strong>Single-threaded:</strong> Event-driven architecture</li>
            <li><strong>Cross-platform:</strong> Runs on multiple operating systems</li>
            <li><strong>NPM:</strong> Large package ecosystem</li>
            <li><strong>Fast:</strong> Built on V8 JavaScript engine</li>
        </ul>
        
        <h4>Basic Server:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const http = require('http');<br><br>

const server = http.createServer((req, res) => {<br>
  res.end('Hello World!');<br>
});<br><br>

server.listen(3000);
            </code>
        </div>`,
  },

  "nodejs-2": {
    category: "Node.js",
    level: "Entry",
    question: "What are Node.js modules and how do you use them?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>Node.js modules</strong> are reusable blocks of code that encapsulate functionality.</p>
        
        <h4>Built-in Modules:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const fs = require('fs');<br>
const path = require('path');<br>
const http = require('http');
            </code>
        </div>
        
        <h4>Custom Modules:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
// math.js<br>
function add(a, b) {<br>
  return a + b;<br>
}<br><br>

module.exports = { add };
            </code>
        </div>`,
  },

  "nodejs-3": {
    category: "Node.js",
    level: "Intermediate",
    question: "How does asynchronous programming work in Node.js?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>Asynchronous programming</strong> in Node.js allows non-blocking operations.</p>
        
        <h4>Callbacks:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
fs.readFile('file.txt', 'utf8', (err, data) => {<br>
  if (err) throw err;<br>
  console.log(data);<br>
});
            </code>
        </div>
        
        <h4>Promises:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
fs.readFile('file.txt', 'utf8')<br>
  .then(data => console.log(data))<br>
  .catch(err => console.error(err));
            </code>
        </div>
        
        <h4>Async/Await:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
async function readFile() {<br>
  try {<br>
    const data = await fs.readFile('file.txt', 'utf8');<br>
    console.log(data);<br>
  } catch (err) {<br>
    console.error(err);<br>
  }<br>
}
            </code>
        </div>`,
  },

  "nodejs-4": {
    category: "Node.js",
    level: "Advanced",
    question: "Explain the Event Loop in Node.js",
    answer: `<strong>Answer:</strong>
        
        <p>The <strong>Event Loop</strong> enables Node.js to perform non-blocking operations.</p>
        
        <h4>Event Loop Phases:</h4>
        <ul>
            <li><strong>Timer Phase:</strong> setTimeout and setInterval callbacks</li>
            <li><strong>Pending Callbacks:</strong> I/O callbacks</li>
            <li><strong>Poll Phase:</strong> Fetch new I/O events</li>
            <li><strong>Check Phase:</strong> setImmediate callbacks</li>
            <li><strong>Close Callbacks:</strong> Close events</li>
        </ul>
        
        <h4>Example:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
console.log('Start');<br>
setTimeout(() => console.log('Timer'), 0);<br>
setImmediate(() => console.log('Immediate'));<br>
console.log('End');
            </code>
        </div>`,
  },

  // HR QUESTIONS
  "hr-1": {
    category: "HR",
    level: "All",
    question: "Tell me about yourself",
    answer: `<strong>Answer Structure:</strong>
        
        <p>Use the <strong>Present-Past-Future</strong> format:</p>
        
        <h4>Present (30 seconds):</h4>
        <ul>
            <li>Current role and responsibilities</li>
            <li>Technologies you work with</li>
            <li>Key achievements</li>
        </ul>
        
        <h4>Past (30 seconds):</h4>
        <ul>
            <li>How you got into development</li>
            <li>Previous experience</li>
            <li>Key projects</li>
        </ul>
        
        <h4>Future (30 seconds):</h4>
        <ul>
            <li>Why you're interested in this role</li>
            <li>What you hope to contribute</li>
            <li>Career goals</li>
        </ul>`,
  },

  "hr-2": {
    category: "HR",
    level: "All",
    question: "Why do you want to work here?",
    answer: `<strong>Answer Strategy:</strong>
        
        <p>Show you've researched the company:</p>
        
        <h4>Research Areas:</h4>
        <ul>
            <li><strong>Company Mission:</strong> How it aligns with your values</li>
            <li><strong>Products:</strong> What excites you about their work</li>
            <li><strong>Technology:</strong> Stack matches your interests</li>
            <li><strong>Culture:</strong> Work environment appeals to you</li>
            <li><strong>Growth:</strong> Opportunities for development</li>
        </ul>
        
        <h4>Avoid:</h4>
        <ul>
            <li>Generic answers</li>
            <li>Focusing only on salary</li>
            <li>Saying you need any job</li>
        </ul>`,
  },

  "hr-3": {
    category: "HR",
    level: "All",
    question: "What are your strengths and weaknesses?",
    answer: `<strong>Answer Strategy:</strong>
        
        <h4>For Strengths:</h4>
        <p>Choose 2-3 relevant strengths with specific examples.</p>
        
        <h4>For Weaknesses:</h4>
        <p>Choose a real weakness but show how you're working to improve.</p>
        
        <h4>Good Strengths for Developers:</h4>
        <ul>
            <li>Problem-solving with examples</li>
            <li>Continuous learning attitude</li>
            <li>Attention to detail</li>
            <li>Team collaboration</li>
        </ul>
        
        <h4>Good Weaknesses (with improvement plans):</h4>
        <ul>
            <li>Public speaking (taking courses)</li>
            <li>Time estimation (using better planning tools)</li>
            <li>Perfectionism (learning to balance quality with deadlines)</li>
        </ul>`,
  },

  // SYSTEM DESIGN
  "system-1": {
    category: "System Design",
    level: "Intermediate",
    question: "How would you design a URL shortening service?",
    answer: `<strong>Answer:</strong>
        
        <h4>Requirements:</h4>
        <ul>
            <li><strong>Functional:</strong> Shorten URLs, redirect, custom aliases</li>
            <li><strong>Scale:</strong> 100M URLs/month</li>
            <li><strong>Performance:</strong> Low latency redirects</li>
        </ul>
        
        <h4>Database Schema:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
URLs Table:<br>
- id (Primary Key)<br>
- short_url<br>
- long_url<br>
- created_at<br>
- click_count
            </code>
        </div>
        
        <h4>URL Encoding:</h4>
        <p>Use Base62 encoding (a-zA-Z0-9) for short URLs</p>
        
        <h4>Architecture:</h4>
        <ul>
            <li>Load Balancer</li>
            <li>Web Servers</li>
            <li>Cache (Redis)</li>
            <li>Database</li>
        </ul>`,
  },

  "system-2": {
    category: "System Design",
    level: "Advanced",
    question: "Design a real-time chat application",
    answer: `<strong>Answer:</strong>
        
        <p>Designing a <strong>real-time chat application</strong> requires handling real-time messaging and scalability.</p>
        
        <h4>Requirements:</h4>
        <ul>
            <li>Send and receive messages in real-time</li>
            <li>One-on-one and group conversations</li>
            <li>User presence (online/offline status)</li>
            <li>Message history</li>
        </ul>
        
        <h4>Architecture:</h4>
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
Client Apps → Load Balancer → WebSocket Servers<br>
                ↓<br>
        Message Queue (Kafka)<br>
                ↓<br>
        Database + Cache (Redis)
            </code>
        </div>
        
        <h4>Real-time Communication:</h4>
        <ul>
            <li><strong>WebSocket connections</strong> for real-time messaging</li>
            <li><strong>Message queues</strong> for reliable delivery</li>
            <li><strong>Caching</strong> for recent messages and user presence</li>
        </ul>`,
  },
};

// Question organization
const questionsByCategory = {
  mongodb: ["mongodb-1", "mongodb-2", "mongodb-3", "mongodb-4"],
  express: ["express-1", "express-2", "express-3"],
  react: ["react-1", "react-2", "react-3", "react-4"],
  nodejs: ["nodejs-1", "nodejs-2", "nodejs-3", "nodejs-4"],
  hr: ["hr-1", "hr-2", "hr-3"],
  system: ["system-1", "system-2"],
};

const questionsByLevel = {
  entry: [
    "mongodb-1",
    "mongodb-2",
    "mongodb-3",
    "express-1",
    "react-1",
    "react-2",
    "nodejs-1",
    "nodejs-2",
    "hr-1",
    "hr-2",
    "hr-3",
  ],
  intermediate: [
    "mongodb-4",
    "express-2",
    "express-3",
    "react-3",
    "react-4",
    "nodejs-3",
    "system-1",
  ],
  senior: ["nodejs-4", "system-2"],
};

// DOM Elements
let hamburger, navMenu, modal, modalTitle, modalBody;

// Initialize DOM elements
function initializeElements() {
  hamburger = document.getElementById("hamburger");
  navMenu = document.getElementById("nav-menu");
  modal = document.getElementById("questionModal");
  modalTitle = document.getElementById("modalTitle");
  modalBody = document.getElementById("modalBody");
}

// Navigation functionality
function initNavigation() {
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (hamburger && navMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });

  // Smooth scroll
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Show notification
function showNotification(message, type) {
  if (!type) type = "info";

  const notification = document.createElement("div");
  notification.className = "notification " + type;
  notification.innerHTML =
    '<div class="notification-content">' +
    '<span class="notification-message">' +
    message +
    "</span>" +
    '<button class="notification-close" onclick="closeNotification(this)">×</button>' +
    "</div>";

  // Add styles if not present
  if (!document.querySelector(".notification-styles")) {
    const styles = document.createElement("style");
    styles.className = "notification-styles";
    styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 3000;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                border-left: 4px solid #2563eb;
                animation: slideIn 0.3s ease;
                max-width: 350px;
            }
            .notification.success { border-left-color: #10b981; }
            .notification.error { border-left-color: #ef4444; }
            .notification-content {
                display: flex;
                align-items: center;
                padding: 1rem;
                gap: 0.75rem;
            }
            .notification-message {
                flex: 1;
                color: #1e293b;
                font-weight: 500;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: #64748b;
                padding: 0;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .questions-container, .questions-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }
            .question-card {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 1.5rem;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            .question-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-color: #2563eb;
            }
            .question-card h4, .question-card h5 {
                color: #1e293b;
                margin: 0.5rem 0 1rem 0;
                font-size: 1.1rem;
                line-height: 1.4;
            }
            .question-level {
                display: inline-block;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                background: #dbeafe;
                color: #1d4ed8;
            }
            .question-level.entry { background: #dcfce7; color: #166534; }
            .question-level.intermediate { background: #dbeafe; color: #1d4ed8; }
            .question-level.advanced, .question-level.senior { background: #faf5ff; color: #7c3aed; }
            .question-level.all { background: #f1f5f9; color: #475569; }
            .category-section {
                margin: 2rem 0;
                padding: 1rem 0;
                border-top: 1px solid #e2e8f0;
            }
            .category-title {
                color: #1e293b;
                font-size: 1.25rem;
                margin-bottom: 1rem;
            }
            .question-detail .question-meta {
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;
                flex-wrap: wrap;
            }
            .question-category {
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                color: white;
                background: #2563eb;
            }
            .question-title {
                color: #1e293b;
                font-size: 1.4rem;
                font-weight: 600;
                line-height: 1.3;
                margin-bottom: 1.5rem;
            }
            .question-answer {
                line-height: 1.6;
                color: #374151;
            }
            .question-answer h4, .question-answer h5 {
                color: #1e293b;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
            }
            .question-answer ul {
                margin: 1rem 0;
                padding-left: 1.5rem;
            }
            .question-answer li {
                margin-bottom: 0.5rem;
            }
            .question-actions {
                margin-top: 2rem;
                padding-top: 1.5rem;
                border-top: 1px solid #e2e8f0;
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
            }
        `;
    document.head.appendChild(styles);
  }

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(function () {
    if (notification.parentNode) {
      closeNotification(notification.querySelector(".notification-close"));
    }
  }, 5000);
}

// Close notification
function closeNotification(closeBtn) {
  const notification = closeBtn.closest(".notification");
  if (notification && notification.parentNode) {
    notification.remove();
  }
}

// Open category questions
function openCategory(category) {
  const categoryQuestions = questionsByCategory[category];

  if (!categoryQuestions || categoryQuestions.length === 0) {
    showNotification("No questions available for " + category, "info");
    return;
  }

  let html = '<div class="question-modal-styles">';
  html +=
    "<h3>" +
    category.charAt(0).toUpperCase() +
    category.slice(1) +
    " Questions</h3>";
  html += '<div class="questions-container">';

  for (let i = 0; i < categoryQuestions.length; i++) {
    const questionId = categoryQuestions[i];
    const question = questionsDB[questionId];
    if (question) {
      html +=
        '<div class="question-card" onclick="viewFullAnswer(\'' +
        questionId +
        "')\">";
      html += '<div class="question-header">';
      html +=
        '<span class="question-level ' +
        question.level.toLowerCase() +
        '">' +
        question.level +
        "</span>";
      html += "</div>";
      html += "<h4>" + question.question + "</h4>";
      html += '<div class="question-actions">';
      html += '<button class="btn btn-small btn-primary">View Answer</button>';
      html += "</div>";
      html += "</div>";
    }
  }

  html += "</div></div>";

  if (modalTitle && modalBody && modal) {
    modalTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1) + " Questions";
    modalBody.innerHTML = html;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

// Select level questions
function selectLevel(level) {
  const levelQuestions = questionsByLevel[level];

  if (!levelQuestions || levelQuestions.length === 0) {
    showNotification("No questions available for " + level + " level", "info");
    return;
  }

  const levelNames = {
    entry: "Entry Level",
    intermediate: "Intermediate Level",
    senior: "Senior Level",
  };

  let html = '<div class="question-modal-styles">';
  html += "<h3>" + levelNames[level] + " Questions</h3>";
  html += '<div class="questions-container">';

  for (let i = 0; i < levelQuestions.length; i++) {
    const questionId = levelQuestions[i];
    const question = questionsDB[questionId];
    if (question) {
      html +=
        '<div class="question-card" onclick="viewFullAnswer(\'' +
        questionId +
        "')\">";
      html += '<div class="question-header">';
      html +=
        '<span class="question-level ' +
        question.level.toLowerCase() +
        '">' +
        question.level +
        "</span>";
      html += "</div>";
      html += "<h4>" + question.question + "</h4>";
      html += '<div class="question-actions">';
      html += '<button class="btn btn-small btn-primary">View Answer</button>';
      html += "</div>";
      html += "</div>";
    }
  }

  html += "</div></div>";

  if (modalTitle && modalBody && modal) {
    modalTitle.textContent = levelNames[level];
    modalBody.innerHTML = html;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

// View full answer
function viewFullAnswer(questionId) {
  const question = questionsDB[questionId];

  if (question) {
    let html = '<div class="question-detail">';
    html += '<div class="question-meta">';
    html += '<span class="question-category">' + question.category + "</span>";
    html +=
      '<span class="question-level ' +
      question.level.toLowerCase() +
      '">' +
      question.level +
      "</span>";
    html += "</div>";
    html += '<h3 class="question-title">' + question.question + "</h3>";
    html += '<div class="question-answer">' + question.answer + "</div>";
    html += '<div class="question-actions">';
    html +=
      '<button class="btn btn-secondary" onclick="goBackToList()">← Back to Questions</button>';
    html += "</div>";
    html += "</div>";

    if (modalTitle && modalBody) {
      modalTitle.textContent = "Question Details";
      modalBody.innerHTML = html;
    }
  } else {
    showNotification("Question not found!", "error");
  }
}

// Go back to list
function goBackToList() {
  closeModal();
  showNotification(
    "Use the category or level buttons to browse more questions!",
    "info"
  );
}

// Close modal
function closeModal() {
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Start preparation
function startPreparation() {
  showNotification(
    "Welcome to StackMaster! Choose a category or level to begin.",
    "success"
  );
  const questionsSection = document.getElementById("questions");
  if (questionsSection) {
    questionsSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Initialize everything
document.addEventListener("DOMContentLoaded", function () {
  initializeElements();
  initNavigation();

  // Welcome message
  setTimeout(function () {
    showNotification(
      "Welcome to StackMaster! Click any category or level to start learning.",
      "success"
    );
  }, 1000);
});

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal && modal.style.display === "block") {
    closeModal();
  }
});

// Make functions globally available
window.openCategory = openCategory;
window.selectLevel = selectLevel;
window.viewFullAnswer = viewFullAnswer;
window.closeModal = closeModal;
window.startPreparation = startPreparation;
window.scrollToSection = scrollToSection;
window.closeNotification = closeNotification;
window.goBackToList = goBackToList;

console.log("StackMaster loaded successfully!");
