# API Automation

This folder hosts all automated API testing artifacts for AutomationExercise.

## Contents

- Postman collection files (`AutomationExercise API Test_Suite.postman_collection.json`) containing the API test suites.
- Environment configuration files (`Automationexercise API Env.postman.environment.json`) to parameterize test runs.
- Scripts such as `run_tests.bat` for running tests locally.
- Generated test reports (excluded from version control via `.gitignore`).

## Overview

Automated API tests provide fast, repeatable validation of critical API endpoints, improving test coverage and accelerating feedback loops.

## How to Run Tests

### Using the Batch File (Windows)

1. Navigate to this folder (`api/automation/`).
2. Double-click `run_tests.bat` to execute the Postman API test suite.
3. View the HTML report generated in this folder, usually `report.html`.

### Using Newman CLI Directly

If you prefer to run tests manually using Newman, execute this command in your terminal:

```bash
newman run AutomationExercise_API_Test_Suite.postman_collection.json -e automationexercise_environment.json -r cli,html --reporter-html-export report.html

