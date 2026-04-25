const elements = {
  menuBtn: document.getElementById("menuBtn"),
  primaryNav: document.getElementById("primaryNav"),
  themeBtn: document.getElementById("themeBtn"),
  themeStatus: document.getElementById("themeStatus"),
  visitorNameInput: document.getElementById("visitorName"),
  saveNameBtn: document.getElementById("saveNameBtn"),
  resetPreferencesBtn: document.getElementById("resetPreferencesBtn"),
  viewerGoal: document.getElementById("viewerGoal"),
  greetingMessage: document.getElementById("greetingMessage"),
  savedGoalLabel: document.getElementById("savedGoalLabel"),
  goalTitle: document.getElementById("goalTitle"),
  goalDescription: document.getElementById("goalDescription"),
  goalHighlights: document.getElementById("goalHighlights"),
  visitTimer: document.getElementById("visitTimer"),
  readinessScore: document.getElementById("readinessScore"),
  readinessList: document.getElementById("readinessList"),
  completeChecklistBtn: document.getElementById("completeChecklistBtn"),
  categoryFilter: document.getElementById("categoryFilter"),
  sortProjects: document.getElementById("sortProjects"),
  projectSearch: document.getElementById("projectSearch"),
  projectList: document.getElementById("projectList"),
  projectCount: document.getElementById("projectCount"),
  projectEmptyState: document.getElementById("projectEmptyState"),
  skillFilters: document.querySelectorAll(".skill-filter"),
  skillList: document.getElementById("skillList"),
  repoStatus: document.getElementById("repoStatus"),
  repoList: document.getElementById("repoList"),
  repoUpdatedAt: document.getElementById("repoUpdatedAt"),
  reloadReposBtn: document.getElementById("reloadReposBtn"),
  githubUsername: document.getElementById("githubUsername"),
  contactForm: document.getElementById("contactForm"),
  contactName: document.getElementById("contactName"),
  contactEmail: document.getElementById("contactEmail"),
  contactReason: document.getElementById("contactReason"),
  contactMessage: document.getElementById("contactMessage"),
  clearFormBtn: document.getElementById("clearFormBtn"),
  messageCounter: document.getElementById("messageCounter"),
  formFeedback: document.getElementById("formFeedback"),
  revealElements: document.querySelectorAll(".reveal"),
};

const STORAGE_KEYS = {
  theme: "assignment4-theme",
  name: "assignment4-name",
  goal: "assignment4-goal",
  checklist: "assignment4-checklist",
};

const GITHUB_USER = "SULTAN-SWE3";

const goalContent = {
  instructor: {
    label: "Instructor",
    title: "Instructor review path",
    description: "Focus on rubric coverage, documentation quality, error handling, and the final presentation plan.",
    highlights: [
      "Complete assignment4 naming and folder structure",
      "Documented AI use and technical decisions",
      "Interactive features with saved browser state",
      "Clear testing checklist for final review",
    ],
  },
  peer: {
    label: "Classmate",
    title: "Classmate preview path",
    description: "Focus on the visible features, responsive behavior, and how the application can be demonstrated quickly.",
    highlights: [
      "Fast project filtering and sorting",
      "Readable feature cards and skill evidence",
      "Contact validation with helpful messages",
      "Presentation script for a smooth demo",
    ],
  },
  employer: {
    label: "Professional",
    title: "Professional portfolio path",
    description: "Focus on professional polish, technical range, deployment readiness, and maintainable front-end code.",
    highlights: [
      "Production-style layout and accessible controls",
      "GitHub repository feed from a public API",
      "Reusable JavaScript rendering functions",
      "Documentation that explains design and architecture",
    ],
  },
};

