// ============================================================
// DATA
// ============================================================

const personalInfo = {
    name: "Delfin A. Carlos Jr.",
    title: "IT Professional",
    taglines: [
        "IT Help Desk Specialist",
        "Technical Support Engineer",
        "Python Automation Developer",
        "Web Developer",
        "Full-Stack Developer",
        "System Developer",
    ],
    email: "delfincarlos2828@gmail.com",
    phone: "+63 921 314 5574",
    address: "Pulong Kendi, 1637 Taguig City",
    linkedin: "https://www.linkedin.com/in/delfin-carlos-jr",
    github: "https://github.com/delfincarlos",
    whatsapp: "https://wa.me/639213145574",
    availability: "Open to Opportunities",
    bio: "IT professional and Cum Laude graduate with hands-on experience in IT support, help desk operations, and software-related tasks across corporate and healthcare environments. Skilled in troubleshooting hardware and software issues, managing service tickets, and providing timely support to end users both remotely and onsite. Also experienced in developing and using scripts for data processing, automation, and improving workflow efficiency.",
};

const projects = [
    {
        id: "herons-cart",
        title: "Heron's Cart",
        description: "A full-featured e-commerce website with product listings, cart functionality, user authentication, and an order management system built from the ground up.",
        tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "CSS3"],
        category: "Web Development",
        status: "completed",
        image: "images/projects/herons-cart.jpg", // ← DAGDAGAN
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        id: "makville-rentals",
        title: "MakVille Rentals",
        description: "House rental platform with property listings, booking system, and tenant management. Capstone thesis project with Best Security Design award.",
        tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        category: "Web Development",
        status: "completed",
        image: "images/makville/makville.png",
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        id: "intellicam",
        title: "Intellicam",
        description: "CCTV system with facial recognition capabilities and a web interface for live feed monitoring, event logging, and intruder detection alerts.",
        tech: ["Python", "OpenCV", "Flask", "SQLite", "JavaScript"],
        category: "AI / Computer Vision",
        status: "completed",
        image: "images/projects/intellicam.jpg",
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        id: "his-automation",
        title: "HIS Automation Tool",
        description: "Automated account unlock and password reset process for The Medical City HIS system using Playwright, reducing manual IT tasks significantly.",
        tech: ["Python", "Playwright", "HIS API"],
        category: "Automation",
        status: "completed",
        image: "images/HIS/ulock.png",
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        id: "mang-delfins-nmt",
        title: "Mang Delfin's NMT",
        description: "Network monitoring tool for real-time tracking of network performance, uptime, connected devices, and anomaly detection with dashboard UI.",
        tech: ["Python", "Flask", "JavaScript", "SQLite", "Chart.js"],
        category: "Networking",
        status: "completed",
        image: "images/projects/mang-delfins-nmt.jpg",
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        id: "playwright-automation",
        title: "Playwright Automation Tool",
        description: "NetSuite data extraction automation tool using Playwright for scheduled reporting, data pipeline, and Excel export. Freelance project.",
        tech: ["Python", "Playwright", "NetSuite API", "OpenPyXL"],
        category: "Automation",
        status: "freelance",
        image: "images/projects/playwright-automation.jpg",
        github: "#",
        demo: "#",
        featured: false,
    },
    {
        id: "kiosk-system",
        title: "University Kiosk System",
        description: "Interactive kiosk system developed for University of Makati for student self-service, information access, and campus navigation.",
        tech: ["C#", ".NET", "SQL Server", "WinForms"],
        category: "System Development",
        status: "freelance",
        image: "images/kiosks/kiosks.png",
        github: "#",
        demo: "#",
        featured: false,
    },
    {
        id: "growcab",
        title: "GrowCab",
        description: "Mobile learning management application for educational content delivery, quiz modules, and student progress tracking built with Flutter.",
        tech: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
        category: "Mobile Development",
        status: "freelance",
        image: "images/projects/growcab.jpg",
        github: "#",
        demo: "#",
        featured: true,
    },
    {
        id: "endorsement-tracker",
        title: "Endorsement Tracker",
        description: "Internal endorsement management system developed for The Medical City to streamline inter-departmental endorsement workflows and tracking.",
        tech: ["Python", "Flask", "PostgreSQL", "Bootstrap"],
        category: "System Development",
        status: "completed",
        image: "images/etracker/etracker1.png",
        github: "#",
        demo: "#",
        featured: false,
    },
    {
        id: "gdco-orlando",
        title: "GDCO for Orlando",
        description: "ADA accessibility enhancement and WAVE compliance remediation for a client website. Improved accessibility score and compliance. Freelance project.",
        tech: ["HTML5", "CSS3", "JavaScript", "WCAG 2.1", "ARIA"],
        category: "Accessibility",
        status: "Project",
        image: "images/gdcofor/gd.png", 
        github: "#",
        demo: "https://gdcoforlando.com/",
        featured: false,
    },
];

