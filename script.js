
// =====================================
// JOB DATA - DEMO OPPORTUNITIES
// =====================================

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "NovaTech Solutions",
    category: "Development",
    location: "India",
    type: "Remote",
    experience: "Fresher",
    salary: "₹12,000",
    period: "/ month",
    logo: "N",
    logoColor: "#e9e2ff",
    logoText: "#7657f6",
    posted: "2 days ago",
    description:
      "Join our frontend team to create responsive and user-friendly web applications. You will work with designers and developers to build modern digital experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    responsibilities: [
      "Develop responsive website interfaces.",
      "Write clean and reusable frontend code.",
      "Work with the team to improve user experience."
    ]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "PixelCraft Studio",
    category: "Design",
    location: "Delhi NCR",
    type: "Hybrid",
    experience: "0-1 Years",
    salary: "₹10,000",
    period: "/ month",
    logo: "P",
    logoColor: "#ffe9df",
    logoText: "#d56a40",
    posted: "1 day ago",
    description:
      "We are looking for a creative designer who enjoys building simple, beautiful, and user-friendly digital products.",
    skills: ["Figma", "Wireframing", "Prototyping", "UI Design"],
    responsibilities: [
      "Create wireframes and interface designs.",
      "Build interactive prototypes.",
      "Collaborate with the development team."
    ]
  },
  {
    id: 3,
    title: "Java Developer",
    company: "CodeBridge Technologies",
    category: "Development",
    location: "India",
    type: "Remote",
    experience: "Fresher",
    salary: "₹15,000",
    period: "/ month",
    logo: "C",
    logoColor: "#dff2ff",
    logoText: "#2878b5",
    posted: "3 days ago",
    description:
      "Start your software development journey by working on Java-based applications and learning industry development practices.",
    skills: ["Java", "OOP", "SQL", "JDBC"],
    responsibilities: [
      "Develop Java application features.",
      "Write and test application code.",
      "Work with databases and development tools."
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    company: "GrowthWave Media",
    category: "Marketing",
    location: "India",
    type: "Remote",
    experience: "Fresher",
    salary: "₹8,000",
    period: "/ month",
    logo: "G",
    logoColor: "#fff0d9",
    logoText: "#c58a24",
    posted: "5 days ago",
    description:
      "Explore digital marketing through social media campaigns, content planning, and online brand promotion.",
    skills: ["SEO", "Social Media", "Content", "Analytics"],
    responsibilities: [
      "Assist with social media campaigns.",
      "Research content and marketing trends.",
      "Track basic campaign performance."
    ]
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "Insight Analytics",
    category: "Data",
    location: "Gurugram",
    type: "On-site",
    experience: "0-1 Years",
    salary: "₹14,000",
    period: "/ month",
    logo: "I",
    logoColor: "#e0f8ee",
    logoText: "#16894a",
    posted: "4 days ago",
    description:
      "Work with datasets and turn raw information into meaningful insights using analytical tools.",
    skills: ["Excel", "SQL", "Python", "Power BI"],
    responsibilities: [
      "Clean and organize datasets.",
      "Prepare reports and visualizations.",
      "Identify useful patterns in data."
    ]
  },
  {
    id: 6,
    title: "Business Development Associate",
    company: "NextStep Ventures",
    category: "Business",
    location: "Noida",
    type: "Hybrid",
    experience: "Fresher",
    salary: "₹9,000",
    period: "/ month",
    logo: "N",
    logoColor: "#fce3ef",
    logoText: "#c64c82",
    posted: "6 days ago",
    description:
      "Build communication and business skills while supporting client research and business growth activities.",
    skills: ["Communication", "Research", "Excel", "Presentation"],
    responsibilities: [
      "Research potential business opportunities.",
      "Support client communication.",
      "Prepare business reports and presentations."
    ]
  },
  {
    id: 7,
    title: "React Developer",
    company: "AppNest Technologies",
    category: "Development",
    location: "India",
    type: "Remote",
    experience: "0-1 Years",
    salary: "₹18,000",
    period: "/ month",
    logo: "A",
    logoColor: "#e3f5ff",
    logoText: "#2484bb",
    posted: "Today",
    description:
      "Work on interactive web applications using React and modern frontend development tools.",
    skills: ["React", "JavaScript", "CSS", "Git"],
    responsibilities: [
      "Build reusable React components.",
      "Connect frontend interfaces to APIs.",
      "Improve website performance and responsiveness."
    ]
  },
  {
    id: 8,
    title: "Graphic Design Intern",
    company: "Creative Pixel",
    category: "Design",
    location: "Delhi",
    type: "On-site",
    experience: "Fresher",
    salary: "₹7,000",
    period: "/ month",
    logo: "C",
    logoColor: "#eee5ff",
    logoText: "#7657f6",
    posted: "1 week ago",
    description:
      "Bring ideas to life through social media creatives, digital graphics, and visual storytelling.",
    skills: ["Photoshop", "Canva", "Illustrator", "Creativity"],
    responsibilities: [
      "Design social media graphics.",
      "Create visual content for campaigns.",
      "Maintain brand design consistency."
    ]
  }
];