const readinessItems = [
  {
    id: "structure",
    title: "Repository structure",
    detail: "Required folders and files are present.",
  },
  {
    id: "application",
    title: "Complete web app",
    detail: "Portfolio sections, interactivity, API data, and contact validation are implemented.",
  },
  {
    id: "responsive",
    title: "Responsive design",
    detail: "The layout adapts for desktop, tablet, and phone widths.",
  },
  {
    id: "documentation",
    title: "Documentation",
    detail: "README, technical documentation, and AI usage report are updated.",
  },
  {
    id: "presentation",
    title: "Presentation materials",
    detail: "A 5-7 minute presentation script is included.",
  },
  {
    id: "deployment",
    title: "Live deployment",
    detail: "Publish the repository with GitHub Pages after final upload.",
  },
];

const projects = [
  {
    title: "Assignment 4 Portfolio App",
    category: "portfolio",
    date: "2026-04-25",
    impact: 5,
    status: "Final version",
    image: "assets/images/project2.png",
    imageAlt: "Portfolio project screenshot",
    description:
      "A polished personal web application that combines project cards, skills, GitHub API data, saved preferences, documentation, and presentation support.",
    evidence: ["Responsive layout", "Local storage", "API integration"],
    link: "#overview",
  },
  {
    title: "Assignment 3 Interactive Portfolio",
    category: "javascript",
    date: "2026-04-05",
    impact: 4,
    status: "Expanded",
    image: "assets/images/project1.png",
    imageAlt: "Earlier portfolio screenshot",
    description:
      "The previous portfolio version introduced filtering, sorting, API loading, visitor personalization, and contact form validation.",
    evidence: ["Filtering", "Sorting", "Validation"],
    link: "#projects",
  },
  {
    title: "Technical Documentation Package",
    category: "documentation",
    date: "2026-04-25",
    impact: 4,
    status: "Updated",
    description:
      "A professional documentation set covering setup instructions, architecture, testing, AI usage, and presentation preparation.",
    evidence: ["README", "Technical docs", "AI report"],
    link: "docs/technical-documentation.md",
  },
  {
    title: "Responsive UI System",
    category: "ui",
    date: "2026-04-22",
    impact: 3,
    status: "Implemented",
    description:
      "A reusable design system with theme tokens, compact cards, accessible controls, mobile navigation, and reduced-motion support.",
    evidence: ["CSS variables", "Mobile layout", "Accessibility"],
    link: "css/styles.css",
  },
  {
    title: "GitHub Repository Feed",
    category: "javascript",
    date: "2026-04-20",
    impact: 4,
    status: "Live data",
    description:
      "A client-side API feature that fetches the latest public repositories and handles loading, success, empty, and error states.",
    evidence: ["Fetch API", "Error handling", "Dynamic rendering"],
    link: "#github",
  },
  {
    title: "Presentation Workflow",
    category: "documentation",
    date: "2026-04-25",
    impact: 3,
    status: "Ready",
    description:
      "A prepared speaking script and slide outline to keep the 5-7 minute demo focused on objectives, features, challenges, and future work.",
    evidence: ["Demo flow", "Technical deep dive", "Lessons learned"],
    link: "presentation/presentation-script.md",
  },
];

const skills = [
  {
    title: "Semantic HTML",
    category: "frontend",
    level: 90,
    evidence: "The page uses sections, headings, forms, nav landmarks, labels, and accessible live regions.",
  },
  {
    title: "Responsive CSS",
    category: "frontend",
    level: 88,
    evidence: "CSS variables, grid layouts, mobile navigation, and reduced-motion rules keep the app usable across screens.",
  },
  {
    title: "JavaScript State",
    category: "logic",
    level: 86,
    evidence: "A shared state object coordinates theme, goal, filtering, sorting, checklist progress, and rendering.",
  },
  {
    title: "API Integration",
    category: "logic",
    level: 82,
    evidence: "The GitHub REST API section handles loading, success, empty, and failure states with clear messages.",
  },
  {
    title: "Form Validation",
    category: "logic",
    level: 84,
    evidence: "The contact form validates required fields, name length, email format, reason selection, and message length.",
  },
  {
    title: "Documentation",
    category: "professional",
    level: 90,
    evidence: "README, technical documentation, AI usage notes, and presentation support are included for submission.",
  },
  {
    title: "Responsible AI Use",
    category: "professional",
    level: 80,
    evidence: "AI support is documented with use cases, benefits, challenges, learning outcomes, and manual review steps.",
  },
  {
    title: "Presentation Readiness",
    category: "professional",
    level: 85,
    evidence: "The project includes a focused 5-7 minute script that matches the final implemented features.",
  },
];