// ============================================================
// LOADING SCREEN
// ============================================================

(function initLoading() {
    const screen = document.getElementById('loading-screen');
    const bar = document.getElementById('loading-bar-fill');
    const percent = document.getElementById('loading-percent');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 12 + 4;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                screen.classList.add('hidden');
                document.body.style.overflow = 'auto';
                initReveal();
                initSkillBars();
            }, 400);
        }
        bar.style.width = progress + '%';
        percent.textContent = Math.min(100, Math.round(progress)) + '%';
    }, 80);

    document.body.style.overflow = 'hidden';
})();

// ============================================================
// CUSTOM CURSOR
// ============================================================

(function initCursor() {
    if (window.innerWidth <= 768) return;

    const ring = document.getElementById('cursor-ring');
    const dot = document.getElementById('cursor-dot');
    let mouseX = -100,
        mouseY = -100;
    let ringX = -100,
        ringY = -100;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
})();

// ============================================================
// TYPING ANIMATION
// ============================================================

(function initTyping() {
    const el = document.getElementById('typing-text');
    const texts = personalInfo.taglines;
    let textIndex = 0,
        charIndex = 0,
        deleting = false;
    const speed = 80,
        pause = 2200;

    function type() {
        const current = texts[textIndex];
        if (!deleting && charIndex < current.length) {
            el.textContent = current.slice(0, charIndex + 1);
            charIndex++;
            setTimeout(type, speed);
        } else if (!deleting && charIndex === current.length) {
            setTimeout(() => { deleting = true;
                setTimeout(type, speed / 2); }, pause);
        } else if (deleting && charIndex > 0) {
            el.textContent = current.slice(0, charIndex - 1);
            charIndex--;
            setTimeout(type, speed / 2);
        } else if (deleting && charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, speed);
        }
    }
    type();
})();

// ============================================================
// NAVBAR
// ============================================================

(function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const dropdown = document.getElementById('mobile-dropdown');
    let menuOpen = false;

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        dropdown.classList.toggle('hidden', !menuOpen);
        menuBtn.innerHTML = menuOpen ?
            `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>` :
            `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
    });

    document.querySelectorAll('[data-scroll]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.scroll;
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            if (!dropdown.classList.contains('hidden')) {
                dropdown.classList.add('hidden');
                menuOpen = false;
                menuBtn.innerHTML =
                `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
            }
        });
    });
})();

// ============================================================
// THEME TOGGLE
// ============================================================

