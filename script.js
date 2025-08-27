// DOM Elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const modal = document.getElementById("questionModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

// Sample Question Data
const questionsDB = {
  "react-1": {
    category: "React",
    level: "Intermediate",
    question: "What is the difference between useState and useReducer hooks?",
    answer: `<strong>Answer:</strong>
        
        <p><strong>useState</strong> and <strong>useReducer</strong> are both hooks for managing state in React, but they serve different purposes:</p>
        
        <h4>useState:</h4>
        <ul>
            <li>Best for simple state management</li>
            <li>State updates are straightforward</li>
            <li>Ideal for independent state variables</li>
            <li>Less boilerplate code</li>
        </ul>
        
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const [count, setCount] = useState(0);<br>
setCount(count + 1);
            </code>
        </div>
        
        <h4>useReducer:</h4>
        <ul>
            <li>Better for complex state logic</li>
            <li>Multiple sub-values or state transitions</li>
            <li>When next state depends on the previous one</li>
            <li>Similar to Redux pattern</li>
        </ul>
        
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
const [state, dispatch] = useReducer(reducer, initialState);<br>
dispatch({ type: 'INCREMENT', payload: 1 });
            </code>
        </div>
        
        <p><strong>When to use:</strong> Use useState for simple state, useReducer for complex state logic with multiple actions.</p>`,
  },
  "node-1": {
    category: "Node.js",
    level: "Advanced",
    question: "Explain the Event Loop in Node.js",
    answer: `<strong>Answer:</strong>
        
        <p>The <strong>Event Loop</strong> is the core mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded.</p>
        
        <h4>How it Works:</h4>
        <ol>
            <li><strong>Call Stack:</strong> Executes synchronous code</li>
            <li><strong>Callback Queue:</strong> Holds completed async operations</li>
            <li><strong>Event Loop:</strong> Monitors the call stack and moves callbacks from queue to stack</li>
        </ol>
        
        <h4>Phases of Event Loop:</h4>
        <ul>
            <li><strong>Timer Phase:</strong> Executes setTimeout() and setInterval() callbacks</li>
            <li><strong>Pending Callbacks:</strong> I/O callbacks deferred to next loop iteration</li>
            <li><strong>Poll Phase:</strong> Fetches new I/O events and executes callbacks</li>
            <li><strong>Check Phase:</strong> setImmediate() callbacks are invoked</li>
            <li><strong>Close Callbacks:</strong> Socket close events</li>
        </ul>
        
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <code>
console.log('Start');<br>
setTimeout(() => console.log('Timer'), 0);<br>
setImmediate(() => console.log('Immediate'));<br>
console.log('End');<br>
// Output: Start, End, Immediate, Timer
            </code>
        </div>
        
        <p><strong>Key Point:</strong> This architecture allows Node.js to handle thousands of concurrent connections efficiently.</p>`,
  },
};