const appState = {
  theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
  visitorName: localStorage.getItem(STORAGE_KEYS.name) || "",
  goal: localStorage.getItem(STORAGE_KEYS.goal) || "instructor",
  category: "all",
  sortBy: "newest",
  search: "",
  skillFilter: "all",
  checklist: loadChecklistState(),
};

function loadChecklistState() {
  try {
    const savedChecklist = JSON.parse(localStorage.getItem(STORAGE_KEYS.checklist));
    return savedChecklist && typeof savedChecklist === "object" ? savedChecklist : {};
  } catch (error) {
    return {};
  }
}

function saveChecklistState() {
  localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(appState.checklist));
}

function getGreetingByTime() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  appState.theme = isDark ? "dark" : "light";
  localStorage.setItem(STORAGE_KEYS.theme, appState.theme);
  elements.themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  elements.themeStatus.textContent = isDark ? "Dark" : "Light";
}

function updateGreeting() {
  const greeting = getGreetingByTime();
  const cleanName = appState.visitorName.trim();
  const goal = goalContent[appState.goal] || goalContent.instructor;

  elements.greetingMessage.textContent = cleanName
    ? `${greeting}, ${cleanName}. The app is set for ${goal.label.toLowerCase()} viewing.`
    : `${greeting}. Add your name and choose a viewing goal to personalize the portfolio.`;
}

function setViewerGoal(goalKey) {
  const goal = goalContent[goalKey] || goalContent.instructor;
  appState.goal = goalContent[goalKey] ? goalKey : "instructor";
  localStorage.setItem(STORAGE_KEYS.goal, appState.goal);

  elements.viewerGoal.value = appState.goal;
  elements.savedGoalLabel.textContent = goal.label;
  elements.goalTitle.textContent = goal.title;
  elements.goalDescription.textContent = goal.description;
  elements.goalHighlights.innerHTML = goal.highlights.map((item) => `<li>${item}</li>`).join("");
  updateGreeting();
}

function renderReadinessList() {
  elements.readinessList.innerHTML = readinessItems
    .map((item) => {
      const checked = Boolean(appState.checklist[item.id]);

      return `
        <label class="readiness-item">
          <input type="checkbox" data-checklist-id="${item.id}" ${checked ? "checked" : ""} />
          <span>
            <strong>${item.title}</strong>
            ${item.detail}
          </span>
        </label>
      `;
    })
    .join("");

  elements.readinessList.querySelectorAll("input").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      appState.checklist[event.target.dataset.checklistId] = event.target.checked;
      saveChecklistState();
      updateReadinessScore();
    });
  });

  updateReadinessScore();
}

function updateReadinessScore() {
  const completedItems = readinessItems.filter((item) => appState.checklist[item.id]).length;
  const score = Math.round((completedItems / readinessItems.length) * 100);
  elements.readinessScore.textContent = `${score}%`;
}

function completeCoreChecklistItems() {
  ["structure", "application", "responsive", "documentation", "presentation"].forEach((id) => {
    appState.checklist[id] = true;
  });

  saveChecklistState();
  renderReadinessList();
}

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getFilteredProjects() {
  const normalizedSearch = appState.search.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = appState.category === "all" || project.category === appState.category;
    const searchableText = `${project.title} ${project.description} ${project.evidence.join(" ")}`.toLowerCase();
    const matchesSearch = normalizedSearch === "" || searchableText.includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });

  return sortProjectData(filteredProjects);
}

function sortProjectData(projectData) {
  const sortedProjects = [...projectData];

  if (appState.sortBy === "title") {
    return sortedProjects.sort((first, second) => first.title.localeCompare(second.title));
  }

  if (appState.sortBy === "impact") {
    return sortedProjects.sort((first, second) => second.impact - first.impact || first.title.localeCompare(second.title));
  }

  return sortedProjects.sort((first, second) => {
    const firstDate = new Date(first.date);
    const secondDate = new Date(second.date);
    return appState.sortBy === "oldest" ? firstDate - secondDate : secondDate - firstDate;
  });
}

