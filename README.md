# 202277120-SultanAlsbia-assignment4

## Project Description
This repository contains my SWE363 Assignment 4 personal web application. It builds on the previous portfolio assignment and turns it into a more complete, polished, presentation-ready portfolio website for Sultan Alsbia.

The application showcases my course projects, technical skills, GitHub activity, documentation, AI usage, and final presentation preparation in one responsive static web app.

## Main Features
- Personal visitor console with saved name, selected viewing goal, and theme preference
- Responsive portfolio dashboard with assignment readiness checklist
- Interactive project explorer with category filtering, search, sorting, and project evidence tags
- Skill matrix with focus filters for frontend, logic, and professional skills
- GitHub REST API integration that displays latest public repositories
- Contact form with client-side validation and live message length feedback
- Documentation hub linking to README, technical documentation, AI usage report, and presentation script
- Light and dark themes saved with `localStorage`
- Mobile navigation, accessible form labels, status messages, and reduced-motion support

## Project Structure
```text
202277120-SultanAlsbia-assignment4/
+-- README.md
+-- index.html
+-- css/
|   +-- styles.css
+-- js/
|   +-- script.js
+-- assets/
|   +-- images/
|       +-- project1.png
|       +-- project2.png
+-- docs/
|   +-- ai-usage-report.md
|   +-- technical-documentation.md
+-- presentation/
|   +-- slides.pdf
|   +-- demo-video.mp4
|   +-- presentation-script.md
|   +-- slides-outline.md
+-- .gitignore
```

## How to Run Locally
1. Clone or download the repository.
2. Open the folder `202277120-SultanAlsbia-assignment4`.
3. Open `index.html` in a modern browser.
4. For a smoother local development workflow, use the VS Code Live Server extension or any simple static server.
5. Make sure the browser has internet access if you want the GitHub API section to load live repository data.

## Deployment
Recommended deployment option: GitHub Pages.

1. Push the repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Select the `main` branch and root folder.
5. Save the settings.

Expected live URL after GitHub Pages is enabled:
`https://sultan-swe3.github.io/202277120-SultanAlsbia-assignment4/`

## Technologies Used
- HTML5
- CSS3
- JavaScript
- GitHub REST API
- Local Storage
- Git and GitHub

## Testing Checklist
- Open the home page and confirm all sections load.
- Toggle dark mode, refresh, and confirm the theme is saved.
- Save a visitor name, refresh, and confirm the greeting is restored.
- Change the viewing goal and confirm the dashboard content updates.
- Use the project category filter, search field, and sort menu together.
- Use skill filters and confirm the skill cards update.
- Reload the GitHub repository feed and confirm success or graceful error handling.
- Submit the contact form with invalid input and confirm helpful error messages.
- Submit the contact form with valid input and confirm success feedback.
- Resize the browser or test on a phone width to verify the responsive layout.

## AI Usage Summary
AI tools were used to help plan the Assignment 4 upgrade, review JavaScript logic, improve wording in documentation, and prepare the presentation script. All AI-assisted output was reviewed, edited, and adapted to match the assignment requirements and my own project.

Full details are documented in [docs/ai-usage-report.md](docs/ai-usage-report.md).

## Documentation
- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)

## Presentation Notes
- `presentation/slides.pdf` contains a simple generated slide deck based on the outline.
- This is final screen demo `presentation/demo-video.mp4`

## Author
Sultan Alsbia
Student ID: 202277120