// Navigation functionality
function initNavigation() {
  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Scroll effects
function initScrollEffects() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document
    .querySelectorAll(".feature-card, .category-card, .level-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
}

// Question functionality
function openCategory(category) {
  showNotification(
    `Loading ${
      category.charAt(0).toUpperCase() + category.slice(1)
    } questions...`,
    "info"
  );

  // Simulate loading
  setTimeout(() => {
    showNotification(
      `${
        category.charAt(0).toUpperCase() + category.slice(1)
      } questions loaded!`,
      "success"
    );
  }, 1000);
}

function selectLevel(level) {
  const levelNames = {
    entry: "Entry Level",
    intermediate: "Intermediate Level",
    senior: "Senior Level",
  };

  showNotification(`Starting ${levelNames[level]} preparation...`, "info");

  // Simulate level selection
  setTimeout(() => {
    showNotification(`Welcome to ${levelNames[level]} questions!`, "success");
  }, 800);
}

function viewFullAnswer(questionId) {
  const question = questionsDB[questionId];

  if (question) {
    modalTitle.textContent = question.question;
    modalBody.innerHTML = question.answer;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    showNotification("Question not found!", "error");
  }
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Hero section functionality
function startPreparation() {
  showNotification(
    "Welcome to StackMaster! Choose a category to begin.",
    "success"
  );
  scrollToSection("questions");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Notification system
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === "success" ? "✓" : type === "error" ? "✗" : "ℹ"}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="closeNotification(this)">×</button>
        </div>
    `;

  // Add notification styles if not already added
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
                border-radius: 0.5rem;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                border-left: 4px solid;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
            }
            
            .notification.info { border-left-color: #2563eb; }
            .notification.success { border-left-color: #10b981; }
            .notification.error { border-left-color: #ef4444; }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem;
            }
            
            .notification-icon {
                font-size: 1.25rem;
                font-weight: bold;
            }
            
            .info .notification-icon { color: #2563eb; }
            .success .notification-icon { color: #10b981; }
            .error .notification-icon { color: #ef4444; }
            
            .notification-message {
                flex: 1;
                font-weight: 500;
                color: #1e293b;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.25rem;
                cursor: pointer;
                color: #64748b;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: #1e293b;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
    document.head.appendChild(styles);
  }

  // Add to page
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      closeNotification(notification.querySelector(".notification-close"));
    }
  }, 5000);
}

function closeNotification(closeBtn) {
  const notification = closeBtn.closest(".notification");
  notification.style.animation = "slideOutRight 0.3s ease-out";
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 300);
}

// Search functionality
function initSearch() {
  // Create search functionality
  const searchHTML = `
        <div class="search-container">
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" placeholder="Search questions, topics, or keywords...">
                <button class="search-clear" id="searchClear">×</button>
            </div>
            <div class="search-results" id="searchResults"></div>
        </div>
    `;

  // Add search to questions section
  const questionsSection = document.getElementById("questions");
  if (questionsSection) {
    const searchDiv = document.createElement("div");
    searchDiv.innerHTML = searchHTML;
    questionsSection.appendChild(searchDiv);

    // Add search styles
    const searchStyles = document.createElement("style");
    searchStyles.textContent = `
            .search-container {
                max-width: 600px;
                margin: 2rem auto;
                position: relative;
            }
            
            .search-box {
                position: relative;
                display: flex;
                align-items: center;
                background: white;
                border: 2px solid var(--border-color);
                border-radius: 0.5rem;
                padding: 0.75rem;
                transition: var(--transition);
            }
            
            .search-box:focus-within {
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            }
            
            .search-box i {
                color: var(--text-secondary);
                margin-right: 0.75rem;
            }
            
            .search-box input {
                flex: 1;
                border: none;
                outline: none;
                font-size: 1rem;
                color: var(--text-primary);
            }
            
            .search-clear {
                background: none;
                border: none;
                font-size: 1.25rem;
                color: var(--text-secondary);
                cursor: pointer;
                padding: 0;
                margin-left: 0.5rem;
                display: none;
            }
            
            .search-clear:hover {
                color: var(--text-primary);
            }
            
            .search-results {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid var(--border-color);
                border-radius: 0.5rem;
                box-shadow: var(--shadow);
                display: none;
                max-height: 300px;
                overflow-y: auto;
                z-index: 1000;
            }
        `;
    document.head.appendChild(searchStyles);

    // Initialize search functionality
    const searchInput = document.getElementById("searchInput");
    const searchClear = document.getElementById("searchClear");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value;
      if (query.length > 0) {
        searchClear.style.display = "block";
        // Simulate search results
        searchResults.innerHTML = `
                    <div style="padding: 1rem;">
                        <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">Searching for "${query}"...</p>
                        <div style="height: 2px; background: var(--border-color); border-radius: 1px;">
                            <div style="width: 50%; height: 100%; background: var(--primary-color); border-radius: 1px; animation: pulse 1s infinite;"></div>
                        </div>
                    </div>
                `;
        searchResults.style.display = "block";
      } else {
        searchClear.style.display = "none";
        searchResults.style.display = "none";
      }
    });

    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.style.display = "none";
      searchResults.style.display = "none";
    });
  }
}

// Progress tracking
function initProgressTracking() {
  const progress = {
    mongodb: 0,
    express: 0,
    react: 0,
    nodejs: 0,
    hr: 0,
    system: 0,
  };

  // Save progress to localStorage (note: this won't work in Claude artifacts)
  function saveProgress() {
    try {
      localStorage.setItem("StackMaster_progress", JSON.stringify(progress));
    } catch (e) {
      // Fallback for environments without localStorage
      console.log("Progress saved (in memory):", progress);
    }
  }

  // Load progress from localStorage
  function loadProgress() {
    try {
      const saved = localStorage.getItem("StackMaster_progress");
      if (saved) {
        Object.assign(progress, JSON.parse(saved));
      }
    } catch (e) {
      // Fallback for environments without localStorage
      console.log("Using default progress");
    }
    updateProgressDisplay();
  }

  function updateProgressDisplay() {
    // Update progress indicators (if they exist)
    Object.keys(progress).forEach((category) => {
      const indicator = document.querySelector(`.progress-${category}`);
      if (indicator) {
        indicator.style.width = `${progress[category]}%`;
      }
    });
  }

  // Initialize progress tracking
  loadProgress();

  return { progress, saveProgress, updateProgressDisplay };
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // ESC to close modal
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }

    // Ctrl+K to focus search (if exists)
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
}

// Theme toggle (bonus feature)
function initThemeToggle() {
  const themeToggle = document.createElement("button");
  themeToggle.className = "theme-toggle";
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  themeToggle.setAttribute("aria-label", "Toggle dark mode");

  // Add theme toggle to navbar
  const navContainer = document.querySelector(".nav-container");
  if (navContainer) {
    navContainer.appendChild(themeToggle);
  }

  // Add theme toggle styles
  const themeStyles = document.createElement("style");
  themeStyles.textContent = `
        .theme-toggle {
            background: none;
            border: 2px solid var(--border-color);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition);
            color: var(--text-primary);
            margin-left: 1rem;
        }
        
        .theme-toggle:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
            .theme-toggle {
                order: -1;
                margin-left: 0;
                margin-right: 1rem;
            }
        }
    `;
  document.head.appendChild(themeStyles);

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';

    // Save theme preference
    try {
      localStorage.setItem("StackMaster_theme", isDark ? "dark" : "light");
    } catch (e) {
      console.log("Theme preference saved in memory");
    }
  });

  // Load saved theme
  try {
    const savedTheme = localStorage.getItem("StackMaster_theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  } catch (e) {
    console.log("Using default theme");
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollEffects();
  initAnimations();
  initSearch();
  initProgressTracking();
  initKeyboardShortcuts();
  initThemeToggle();

  // Welcome message
  setTimeout(() => {
    showNotification(
      "Welcome to StackMaster! Your journey to MERN stack mastery begins here.",
      "success"
    );
  }, 1000);
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Service Worker registration (for PWA functionality)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Advanced question filtering
function filterQuestions(category, level, searchTerm = "") {
  const allQuestions = [
    // MongoDB Questions
    {
      id: "mongo-1",
      category: "MongoDB",
      level: "Entry",
      question: "What is MongoDB?",
      tags: ["database", "nosql"],
    },
    {
      id: "mongo-2",
      category: "MongoDB",
      level: "Intermediate",
      question: "Explain MongoDB indexing",
      tags: ["performance", "indexing"],
    },
    {
      id: "mongo-3",
      category: "MongoDB",
      level: "Advanced",
      question: "MongoDB sharding strategy",
      tags: ["scaling", "architecture"],
    },

    // Express Questions
    {
      id: "express-1",
      category: "Express",
      level: "Entry",
      question: "What is Express.js middleware?",
      tags: ["middleware", "routing"],
    },
    {
      id: "express-2",
      category: "Express",
      level: "Intermediate",
      question: "JWT authentication in Express",
      tags: ["auth", "security"],
    },
    {
      id: "express-3",
      category: "Express",
      level: "Advanced",
      question: "Express error handling patterns",
      tags: ["error-handling", "best-practices"],
    },

    // React Questions
    {
      id: "react-1",
      category: "React",
      level: "Intermediate",
      question: "useState vs useReducer",
      tags: ["hooks", "state"],
    },
    {
      id: "react-2",
      category: "React",
      level: "Entry",
      question: "What are React components?",
      tags: ["components", "jsx"],
    },
    {
      id: "react-3",
      category: "React",
      level: "Advanced",
      question: "React performance optimization",
      tags: ["performance", "optimization"],
    },

    // Node.js Questions
    {
      id: "node-1",
      category: "Node.js",
      level: "Advanced",
      question: "Event Loop explanation",
      tags: ["event-loop", "async"],
    },
    {
      id: "node-2",
      category: "Node.js",
      level: "Entry",
      question: "What is Node.js?",
      tags: ["runtime", "javascript"],
    },
    {
      id: "node-3",
      category: "Node.js",
      level: "Intermediate",
      question: "Node.js streams",
      tags: ["streams", "data"],
    },

    // HR Questions
    {
      id: "hr-1",
      category: "HR",
      level: "All",
      question: "Tell me about yourself",
      tags: ["introduction", "behavioral"],
    },
    {
      id: "hr-2",
      category: "HR",
      level: "All",
      question: "Why do you want this job?",
      tags: ["motivation", "career"],
    },
    {
      id: "hr-3",
      category: "HR",
      level: "All",
      question: "Describe a challenging project",
      tags: ["problem-solving", "experience"],
    },
  ];

  return allQuestions.filter((q) => {
    const matchesCategory =
      !category || q.category.toLowerCase() === category.toLowerCase();
    const matchesLevel =
      !level ||
      q.level.toLowerCase() === level.toLowerCase() ||
      q.level === "All";
    const matchesSearch =
      !searchTerm ||
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesLevel && matchesSearch;
  });
}

// Quiz functionality
function startQuiz(category, level) {
  const questions = filterQuestions(category, level);
  if (questions.length === 0) {
    showNotification("No questions found for the selected criteria.", "error");
    return;
  }

  const quizData = {
    questions: questions.slice(0, 10), // Limit to 10 questions
    currentQuestion: 0,
    score: 0,
    userAnswers: [],
  };

  showQuizModal(quizData);
}

function showQuizModal(quizData) {
  const quizHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${
                          (quizData.currentQuestion /
                            quizData.questions.length) *
                          100
                        }%"></div>
                    </div>
                    <span class="progress-text">${
                      quizData.currentQuestion + 1
                    } / ${quizData.questions.length}</span>
                </div>
                <div class="quiz-score">Score: ${quizData.score}</div>
            </div>
            
            <div class="quiz-question">
                <h3>${
                  quizData.questions[quizData.currentQuestion].question
                }</h3>
                <div class="quiz-options">
                    <button class="quiz-option" onclick="selectQuizAnswer(0)">Option A</button>
                    <button class="quiz-option" onclick="selectQuizAnswer(1)">Option B</button>
                    <button class="quiz-option" onclick="selectQuizAnswer(2)">Option C</button>
                    <button class="quiz-option" onclick="selectQuizAnswer(3)">Option D</button>
                </div>
            </div>
            
            <div class="quiz-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Exit Quiz</button>
                <button class="btn btn-primary" id="nextQuizBtn" onclick="nextQuizQuestion()" disabled>Next</button>
            </div>
        </div>
    `;

  modalTitle.textContent = "MERN Stack Quiz";
  modalBody.innerHTML = quizHTML;
  modal.style.display = "block";

  // Store quiz data globally for access
  window.currentQuiz = quizData;
}

