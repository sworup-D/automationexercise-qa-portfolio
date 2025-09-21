# 🧪 QA Portfolio Project – Test Plan

---

## 1. Project Overview

**Project Name:** QA Portfolio Project  

**Description:**  
A comprehensive project demonstrating manual and automation testing for UI and API using Cypress, Postman, and Excel test cases.  

**Test Objectives:**  
- Ensure all critical UI flows work as expected (Signup, Login, Checkout, Account Management).  
- Verify API endpoints respond correctly with valid status codes, payloads, and error handling.  
- Demonstrate professional QA skills, including manual, automation, and CI/CD testing.  

---

## 2. Test Strategy

- **Manual Testing:** Execute test cases using Excel/Markdown. Capture screenshots and log bugs in Markdown files.
- **UI Automation:** Use Cypress to automate critical user flows. Include fixtures, custom commands, and reports.
- **API Automation:** Use Postman collections executed via Newman CLI. Verify positive, negative, edge, and validation scenarios.
- **CI/CD Integration:** Run automated tests on GitHub Actions for every push/PR to the main branch.
- **Reporting:** Maintain bug reports, test case status, and final summary report.

---

## 3. Scope

**In Scope:**  
- Manual UI testing for core workflows  
- Manual API testing for key endpoints  
- Automation testing: UI (Cypress) and API (Postman + Newman)  
- Bug reporting and documentation  

**Out of Scope:**  
- Performance testing  
- Security testing  
- Mobile app testing  
- Third-party integration testing  

---

## 4. Testing Types and Tools

| Type             | Description                     | Tools/Frameworks           |
|-----------------|---------------------------------|----------------------------|
| Manual Testing   | Execute test cases manually      | Excel, Markdown            |
| UI Automation    | Automated browser UI testing     | Cypress (v13.7.3)         |
| API Automation   | Automated API testing            | Postman (v2.0.0), Newman (v6.2.1) |

---

## 5. Test Environment

- **Application URL:** `https://automationexercise.com`  
- **Execution Platforms:** Local machine, GitHub Actions CI  
- **Browsers:** Chrome (latest version)  
- **Tools & Versions:**  
  - Node.js: 22.16.0  
  - npm: 10.9.2  
  - Cypress: 13.7.3  
  - Postman/Newman: 6.2.1  

---

## 6. Test Deliverables

- **Manual Test Cases:** Excel/Markdown files for UI and API  
- **Bug Reports:** Markdown files categorized by UI/API  
- **Automation Scripts:** Cypress UI tests, Postman collections for API  
- **Test Summary Report:** `test-summary.md`  
- **CI/CD Configurations:** GitHub Actions workflow (`.github/workflows/qa-pipeline.yml`)  

---

## 7. Testing Schedule

| Phase               | Start Date  | End Date  |             Description             |
|---------------------|------------|------------|-------------------------------------|
| Test Plan Creation  | 2025-06-14 | 2025-06-14 | Planning & documentation            |
| Manual Testing      | 2025-06-15 | 2025-06-24 | Execute manual test cases           |
| Automation Testing  | 2025-06-25 | 2025-07-20 | Develop and run UI & API automation |
| Reporting & Closure | 2025-07-21 | 2025-07-25 | Compile final reports and summaries |

---

## 8. Risks and Mitigation

| Risk                        | Mitigation                          |
|-----------------------------|-------------------------------------|
| Delays in environment setup | Use stable test environment early   |
| Incomplete requirements     | Clarify requirements before testing|
| Test data issues            | Prepare reusable and valid test data sets |

---

## 9. Approval

- **Prepared by:** Sworup Dhungana  
- **Reviewed by:** Self-Lead / Portfolio Mentor  
- **Date:** 2025-06-14