// =====================================
// ELEMENT REFERENCES
// =====================================

const jobGrid = document.getElementById("jobGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const emptyReset = document.getElementById("emptyReset");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const savedToggle = document.getElementById("savedToggle");
const savedCount = document.getElementById("savedCount");

const detailsModal = document.getElementById("detailsModal");
const applyModal = document.getElementById("applyModal");
const jobDetailsContent = document.getElementById("jobDetailsContent");

const applicationForm = document.getElementById("applicationForm");
const toast = document.getElementById("toast");

// =====================================
// LOCAL STORAGE
// =====================================

let savedJobs = JSON.parse(localStorage.getItem("jobSphereSaved")) || [];

let applications =
  JSON.parse(localStorage.getItem("jobSphereApplications")) || [];

let showSavedOnly = false;

// =====================================
// SAVE DATA
// =====================================

function saveToStorage() {
  localStorage.setItem("jobSphereSaved", JSON.stringify(savedJobs));
  localStorage.setItem(
    "jobSphereApplications",
    JSON.stringify(applications)
  );
}

// =====================================
// TOAST MESSAGE
// =====================================

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// =====================================
// DISPLAY JOB CARDS
// =====================================

function displayJobs(jobList) {
  jobGrid.innerHTML = "";

  resultCount.textContent =
    `Showing ${jobList.length} of ${jobs.length} opportunities`;

  emptyState.hidden = jobList.length !== 0;

  if (jobList.length === 0) {
    return;
  }

  jobList.forEach(job => {
    const isSaved = savedJobs.includes(job.id);

    const card = document.createElement("article");
    card.className = "job-card";

    card.innerHTML = `
      <div class="job-card-top">
        <div class="company-logo"
          style="background:${job.logoColor};color:${job.logoText}">
          ${job.logo}
        </div>

        <button class="save-btn ${isSaved ? "saved" : ""}"
          data-save="${job.id}"
          aria-label="Save ${job.title}">
          ${isSaved ? "♥" : "♡"}
        </button>
      </div>

      <span class="job-category">${job.category}</span>

      <h3>${job.title}</h3>
      <p class="company-name">${job.company}</p>

      <div class="job-tags">
        <span>⌖ ${job.location}</span>
        <span>◷ ${job.type}</span>
        <span>✦ ${job.experience}</span>
      </div>

      <div class="job-card-bottom">
        <div class="salary">
          <strong>${job.salary}</strong>
          <small>${job.period}</small>
        </div>

        <button class="details-btn" data-details="${job.id}">
          View Details ↗
        </button>
      </div>
    `;

    jobGrid.appendChild(card);
  });
}

// =====================================
// SEARCH AND FILTER JOBS
// =====================================

function filterJobs() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const selectedType = typeFilter.value;

  let filteredJobs = jobs.filter(job => {
    const searchableText = [
      job.title,
      job.company,
      job.category,
      job.location,
      ...job.skills
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      job.category === selectedCategory;

    const matchesType =
      selectedType === "all" ||
      job.type === selectedType;

    const matchesSaved =
      !showSavedOnly || savedJobs.includes(job.id);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType &&
      matchesSaved
    );
  });

  displayJobs(filteredJobs);
}

// =====================================
// RESET FILTERS
// =====================================

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "all";
  typeFilter.value = "all";
  showSavedOnly = false;

  savedToggle.classList.remove("active");
  savedToggle.innerHTML =
    `♡ Saved Jobs <span id="savedCount">${savedJobs.length}</span>`;

  filterJobs();
}

searchBtn.addEventListener("click", filterJobs);

searchInput.addEventListener("input", filterJobs);
categoryFilter.addEventListener("change", filterJobs);
typeFilter.addEventListener("change", filterJobs);

resetBtn.addEventListener("click", resetFilters);
emptyReset.addEventListener("click", resetFilters);

// =====================================
// SAVE / UNSAVE JOBS
// =====================================