(function initTheme() {
    const btn = document.getElementById('theme-toggle');
    let dark = true;

    btn.addEventListener('click', () => {
        dark = !dark;
        document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
        btn.innerHTML = dark ?
            `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` :
            `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    });
})();

// ============================================================
// SCROLL REVEAL
// ============================================================

function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    els.forEach((el) => observer.observe(el));
}

// ============================================================
// SKILL BARS
// ============================================================

function initSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.dataset.width;
                fill.style.width = width + '%';
            }
        });
    }, { threshold: 0.3 });

    fills.forEach((fill) => observer.observe(fill));
}

// ============================================================
// EXPERIENCE TABS
// ============================================================

(function initExperience() {
    const tabs = document.querySelectorAll('.exp-tab');
    const panels = document.querySelectorAll('.exp-panel');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const idx = tab.dataset.exp;
            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            panels.forEach((p) => p.classList.remove('active'));
            document.querySelector(`.exp-panel[data-exp="${idx}"]`).classList.add('active');
        });
    });
})();

// ============================================================
// PROJECTS - WITH SCREENSHOTS
// ============================================================

(function initProjects() {
    const grid = document.getElementById('projects-grid');
    const search = document.getElementById('project-search');
    const filterContainer = document.getElementById('project-filter');
    let currentCategory = 'All';
    let currentSearch = '';

    function renderProjects() {
        const filtered = projects.filter((p) => {
            const matchCat = currentCategory === 'All' || p.category === currentCategory;
            const matchSearch = p.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                p.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                p.tech.some((t) => t.toLowerCase().includes(currentSearch.toLowerCase()));
            return matchCat && matchSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:64px 0;color:#3a3a3e;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto 12px;display:block;"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    <p style="font-size:14px;">No projects found for this filter.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map((p) => {
            // Check if image exists
            const hasImage = p.image && p.image.trim() !== '';
            
            return `
            <div class="project-card">
                <div class="project-screenshot">
                    ${hasImage ? `
                        <img src="${p.image}" alt="${p.title} Screenshot" class="project-img" />
                    ` : `
                        <div class="project-screenshot-placeholder">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                            <span>SCREENSHOT PENDING</span>
                        </div>
                    `}
                    <div class="project-badges">
                        <span class="project-status ${p.status}">${p.status}</span>
                    </div>
                    ${p.featured ? `<div class="project-featured">★ Featured</div>` : ''}
                </div>
                <div class="project-body">
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-category">${p.category}</p>
                    <p class="project-desc">${p.description}</p>
                    <div class="project-tech">
                        ${p.tech.slice(0, 4).map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
                        ${p.tech.length > 4 ? `<span class="project-tech-more">+${p.tech.length - 4}</span>` : ''}
                    </div>
                    <div class="project-links">
                        <a href="${p.github}" class="project-link"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> Code</a>
                        <a href="${p.demo}" class="project-link"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Demo</a>
                    </div>
                </div>
            </div>
        `}).join('');
    }

    // Filter buttons
    filterContainer.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            filterContainer.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProjects();
        });
    });

    // Search
    search.addEventListener('input', () => {
        currentSearch = search.value;
        renderProjects();
    });

    renderProjects();
})();

// ============================================================
// SCROLL TO TOP
// ============================================================

(function initScrollTop() {
    const btn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        btn.classList.toggle('hidden', window.scrollY < 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// ============================================================
// THEME TOGGLE - FIXED
// ============================================================

(function initTheme() {
    const btn = document.getElementById('theme-toggle');
    const icon = btn.querySelector('.theme-icon');
    let isDark = true;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        isDark = false;
        document.body.classList.add('light-mode');
        updateIcon(icon, false);
    }

    btn.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('light-mode', !isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateIcon(icon, isDark);
    });

    function updateIcon(iconEl, dark) {
        if (dark) {
            // Sun icon (dark mode = show sun to switch to light)
            iconEl.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
        } else {
            // Moon icon (light mode = show moon to switch to dark)
            iconEl.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
        }
    }
})();

// ============================================================
// CONTACT FORM - FORMPREE INTEGRATION
// ============================================================

(function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form) {
        console.error('Contact form not found!');
        return;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Reset status
        status.className = 'form-status';
        status.style.display = 'none';
        status.textContent = '';

        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '⏳ Sending...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok) {
                status.className = 'form-status success';
                status.textContent = 'Message sent successfully! I\'ll get back to you shortly.';
                status.style.display = 'block';
                form.reset();
            } else {
                status.className = 'form-status error';
                status.textContent = data.error || 'Failed to send. Please try again.';
                status.style.display = 'block';
            }
        } catch (error) {
            console.error('Error:', error);
            status.className = 'form-status error';
            status.textContent = 'Network error. Please check your connection.';
            status.style.display = 'block';
        } finally {
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
})();

// ============================================================
// TECH STACK - AUTO DUPLICATE FOR SEAMLESS SCROLL
// ============================================================

(function initTechStack() {
    const grid = document.getElementById('techGrid');
    if (!grid) {
        console.warn('Tech grid not found!');
        return;
    }
    
    // Get all tech items
    const items = grid.querySelectorAll('.tech-item');
    
    // Clone all items and append them (duplicate for seamless loop)
    items.forEach(item => {
        const clone = item.cloneNode(true);
        grid.appendChild(clone);
    });
})();