function renderProjectVisual(project) {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.imageAlt}" loading="lazy" />`;
  }

  return `<div class="project-placeholder">${project.title}</div>`;
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();

  elements.projectList.innerHTML = filteredProjects
    .map((project) => {
      const featuredClass = project.title.includes("Assignment 4") ? "featured" : "";
      const evidenceTags = project.evidence.map((item) => `<span class="pill">${item}</span>`).join("");

      return `
        <article class="project-card ${featuredClass}">
          <div class="project-visual">${renderProjectVisual(project)}</div>
          <div class="project-body">
            <div class="pill-row">
              <span class="pill">${project.category}</span>
              <span class="pill">${project.status}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-meta">
              <span>Date: ${formatDate(project.date)}</span>
              <span>Impact: ${project.impact}/5</span>
            </div>
            <div class="pill-row" aria-label="Project evidence">${evidenceTags}</div>
            <p class="project-actions"><a href="${project.link}">Open related section</a></p>
          </div>
        </article>
      `;
    })
    .join("");

  elements.projectEmptyState.hidden = filteredProjects.length > 0;
  elements.projectCount.textContent = `${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"}`;
}

function renderSkills() {
  const visibleSkills = skills.filter((skill) => appState.skillFilter === "all" || skill.category === appState.skillFilter);

  elements.skillList.innerHTML = visibleSkills
    .map(
      (skill) => `
        <article class="skill-card">
          <span class="pill">${skill.category}</span>
          <h3>${skill.title}</h3>
          <div class="skill-meter" aria-label="${skill.title} level ${skill.level} percent">
            <span style="--level: ${skill.level}%"></span>
          </div>
          <p class="skill-evidence">${skill.evidence}</p>
        </article>
      `
    )
    .join("");
}

function setRepoStatus(message, type = "") {
  elements.repoStatus.textContent = message;
  elements.repoStatus.className = type ? `status-banner is-${type}` : "status-banner";
}

async function loadRepositories() {
  setRepoStatus("Loading repositories...");
  elements.repoList.innerHTML = "";
  elements.reloadReposBtn.disabled = true;

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=8`);

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const repositories = await response.json();
    const visibleRepositories = repositories.filter((repo) => !repo.fork).slice(0, 4);

    if (visibleRepositories.length === 0) {
      setRepoStatus("No public repositories were found for this GitHub account.", "error");
      elements.repoUpdatedAt.textContent = "No repositories available";
      return;
    }

    elements.repoList.innerHTML = visibleRepositories
      .map((repo) => {
        const updatedDate = formatDate(repo.updated_at);

        return `
          <article class="repo-card">
            <span class="pill">${repo.language || "Code"}</span>
            <h3>${repo.name}</h3>
            <p>${repo.description || "Public repository without a description."}</p>
            <div class="repo-meta">
              <span>Updated: ${updatedDate}</span>
              <span>Stars: ${repo.stargazers_count}</span>
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Open on GitHub</a>
          </article>
        `;
      })
      .join("");

    elements.repoUpdatedAt.textContent = `Loaded ${new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    setRepoStatus("Repositories loaded successfully.", "success");
  } catch (error) {
    elements.repoUpdatedAt.textContent = "Unable to refresh";
    setRepoStatus("Unable to load GitHub data right now. Check the connection or try again later.", "error");
  } finally {
    elements.reloadReposBtn.disabled = false;
  }
}

function showFormFeedback(message, type) {
  elements.formFeedback.textContent = message;
  elements.formFeedback.className = `form-feedback is-${type}`;
}

function updateMessageCounter() {
  const currentLength = elements.contactMessage.value.trim().length;
  elements.messageCounter.textContent = `${currentLength}/20 minimum`;
}

