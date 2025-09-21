# 🧪 AutomationExercise QA Portfolio  

![QA Pipeline](https://github.com/sworup-D/AutomationExercise-QA-Portfolio/actions/workflows/qa-pipeline.yml/badge.svg)
![Cypress Tests](https://img.shields.io/badge/Cypress-UI%20Tests-green)
![Postman/Newman](https://img.shields.io/badge/Postman-API%20Tests-blue)
![Node.js](https://img.shields.io/badge/node-v22.16.0-brightgreen)

A complete **QA portfolio project** base on the [AutomationExercise](https://automationexercise.com) website demonstrating **Manual Testing + Automation Testing (UI & API) + CI/CD** for real-world QA job standards.  

---

## 📝 Project Versions

| Tool/Framework | Version     |
|----------------|------------|
| Node.js        | 22.16.0    |
| npm            | 10.9.2     |
| Cypress        | 13.7.3     |
| Newman         | 6.2.1      |
| Postman        |(collection v2.0.0) |

---

## 📂 Project Structure  
AutomationExercise-QA-Portfolio/
│
├── api/
│ ├── manual/ # API manual test cases (Excel/Markdown), bug reports
│ └── automation/ # Postman collection, Newman CLI, reports
│
├── ui/
│ ├── manual/ # UI manual test cases (Excel/Markdown), bug reports
│ └── automation/ # Cypress scripts, fixtures, reports
│
├── docs/ # Test plan, summary,srtrategy
├── .github/workflows/ # GitHub Actions CI/CD pipelines
├── .gitignore # Ignore node_modules, reports, env files
└── README.md # Main documentation


---

## ✅ Features  

- **Manual Testing**  
  - 40+ detailed UI test cases  
  - 20+ API test cases (positive, negative, edge, validation)  

- **Automation Testing**  
  - **UI** → Cypress framework with fixtures, custom commands, reports  
  - **API** → Postman collection executed with Newman CLI  

- **CI/CD Integration**  
  - GitHub Actions pipeline runs Cypress UI + Postman API tests automatically  

---

## 🚀 Tech Stack  

- **UI Automation** → Cypress  
- **API Automation** → Postman + Newman  
- **CI/CD** → GitHub Actions  
- **Reporting** → Mochawesome / Allure (Cypress), Newman HTML Reports  

---

## 🔄 How to Run Tests  

### 🔹 UI Automation (Cypress)
```bash
# Navigate to UI automation folder
cd ui/automation

# Install dependencies
npm install

# Run tests in headless mode
npx cypress run

# Or open Cypress Test Runner
npx cypress open


# Navigate to API automation folder
cd api/automation

# Install Newman (if not installed globally)
npm install -g newman@6.2.1

# Run API tests
newman run AutomationExerciseAPITestSuite.postman_collection.json \
    -e AutomationExerciseAPIEnv.postman_environment.json \
    -r cli,html


⚡ CI/CD Pipeline

Every push or pull request to main automatically runs:

✅ Cypress UI tests

✅ Postman API tests

Configured in .github/workflows/qa-pipeline.yml.


✨ Highlights

📌 40+ Manual UI Test Cases

📌 20+ Manual API Test Cases

⚡ Cypress Automation for critical flows

⚡ Postman + Newman API suite with environment configs

🌀 GitHub Actions pipeline for continuous testing

📊 Real-world QA portfolio project

## Disclaimer

This project uses the publicly available [AutomationExercise](https://automationexercise.com) website solely for educational and testing purposes.  
All trademarks, logos, and content belong to their respective owners.

This repository does not claim ownership of the website or its content.  
No commercial use or redistribution of website assets is intended or authorized.

The purpose of this project is to demonstrate Quality Assurance skills and build a professional portfolio.

## Feedback & Contributions

I welcome any feedback, suggestions, or collaboration to help improve this project!  
Feel free to submit pull requests if you find bugs or have ideas.  

Your input helps me grow and make this portfolio even better!

👨‍💻 Author

Sworup Dhungana
📧 [sworupdhungana963@gmail.com] | 🌐 https://www.linkedin.com/in/sworup-dhungana-943075317/ | GitHub https://github.com/sworup-D




