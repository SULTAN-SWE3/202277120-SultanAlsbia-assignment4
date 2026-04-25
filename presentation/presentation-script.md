# Assignment 4 Presentation Script

Target length: 5-7 minutes

## 1. Introduction - About 1 Minute
Hello, my name is Sultan Alsbia, and this is my SWE363 Assignment 4 personal web application.

The objective of this final assignment was to bring together the work from the previous portfolio assignments and turn it into a complete, polished web app. My goal was not only to make a page that displays information, but to make a usable portfolio application that shows my projects, technical skills, GitHub activity, documentation, AI usage, and final presentation preparation.

My personal motivation for this project was to create something I can keep improving after the course. I wanted the website to feel organized, professional, and easy to explain during a live demonstration.

## 2. Technical Demonstration - About 3 to 4 Minutes
First, I will start from the top of the application. The homepage introduces the project as a complete personal portfolio web application for Assignment 4. On the right side, there is a visitor console. I can enter a visitor name, save it, and the greeting updates. This preference is saved with local storage, so if I refresh the page, the name remains.

The visitor console also includes a viewing goal. For example, I can choose instructor review, classmate preview, or professional portfolio. When I change this option, the dashboard content updates to focus on the selected audience. This shows conditional rendering and saved user preference logic.

Next, the status row shows a session timer, the selected viewing goal, the current theme, and the assignment readiness score. The theme button in the header switches between light mode and dark mode, and that setting is also saved in local storage.

In the application dashboard, I included an assignment readiness checklist. This checklist represents final submission requirements such as repository structure, the complete web app, responsive design, documentation, presentation material, and deployment. When I check items, the readiness percentage updates and remains saved after refresh. I added this as a small creative feature because it connects the app directly to the final assignment process.

Now I will move to the project explorer. This section shows my portfolio work and course progress. The cards include project titles, descriptions, categories, status labels, impact scores, and evidence tags. The first two cards use image assets from the project folder. I can filter by category, search by text, and sort by newest, oldest, title, or highest impact. These controls work together through the same JavaScript state, so the interface updates dynamically.

The next section is the skill matrix. It shows technical capabilities such as semantic HTML, responsive CSS, JavaScript state, API integration, form validation, documentation, responsible AI use, and presentation readiness. I can filter the skills by frontend, logic, or professional focus. This makes the portfolio more useful for different viewers.

The GitHub section demonstrates API integration. The application uses the GitHub REST API to fetch my latest public repositories. It displays repository name, language, description, update date, star count, and a link to GitHub. I also included loading, success, empty, and error states so the page does not break if the request fails.

Finally, the contact form demonstrates validation. It checks that the name is long enough, the email format is valid, a reason is selected, and the message has at least 20 characters. The counter updates as the user types. If the input is wrong, the page shows a helpful error. If the input is valid, it shows a success message.

At the bottom, the documentation section links to the README, technical documentation, AI usage report, and this presentation script.

## 3. Technical Deep Dive - About 1 to 2 Minutes
The project uses a simple static architecture: `index.html` for structure, `css/styles.css` for layout and visual design, and `js/script.js` for behavior.

The most challenging part was keeping multiple interactive features connected without making the JavaScript messy. The project explorer uses category filtering, search, and sorting together. To solve this, I used one shared state object and separate functions for filtering, sorting, and rendering.

Another challenge was handling external API data. The GitHub API may fail because of connection problems or rate limits, so I added loading and error messages. This keeps the user experience clear even when external data is unavailable.

One unresolved item is that the contact form does not send messages to a real server. It validates input only on the client side. Another remaining task is final deployment and recording the demo video for submission.

For innovation, I added the visitor goal system and the assignment readiness checklist. These features make the portfolio more interactive and connect it directly to the assignment requirements.

The main lesson I learned is that a good web application is not only about adding features. It also needs organization, clear user feedback, responsive layout, documentation, and code that I can explain.

## 4. Conclusion - About 1 Minute
In conclusion, this Assignment 4 project combines the course concepts into one final personal web application. It includes semantic HTML, responsive CSS, JavaScript interactivity, local storage, API integration, form validation, error handling, AI usage documentation, and presentation preparation.

The outcome is a portfolio that is ready to present and can continue growing after the course. Future improvements would include connecting the contact form to a real backend, adding more project screenshots, caching GitHub data for offline use, and expanding the portfolio with more completed work.

Thank you for watching my presentation.

## Short Demo Order
1. Show the homepage and explain the project goal.
2. Save a visitor name and change the viewing goal.
3. Toggle dark mode.
4. Mark checklist items and show readiness progress.
5. Filter, search, and sort projects.
6. Filter the skill matrix.
7. Reload GitHub repositories.
8. Test invalid and valid contact form input.
9. Show README, AI report, technical documentation, and presentation script links.
