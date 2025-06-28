@echo off
echo Running AutomationExercise API Test Suite with Newman...

newman run AutomationExercise_API_Test_Suite.postman_collection.json ^
  -e Automationexercise_API_Env.postman_environment.json ^
  -r cli,html ^
  --reporter-html-export report.html

echo.
echo Test run complete! Open "report.html" to view the detailed report.
pause
