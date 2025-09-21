# Test Summary Report

---

## 📅 Project Timeline Overview

| Phase               | Start Date  | End Date    | Status      |
|---------------------|-------------|-------------|-------------|
| Test Plan Creation  | 2025-06-14  | 2025-06-14  | ✅ Completed |
| Manual UI Testing   | 2025-06-15  | 2025-06-20  | ✅ Completed |
| Manual API Testing  | 2025-06-21  | 2025-06-24  | ✅ Completed |
| Automation Testing  | 2025-06-25  | 2025-07-20  | ✅ Completed |
| Reporting & Closure | 2025-07-21  | 2025-07-25  | ✅ Completed |

---

## 🧪 Manual UI Testing Summary

- **Modules Covered:**
  - Signup
  - Login
  - Cart & Checkout
  - Account Deletion

**UI Test Cases:** 41  
**Pass**: 34 ✅  
**Fail**: 7 ❌
- **Bugs Reported:** 10 (documented in `bug_report.md`)

- **Testing Tools Used:**  
  - Browser (Chrome)  
  - Excel for test case management  
  - Screenshots for visual proof of failures

---

## 🌐 Manual API Testing Summary

- **Endpoints Covered:**
  - `/api/productsList`
  - `/api/createAccount`
  - `/api/verifyLogin`
  - `/api/getUserDetailByEmail`
  - `/api/deleteAccount`
  - (and others...)

- **Test Cases:** 28  
- **Pass:** 24  
- **Fail:** 2
- **Not Executed:** 2  
- **Bugs Reported:** 4 (documented in `api_bug_reports.md`)

- **Tools Used:**  
  - Postman  
  - Newman CLI for batch runs  
  - Excel for test case documentation  
  - Screenshots of request/response

---

## 🧾 Observations

- All critical paths in UI and API are tested manually with detailed documentation.
- API failures were mostly due to poor error handling and missing validation checks.
- UI failures were related to error messages, button behavior, and inconsistent flows.
- Manual testing coverage is approximately **90–95% for both UI and API** modules.
- Automation testing is now planned to reduce regression effort and validate critical flows continuously.

---

## 📁 Files & Artifacts

| Artifact                     | Path                                     |
|------------------------------|------------------------------------------|
| UI Manual Test Cases         | `ui/manual_testing/TestCases_UI.xlsx`    |
| UI Bug Reports               | `ui/manual_testing/bug_report.md`        |
| API Manual Test Cases        | `api/manual_testing/api_test_cases.xlsx` |
| API Bug Reports              | `api/manual_testing/api_bug_reports.md`  |
| Request/Response Screenshots | In respective `screenshots/` folders     |
| Test Plan                    | `docs/test_plan.md`                      |

---

## ✅ Next Steps

- Begin Cypress-based UI automation testing.
- Integrate GitHub Actions CI for Cypress automation.
- Finalize reporting and close testing cycle with 100% automation coverage.

---

## 📌 Prepared By

- **Name:** Sworup Dhungana  
- **Date:** 2025-06-26  
