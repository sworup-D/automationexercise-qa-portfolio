## 🐞 Known Issues Discovered During Automation

### 1. API accepts invalid email format

- **Summary**: API allows user registration with invalid email (e.g., "johndo1" without `@domain.com`).
- **Impact**: Leads to inconsistent responses across Postman (201 Created) and Newman (Email already exists). Created users cannot be deleted afterward.
- **Status**: Open / Backend validation missing
