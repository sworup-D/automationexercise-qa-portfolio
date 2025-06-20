# 🧾 Summary Report – Manual UI Testing

## 🔍 Overview
This report wraps up the results and insights from my manual testing of the UI components of AutomationExercise.com.

---

## 📊 Execution Summary

- Total Test Cases: 41
- Passed: 34
- Failed: 7

### ❗ Main Bugs Found
- Login failure despite valid credentials (UI Bug)
- Cart quantity not updating correctly
- Search with some special character shows products
- Email field accepts input without `.com` (validation bug)

---

## 🔬 Exploratory Findings
While going beyond test cases, I discovered 3 additional bugs — like form misbehavior and unexpected UI glitches — which weren’t covered in the original test plan.

---

## 🧠 Key Takeaways
- **Validation is weak** across several forms — many inputs aren’t properly checked.
- **UI feedback is missing** in some actions (e.g., Login fails silently).
- **Navigation flows** are mostly working, but a few cases need improvement.

---

## 💡 Recommendations
- Add stronger client-side validations
- Provide user feedback for failed actions
- Consider edge cases like empty fields or invalid inputs

---

## ✅ Conclusion
This testing cycle helped uncover both planned and unexpected issues. The bugs have been clearly documented with evidence and can be used for fixing and retesting.

Thanks for reviewing my work!