function validateContactForm() {
  const name = elements.contactName.value.trim();
  const email = elements.contactEmail.value.trim();
  const reason = elements.contactReason.value;
  const message = elements.contactMessage.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !reason || !message) {
    showFormFeedback("Please complete every field before validating the message.", "error");
    return false;
  }

  if (name.length < 3) {
    showFormFeedback("Please enter a name with at least 3 characters.", "error");
    return false;
  }

  if (!emailPattern.test(email)) {
    showFormFeedback("Please enter a valid email address.", "error");
    return false;
  }

  if (message.length < 20) {
    showFormFeedback("Your message must contain at least 20 characters.", "error");
    return false;
  }

  showFormFeedback(`Thank you, ${name}. Your ${reason} message passed validation.`, "success");
  return true;
}

function clearContactForm() {
  elements.contactForm.reset();
  updateMessageCounter();
  elements.formFeedback.textContent = "";
  elements.formFeedback.className = "form-feedback";
}

function startVisitTimer() {
  const sessionStart = Date.now();

  setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - sessionStart) / 1000);
    const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
    const seconds = String(elapsedSeconds % 60).padStart(2, "0");
    elements.visitTimer.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function initializeRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    elements.revealElements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  elements.revealElements.forEach((element) => observer.observe(element));
}

function resetPreferences() {
  localStorage.removeItem(STORAGE_KEYS.theme);
  localStorage.removeItem(STORAGE_KEYS.name);
  localStorage.removeItem(STORAGE_KEYS.goal);
  appState.visitorName = "";
  appState.goal = "instructor";
  elements.visitorNameInput.value = "";
  setTheme("light");
  setViewerGoal("instructor");
}

elements.menuBtn.addEventListener("click", () => {
  const isOpen = elements.primaryNav.classList.toggle("open");
  elements.menuBtn.setAttribute("aria-expanded", String(isOpen));
});

elements.primaryNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    elements.primaryNav.classList.remove("open");
    elements.menuBtn.setAttribute("aria-expanded", "false");
  }
});

elements.themeBtn.addEventListener("click", () => {
  setTheme(appState.theme === "dark" ? "light" : "dark");
});

elements.saveNameBtn.addEventListener("click", () => {
  appState.visitorName = elements.visitorNameInput.value.trim();

  if (appState.visitorName) {
    localStorage.setItem(STORAGE_KEYS.name, appState.visitorName);
  } else {
    localStorage.removeItem(STORAGE_KEYS.name);
  }

  updateGreeting();
});

elements.resetPreferencesBtn.addEventListener("click", resetPreferences);

elements.viewerGoal.addEventListener("change", (event) => {
  setViewerGoal(event.target.value);
});

elements.completeChecklistBtn.addEventListener("click", completeCoreChecklistItems);

elements.categoryFilter.addEventListener("change", (event) => {
  appState.category = event.target.value;
  renderProjects();
});

elements.sortProjects.addEventListener("change", (event) => {
  appState.sortBy = event.target.value;
  renderProjects();
});

elements.projectSearch.addEventListener("input", (event) => {
  appState.search = event.target.value;
  renderProjects();
});

elements.skillFilters.forEach((button) => {
  button.addEventListener("click", () => {
    appState.skillFilter = button.dataset.skillFilter;
    elements.skillFilters.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderSkills();
  });
});

elements.reloadReposBtn.addEventListener("click", loadRepositories);

elements.contactMessage.addEventListener("input", updateMessageCounter);

elements.clearFormBtn.addEventListener("click", clearContactForm);

elements.contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateContactForm()) {
    elements.contactForm.reset();
    updateMessageCounter();
  }
});

function initializeApp() {
  elements.githubUsername.textContent = GITHUB_USER;
  elements.visitorNameInput.value = appState.visitorName;
  elements.categoryFilter.value = appState.category;
  elements.sortProjects.value = appState.sortBy;
  setTheme(appState.theme);
  setViewerGoal(appState.goal);
  renderReadinessList();
  renderProjects();
  renderSkills();
  updateMessageCounter();
  startVisitTimer();
  initializeRevealAnimations();
  loadRepositories();
}

initializeApp();