function selectQuizAnswer(optionIndex) {
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((option, index) => {
    option.classList.remove("selected");
    if (index === optionIndex) {
      option.classList.add("selected");
    }
  });

  document.getElementById("nextQuizBtn").disabled = false;
  window.currentQuiz.userAnswers[window.currentQuiz.currentQuestion] =
    optionIndex;
}

function nextQuizQuestion() {
  window.currentQuiz.currentQuestion++;

  if (
    window.currentQuiz.currentQuestion >= window.currentQuiz.questions.length
  ) {
    showQuizResults();
  } else {
    showQuizModal(window.currentQuiz);
  }
}

function showQuizResults() {
  const score = Math.floor(Math.random() * 30) + 70; // Simulate score
  const resultHTML = `
        <div class="quiz-results">
            <div class="result-score">
                <h2>Quiz Complete!</h2>
                <div class="score-circle">
                    <span class="score-number">${score}%</span>
                </div>
                <p class="score-message">
                    ${
                      score >= 80
                        ? "Excellent work!"
                        : score >= 60
                        ? "Good job!"
                        : "Keep practicing!"
                    }
                </p>
            </div>
            
            <div class="result-breakdown">
                <h3>Performance Breakdown</h3>
                <div class="breakdown-item">
                    <span>Correct Answers:</span>
                    <span>${Math.floor(score / 10)}/10</span>
                </div>
                <div class="breakdown-item">
                    <span>Time Taken:</span>
                    <span>5:32</span>
                </div>
                <div class="breakdown-item">
                    <span>Category:</span>
                    <span>${window.currentQuiz.questions[0].category}</span>
                </div>
            </div>
            
            <div class="result-actions">
                <button class="btn btn-primary" onclick="restartQuiz()">Retake Quiz</button>
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;

  modalBody.innerHTML = resultHTML;

  // Add celebration animation
  setTimeout(() => {
    if (score >= 80) {
      showNotification(
        "🎉 Excellent score! You're ready for interviews!",
        "success"
      );
    }
  }, 500);
}

function restartQuiz() {
  if (window.currentQuiz) {
    window.currentQuiz.currentQuestion = 0;
    window.currentQuiz.score = 0;
    window.currentQuiz.userAnswers = [];
    showQuizModal(window.currentQuiz);
  }
}

// Study plan generator
function generateStudyPlan(level, timeframe) {
  const studyPlans = {
    entry: {
      "1week": [
        "Day 1-2: JavaScript fundamentals & ES6+",
        "Day 3: Node.js basics & npm",
        "Day 4: Express.js routing & middleware",
        "Day 5: MongoDB basics & Mongoose",
        "Day 6: React components & JSX",
        "Day 7: Practice projects & review",
      ],
      "2weeks": [
        "Week 1: JavaScript, Node.js, Express basics",
        "Week 2: MongoDB, React fundamentals, mini-projects",
      ],
      "1month": [
        "Week 1: JavaScript mastery & Node.js",
        "Week 2: Express.js & REST APIs",
        "Week 3: MongoDB & database design",
        "Week 4: React & frontend development",
      ],
    },
    intermediate: {
      "1week": [
        "Day 1: Advanced JavaScript concepts",
        "Day 2: Node.js advanced features",
        "Day 3: Express.js security & optimization",
        "Day 4: MongoDB aggregation & indexing",
        "Day 5: React hooks & context",
        "Day 6: Testing & deployment",
        "Day 7: System design basics",
      ],
    },
    senior: {
      "1week": [
        "Day 1: Architecture patterns",
        "Day 2: Microservices & scalability",
        "Day 3: Advanced database optimization",
        "Day 4: Performance monitoring",
        "Day 5: System design interviews",
        "Day 6: Leadership scenarios",
        "Day 7: Mock interviews",
      ],
    },
  };

  const plan = studyPlans[level] && studyPlans[level][timeframe];
  if (!plan) {
    showNotification(
      "Study plan not available for selected criteria.",
      "error"
    );
    return;
  }

  const planHTML = `
        <div class="study-plan">
            <h3>Your ${timeframe.replace(
              /(\d+)/,
              "$1 "
            )} Study Plan (${level} Level)</h3>
            <div class="plan-timeline">
                ${plan
                  .map(
                    (item, index) => `
                    <div class="timeline-item">
                        <div class="timeline-marker">${index + 1}</div>
                        <div class="timeline-content">
                            <p>${item}</p>
                            <div class="timeline-actions">
                                <button class="btn btn-small" onclick="markCompleted(${index})">Mark Complete</button>
                            </div>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
            <div class="plan-actions">
                <button class="btn btn-primary" onclick="downloadPlan()">Download Plan</button>
                <button class="btn btn-secondary" onclick="customizePlan()">Customize</button>
            </div>
        </div>
    `;

  modalTitle.textContent = "Personalized Study Plan";
  modalBody.innerHTML = planHTML;
  modal.style.display = "block";
}

function markCompleted(itemIndex) {
  const timelineItem = document.querySelectorAll(".timeline-item")[itemIndex];
  timelineItem.classList.add("completed");
  showNotification("Great job! Keep up the momentum!", "success");
}

function downloadPlan() {
  showNotification("Study plan download feature coming soon!", "info");
}

function customizePlan() {
  showNotification("Plan customization feature coming soon!", "info");
}

// Interview simulator
function startInterviewSimulator(type) {
  const simulatorHTML = `
        <div class="interview-simulator">
            <div class="simulator-header">
                <h3>${type} Interview Simulation</h3>
                <div class="timer">00:00</div>
            </div>
            
            <div class="simulator-question">
                <p class="question-prompt">The interviewer is asking:</p>
                <h4 id="currentInterviewQuestion">Loading question...</h4>
            </div>
            
            <div class="simulator-controls">
                <button class="btn btn-primary" onclick="startRecording()">
                    <i class="fas fa-microphone"></i> Start Answer
                </button>
                <button class="btn btn-secondary" onclick="nextInterviewQuestion()">
                    Skip Question
                </button>
                <button class="btn btn-outline" onclick="endInterview()">
                    End Interview
                </button>
            </div>
            
            <div class="simulator-feedback" id="simulatorFeedback">
                <h4>Tips for this question:</h4>
                <ul id="questionTips"></ul>
            </div>
        </div>
    `;

  modalTitle.textContent = "Interview Simulator";
  modalBody.innerHTML = simulatorHTML;
  modal.style.display = "block";

  loadInterviewQuestion(type);
  startInterviewTimer();
}

function loadInterviewQuestion(type) {
  const questions = {
    technical: [
      "Explain the difference between SQL and NoSQL databases.",
      "How does React's virtual DOM work?",
      "What are the benefits of using middleware in Express?",
      "Describe the event loop in Node.js.",
    ],
    behavioral: [
      "Tell me about a time you had to work with a difficult team member.",
      "Describe a project you're particularly proud of.",
      "How do you handle tight deadlines?",
      "What motivates you as a developer?",
    ],
    "system-design": [
      "Design a URL shortening service like bit.ly",
      "How would you design a chat application?",
      "Explain how you would scale a web application.",
      "Design a notification system for a social media app.",
    ],
  };

  const questionList = questions[type] || questions["technical"];
  const randomQuestion =
    questionList[Math.floor(Math.random() * questionList.length)];

  document.getElementById("currentInterviewQuestion").textContent =
    randomQuestion;

  // Load tips for the question
  const tips = [
    "Structure your answer with a clear beginning, middle, and end",
    "Use specific examples from your experience",
    "Don't be afraid to ask clarifying questions",
    "Think out loud to show your problem-solving process",
  ];

  const tipsElement = document.getElementById("questionTips");
  tipsElement.innerHTML = tips.map((tip) => `<li>${tip}</li>`).join("");
}

function startRecording() {
  showNotification("Recording started! Speak your answer clearly.", "info");
  // Simulate recording functionality
  setTimeout(() => {
    showNotification("Recording stopped. Great answer!", "success");
  }, 5000);
}

function nextInterviewQuestion() {
  loadInterviewQuestion("technical"); // Default to technical for demo
  showNotification("Next question loaded!", "info");
}

function endInterview() {
  const feedbackHTML = `
        <div class="interview-results">
            <h3>Interview Complete!</h3>
            <div class="performance-metrics">
                <div class="metric">
                    <span class="metric-label">Questions Answered:</span>
                    <span class="metric-value">5/7</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Total Time:</span>
                    <span class="metric-value">23:45</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Confidence Level:</span>
                    <span class="metric-value">85%</span>
                </div>
            </div>
            
            <div class="feedback-section">
                <h4>Areas of Strength:</h4>
                <ul>
                    <li>Clear communication</li>
                    <li>Good technical knowledge</li>
                    <li>Structured thinking</li>
                </ul>
                
                <h4>Areas for Improvement:</h4>
                <ul>
                    <li>Practice more system design questions</li>
                    <li>Work on concise explanations</li>
                    <li>Prepare more specific examples</li>
                </ul>
            </div>
            
            <div class="next-steps">
                <button class="btn btn-primary" onclick="scheduleFollowup()">Schedule Follow-up</button>
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;

  modalBody.innerHTML = feedbackHTML;
  showNotification(
    "Interview simulation complete! Check your feedback.",
    "success"
  );
}

function startInterviewTimer() {
  let seconds = 0;
  const timer = document.querySelector(".timer");

  const interval = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timer.textContent = `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, 1000);

  // Store interval to clear later
  window.interviewTimer = interval;
}

function scheduleFollowup() {
  showNotification("Follow-up scheduling feature coming soon!", "info");
}

// Export functions for global access
window.openCategory = openCategory;
window.selectLevel = selectLevel;
window.viewFullAnswer = viewFullAnswer;
window.closeModal = closeModal;
window.startPreparation = startPreparation;
window.scrollToSection = scrollToSection;
window.closeNotification = closeNotification;
window.startQuiz = startQuiz;
window.generateStudyPlan = generateStudyPlan;
window.startInterviewSimulator = startInterviewSimulator;

// Additional utility functions
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotification("Copied to clipboard!", "success");
    })
    .catch(() => {
      showNotification("Failed to copy to clipboard", "error");
    });
}

function shareQuestion(questionId) {
  const url = `${window.location.origin}#question=${questionId}`;
  copyToClipboard(url);
}

// Performance monitoring
function trackUserInteraction(action, category) {
  // Analytics tracking would go here
  console.log(`User action: ${action} in ${category}`);
}

// Accessibility improvements
function enhanceAccessibility() {
  // Add ARIA labels and keyboard navigation
  document
    .querySelectorAll(".category-card, .level-card")
    .forEach((card, index) => {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
}

// Initialize accessibility enhancements
document.addEventListener("DOMContentLoaded", () => {
  enhanceAccessibility();
});

console.log(
  "🚀 StackMaster loaded successfully! Welcome to your interview preparation journey."
);
