(() => {
    const tabs = Array.from(document.querySelectorAll(".timeline-stop"));
    const slides = Array.from(document.querySelectorAll(".project-slide"));
    const counter = document.getElementById("project-counter");
    const introCounter = document.getElementById("intro-counter");
    const status = document.getElementById("share-status");
    const previous = document.getElementById("previous-project");
    const next = document.getElementById("next-project");
    const copyLink = document.getElementById("copy-project-link");

    if (!tabs.length || tabs.length !== slides.length) return;

    let activeIndex = 0;

    function setActive(index, options = {}) {
        const { focus = false, updateHash = true } = options;
        activeIndex = (index + tabs.length) % tabs.length;

        tabs.forEach((tab, tabIndex) => {
            const active = tabIndex === activeIndex;
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", String(active));
            tab.tabIndex = active ? 0 : -1;
            slides[tabIndex].classList.toggle("is-active", active);
            slides[tabIndex].hidden = !active;
        });

        if (counter) {
            counter.innerHTML = `${String(activeIndex + 1).padStart(2, "0")} <span>/</span> ${String(tabs.length).padStart(2, "0")}`;
        }
        if (introCounter) {
            introCounter.innerHTML = `${String(activeIndex + 1).padStart(2, "0")} <i aria-hidden="true">/</i> ${String(tabs.length).padStart(2, "0")}`;
        }

        if (updateHash) {
            const projectId = slides[activeIndex].dataset.projectId;
            history.replaceState(null, "", `${window.location.pathname}${window.location.search}#project-${projectId}`);
        }

        if (focus) tabs[activeIndex].focus();
        if (status) status.textContent = "";
    }

    function indexFromHash() {
        const projectId = window.location.hash.replace(/^#project-/, "");
        return slides.findIndex((slide) => slide.dataset.projectId === projectId);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => setActive(index));
    });

    document.querySelector(".timeline")?.addEventListener("keydown", (event) => {
        const current = tabs.indexOf(document.activeElement);
        if (current < 0) return;

        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            setActive(current + (event.key === "ArrowRight" ? 1 : -1), { focus: true });
        } else if (event.key === "Home") {
            event.preventDefault();
            setActive(0, { focus: true });
        } else if (event.key === "End") {
            event.preventDefault();
            setActive(tabs.length - 1, { focus: true });
        }
    });

    previous?.addEventListener("click", () => setActive(activeIndex - 1));
    next?.addEventListener("click", () => setActive(activeIndex + 1));

    copyLink?.addEventListener("click", async () => {
        const projectId = slides[activeIndex].dataset.projectId;
        const projectUrl = new URL(window.location.href);
        projectUrl.hash = `project-${projectId}`;

        try {
            await navigator.clipboard.writeText(projectUrl.href);
            if (status) status.textContent = "Project link copied";
        } catch {
            if (status) status.textContent = "Select the project, then copy its address from your browser";
        }
    });

    window.addEventListener("hashchange", () => {
        const index = indexFromHash();
        if (index >= 0 && index !== activeIndex) setActive(index, { updateHash: false });
    });

    const hashIndex = indexFromHash();
    const timelineAnchor = window.location.hash === "#project-timeline" || window.location.hash === "#projects";
    const hasProjectAnchor = timelineAnchor || hashIndex >= 0;
    if (hashIndex >= 0) setActive(hashIndex, { updateHash: false });
    else setActive(0, { updateHash: !timelineAnchor });

    if (hasProjectAnchor) {
        window.requestAnimationFrame(() => document.getElementById("project-timeline")?.scrollIntoView({ block: "start" }));
    }
})();
