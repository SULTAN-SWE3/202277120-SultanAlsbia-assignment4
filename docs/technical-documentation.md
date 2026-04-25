# Technical Documentation

## Project Overview
This Assignment 4 project is a static personal web application built with HTML, CSS, and JavaScript. It upgrades the previous Assignment 3 portfolio into a more complete final submission with professional design, interactive features, API integration, documentation, and presentation support.

The application does not require a build step or external framework. It can run directly from `index.html` or through a simple local static server.

## Architecture

### `index.html`
Defines the page structure and accessible content areas:
- Sticky header and responsive navigation
- Hero overview and visitor console
- Portfolio status metrics
- Assignment readiness dashboard
- Project explorer
- Skill matrix
- GitHub repository feed
- Validated contact form
- Documentation and presentation links

### `css/styles.css`
Controls the visual system:
- CSS custom properties for light and dark themes
- Responsive grid layouts
- Compact cards with consistent spacing and borders
- Mobile navigation behavior
- Form, button, badge, and status message styling
- Reduced-motion support for users who prefer less animation

### `js/script.js`
Controls the application behavior:
- Theme switching and saved preferences
- Visitor name and viewing goal personalization
- Assignment readiness checklist with saved progress
- Project filtering, searching, sorting, and rendering
- Skill category filtering
- GitHub API loading and error handling
- Contact form validation and message length counter
- Session visit timer
- Reveal animations with an Intersection Observer fallback

## Implemented Assignment Requirements

### Complete Application
- The site works as a single-page personal portfolio app.
- It includes profile information, project work, technical skills, GitHub activity, contact validation, and documentation links.
- The application is responsive across desktop, tablet, and phone layouts.

### Professional Quality
- Code is separated into HTML, CSS, and JavaScript files.
- Naming is consistent and descriptive.
- CSS variables keep the color system maintainable.
- JavaScript behavior is split into focused functions.
- Form and API errors show helpful messages instead of breaking the page.
- Images are loaded from the local `assets/images/` folder.

### Innovation
- The visitor console changes the dashboard based on the selected viewing goal.
- The assignment readiness checklist tracks final submission progress with `localStorage`.
- The project explorer combines filtering, search, sorting, status tags, impact scores, and visual cards.
- The skill matrix allows the viewer to focus on frontend, logic, or professional skills.

### AI Integration
- AI-assisted planning, review, documentation, and presentation preparation are documented in `docs/ai-usage-report.md`.
- The final output was reviewed and modified to match the assignment requirements and maintain academic integrity.

### Presentation
- A matching 5-7 minute script is included in `presentation/presentation-script.md`.
- A slide outline is included in `presentation/slides-outline.md`.
- The script follows the required structure: introduction, technical demonstration, technical deep dive, lessons learned, and conclusion.

## Data and State

### Local Data
Project and skill data are stored as JavaScript arrays in `js/script.js`. This keeps the app lightweight and easy to update.

### Browser State
The app saves these values in `localStorage`:
- Theme preference
- Visitor name
- Selected viewing goal
- Assignment readiness checklist progress

### External API
The app requests public repository data from:
`https://api.github.com/users/SULTAN-SWE3/repos?sort=updated&per_page=8`

Displayed repository fields:
- Repository name
- Language
- Description
- Last updated date
- Star count
- GitHub link

If the API request fails, the app displays a clear error message and keeps the rest of the page usable.

## Validation Rules

The contact form requires:
- Name is not empty and has at least 3 characters
- Email is not empty and matches a basic email pattern
- Reason is selected
- Message is not empty and has at least 20 characters

The form uses JavaScript validation and prevents submission until the data passes all checks.

## Accessibility and UX Notes
- Navigation uses semantic `<nav>` markup and visible link text.
- Form fields use matching labels.
- Dynamic messages use `aria-live` where helpful.
- Mobile navigation uses `aria-expanded`.
- Buttons and links have visible focus styles.
- The app includes a reduced-motion media query.
- Empty and error states are written as helpful user-facing messages.

## Performance Notes
- No framework or bundler is required.
- CSS and JavaScript are loaded as small static files.
- Project images use lazy loading.
- DOM rendering is limited to sections that change, such as projects, skills, repositories, and checklist items.
- The app avoids large unused dependencies.

## How to Test
1. Open `index.html` in a modern browser.
2. Toggle dark mode and refresh the page to confirm it is saved.
3. Enter a visitor name and refresh to confirm the greeting is restored.
4. Change the viewing goal and confirm the dashboard text updates.
5. Mark checklist items and refresh to confirm progress is saved.
6. Filter, search, and sort projects to confirm the project explorer works.
7. Select each skill filter and confirm the visible cards change.
8. Reload GitHub repositories and confirm success or a graceful error message.
9. Try the contact form with missing fields, invalid email, short message, and valid input.
10. Resize the browser to phone width and confirm navigation, cards, and forms remain usable.

## Known Limitations
- The contact form validates input but does not send data to a server.
- The GitHub section depends on internet access and GitHub API availability.
- The demo video must still be recorded by the student before final submission.
- GitHub Pages must be enabled in the repository settings for public deployment.

## Future Improvements
- Add a backend or form service for real contact submissions.
- Add more real project screenshots as the portfolio grows.
- Cache GitHub API results for offline display.
- Add automated browser tests for the interactive UI.
- Replace the presentation placeholder files with the final exported slides and recorded video.