function updateSavedCount() {
  savedCount.textContent = savedJobs.length;
}

jobGrid.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  const detailsButton = event.target.closest("[data-details]");

  if (saveButton) {
    const jobId = Number(saveButton.dataset.save);

    if (savedJobs.includes(jobId)) {
      savedJobs = savedJobs.filter(id => id !== jobId);
      showToast("Job removed from saved list.");
    } else {
      savedJobs.push(jobId);
      showToast("Job saved successfully!");
    }

    saveToStorage();
    updateSavedCount();
    filterJobs();
  }

  if (detailsButton) {
    const jobId = Number(detailsButton.dataset.details);
    openJobDetails(jobId);
  }
});

// =====================================
// SHOW SAVED JOBS
// =====================================

savedToggle.addEventListener("click", () => {
  showSavedOnly = !showSavedOnly;

  savedToggle.classList.toggle("active", showSavedOnly);

  savedToggle.innerHTML = showSavedOnly
    ? `♥ Saved Jobs <span id="savedCount">${savedJobs.length}</span>`
    : `♡ Saved Jobs <span id="savedCount">${savedJobs.length}</span>`;

  filterJobs();
});

// =====================================
// JOB DETAILS MODAL
// =====================================

function openJobDetails(jobId) {
  const job = jobs.find(item => item.id === jobId);

  if (!job) return;

  jobDetailsContent.innerHTML = `
    <span class="section-tag">${job.category} OPPORTUNITY</span>

    <h2>${job.title}</h2>
    <p><strong>${job.company}</strong></p>

    <div class="job-tags">
      <span>⌖ ${job.location}</span>
      <span>◷ ${job.type}</span>
      <span>✦ ${job.experience}</span>
    </div>

    <h3>About the role</h3>
    <p>${job.description}</p>

    <h3>Required Skills</h3>
    <div class="job-tags">
      ${job.skills.map(skill => `<span>${skill}</span>`).join("")}
    </div>

    <h3>Responsibilities</h3>
    <ul>
      ${job.responsibilities.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <h3>Compensation</h3>
    <p><strong>${job.salary} ${job.period}</strong></p>

    <button class="primary-btn" id="detailsApplyBtn">
      Apply for this Job ↗
    </button>
  `;

  detailsModal.classList.add("show");

  document.getElementById("detailsApplyBtn")
    .addEventListener("click", () => {
      detailsModal.classList.remove("show");
      openApplyModal(jobId);
    });
}

// =====================================
// APPLY MODAL
// =====================================

function openApplyModal(jobId) {
  const job = jobs.find(item => item.id === jobId);

  if (!job) return;

  document.getElementById("applyJobId").value = job.id;

  document.getElementById("applyJobName").textContent =
    `${job.title} at ${job.company}`;

  applyModal.classList.add("show");
}

// =====================================
// SUBMIT APPLICATION
// =====================================

applicationForm.addEventListener("submit", event => {
  event.preventDefault();

  const jobId = Number(
    document.getElementById("applyJobId").value
  );

  const job = jobs.find(item => item.id === jobId);

  const name = document.getElementById("applicantName").value.trim();
  const email = document.getElementById("applicantEmail").value.trim();
  const education = document.getElementById("applicantEducation").value.trim();
  const skills = document.getElementById("applicantSkills").value.trim();

  if (!job || !name || !email || !education || !skills) {
    showToast("Please complete all fields.");
    return;
  }

  const alreadyApplied = applications.some(application =>
    application.jobId === jobId &&
    application.email.toLowerCase() === email.toLowerCase()
  );

  if (alreadyApplied) {
    showToast("You have already applied for this job.");
    return;
  }

  const application = {
    id: Date.now(),
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    name,
    email,
    education,
    skills,
    status: "Submitted",
    date: new Date().toLocaleDateString()
  };

  applications.push(application);

  saveToStorage();

  applicationForm.reset();
  applyModal.classList.remove("show");

  showToast("Application submitted successfully!");
});

// =====================================
// CLOSE MODALS
// =====================================

document.getElementById("closeDetails").addEventListener("click", () => {
  detailsModal.classList.remove("show");
});

document.getElementById("closeApply").addEventListener("click", () => {
  applyModal.classList.remove("show");
});

[detailsModal, applyModal].forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    detailsModal.classList.remove("show");
    applyModal.classList.remove("show");
  }
});

// =====================================
// MOBILE NAVIGATION
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// =====================================
// INITIALIZE WEBSITE
// =====================================

updateSavedCount();
displayJobs(jobs);
