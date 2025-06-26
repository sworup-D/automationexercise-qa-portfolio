# QA Project Test Plan

---

## 1. Project Overview

- **Project Name:** QA Portfolio Project  
- **Project Description:**  
  A sample project to demonstrate manual and automation testing for UI and API using Cypress, Postman, and Excel test cases.  
- **Test Objectives:**  
  Ensure functional correctness, reliability, and usability of the application’s UI and APIs.

---

## 2. Scope

- **In Scope:**  
  - Manual UI testing (signup, login, checkout, account management)  
  - Manual API testing (product listing, user creation, authentication APIs)  
  - Automation testing for UI using Cypress  
  - Automation testing for API using Postman collections

- **Out of Scope:**  
  - Performance testing  
  - Security testing  
  - Mobile app testing (if applicable)

---

## 3. Testing Types and Levels

| Type           | Description                      | Tools           |
|----------------|----------------------------------|-----------------|
| Manual Testing | Execute test cases by hand       | Excel, Markdown |
| UI Automation  | Automated browser UI testing     | Cypress         |
| API Automation | Automated API testing            | Postman         |

---

## 4. Test Environment

- **Test Environments:**  
  - Development server: `https://automationexercise.com`  
  - Local machine for test execution  
- **Browsers:**  
  - Chrome (latest version)  
- **Tools:**  
  - Cypress (for UI automation)  
  - Postman (for API automation)

---

## 5. Test Deliverables

- Manual test cases (Excel files for UI and API)  
- Bug reports (Markdown files)  
- Automation test scripts (Cypress and Postman collections)  
- Test summary report (`test-summary.md`)  
- CI/CD configuration (`.github/workflows/cypress.yml`)

---

## 6. Testing Schedule

| Phase                | Start Date  | End Date    | Notes                    |
|----------------------|-------------|-------------|--------------------------|
| Test Plan Creation   | 2025-06-14  | 2025-06-14  | Initial planning         |
| Manual Testing       | 2025-06-15  | 2025-06-24  | Execute manual test cases|
| Automation Testing   | 2025-06-25  | TBD         | Develop & run automation |
| Reporting & Closure  | TBD         | TBD         |     final reports        |

---

## 7. Risks and Mitigations

| Risk                         | Mitigation                            |
|------------------------------|---------------------------------------|
| Delays in environment setup  | Use stable test environment early     |
| Incomplete requirements      | Clarify requirements before testing   |
| Test data issues             | Prepare reusable test data sets       |

---

## 8. Approval

- **Prepared by:** Sworup Dhungana 
- **Reviewed by:** Self-Lead 
- **Date:** 2025-06-14
