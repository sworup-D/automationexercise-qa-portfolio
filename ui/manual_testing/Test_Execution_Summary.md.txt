# ✅ Test Execution Summary – AutomationExercise Project

This document provides a summarized view of manual test execution performed on the [AutomationExercise](https://automationexercise.com) website. A total of **41 test cases** were designed and executed across major user flows.

---

## 📊 Execution Overview

| Category                | Count |
|-------------------------|-------|
| Total Test Cases        | 41    |
| Passed                  | 34    |
| Failed                  | 7     |

---

## 🔍 Breakdown by Feature

| Feature Module             | Total | Pass | Fail |
|----------------------------|-------|------|------|
| Signup & Login             | 14    | 13   | 1    | 
| Product Browsing           | 7     | 6    | 1    | 
| Cart Functionality         | 6     | 5    | 1    | 
| Checkout                   | 5     | 4    | 1    |
| Account Management         | 9     | 5    | 4    | 

 ---

## ❌ Failed Test Cases

| Test Case ID | Title                                  | Reason for Failure                                  |
|--------------|----------------------------------------|-----------------------------------------------------|
| TC_011       | Login with UPPERCASE email             | Valid uppercase email is not accepted               |
| TC_020       | Search with empty input                | Products page refreshed with no feedback to the user|
| TC_025       | Update product quantity in cart page   | Quantity box is not editable                        |
| TC_029       | Checout with expired credit card       | Checkout successed                                  |
| TC_036       | Subscribe with invalid email           | Invalid email is incorrectly accepted               |
| TC_039       | Subscribe with already subscribed email| No error shown for duplicate subscription           |
| TC_040       | Subscribe with space before/after email| No error shown but Subsciribed                      |


> Refer to `bug_reports.md` for details and screenshots.

---

## ✅ Key Observations

- Core features like login, cart, and checkout are working reliably.
- Subscription module has major issues with input validation and other functionality.
- UI elements like quantity boxes are styled interactively but not functional.

---

## 📅 Test Execution Details

- **Execution Date**: June 15–18, 2025  
- **Executed By**: Sworup Dhungana  
- **Environment**:  
  - OS: Windows 10  
  - Browser: Chrome v137  
  - Device: Laptop

---

