## Hi there 👋

# Ibrahim Doruk Kızıloklu

## 🤖 Robotics Engineer

Hi there! I'm Ibrahim, a Robotics Engineer.


### 🛠️ Skills

- **Mechanical Design**: SolidWorks, CAD modeling, mechatronics integration
- **Control Theory**: Non-linear control systems, state estimation
- **System Modeling**: Dynamic system simulation, finite element analysis
- **Autonomous Navigation**: Path planning, sensor fusion, SLAM
- **Computer Vision**: Object detection, tracking, deep learning for robotics

### 🔭 Current Projects

- Five-Bar Parallel Arm Robot for biomedical applications
- Exoskeleton systems for rehabilitation and sports injury recovery
- Underwater biomimetic robotics with dolphin-inspired locomotion
- Computer vision systems for underwater environments

### 📝 Recent Publications

- **[Design and Stiffness Modeling of a Novel Planar Parallel Robot with Variable Stiffness Actuators](https://link.springer.com/chapter/10.1007/978-3-031-67383-2_30)** - Springer/Mechanism Design for Robotics (2024)
- **[A Comparative Analysis Between the Additive and the Multiplicative Extended Kalman Filter](https://arxiv.org/abs/2307.06300)** - arXiv:2307.06300

### 📫 Connect With Me

- 📧 Email: ibrahimkiziloklu@gmail.com
- 📍 Location: Aalborg, Denmark
- 💼 LinkedIn: [ibrahimdorukkiziloklu](https://www.linkedin.com/in/ibrahimdorukkiziloklu/)
- 🌐 Portfolio: [View My Projects](https://ibrahimkiziloklu.github.io/)

---

## 🌐 Site Address — action required

The site is built for **https://ibrahimkiziloklu.github.io/** and every canonical URL,
Open Graph image, sitemap entry and `security.txt` record points there.

GitHub Pages only serves a *user site* at that short address when the repository is named
`<username>.github.io`. This repository is currently named `idk.github.io`, so Pages treats it
as a *project site* and serves it from `https://ibrahimkiziloklu.github.io/idk.github.io/`.

**To activate the short address (one-time, ~30 seconds):**

1. Go to **Settings → General** on this repository.
2. Under **Repository name**, change `idk.github.io` to `ibrahimkiziloklu.github.io`.
3. Click **Rename**.

GitHub redirects the old repository URL automatically, and the local clone can be repointed with
`git remote set-url origin https://github.com/ibrahimkiziloklu/ibrahimkiziloklu.github.io.git`.

Until the rename happens the pages still work at the long `/idk.github.io/` path — only the
absolute URLs in the metadata (social previews, canonical tags, sitemap) will resolve to the
short address.

### Handy short links (available after the rename)

| Link | Goes to |
| --- | --- |
| `ibrahimkiziloklu.github.io` | Portfolio home |
| `ibrahimkiziloklu.github.io/cv` | CV PDF |
| `ibrahimkiziloklu.github.io/#projects` | Projects section |

### 🔐 Site Security Posture

- Every page enforces a tailored Content Security Policy (CSP). If you add new external assets, update the relevant CSP meta tag to include the new host(s).
- Third-party scripts are limited to Google reCAPTCHA (for the contact form) and EmailJS (for client-side email delivery). Both are already whitelisted; remove the includes if you disable either feature.
- Project pages share a single modal/gallery script at `js/project-modal.js`, keeping inline scripts out of the HTML to satisfy CSP.
- A disclosure policy is published at `.well-known/security.txt` for coordinated vulnerability reporting.
- The EmailJS public key remains visible on the client. Rotate the key periodically and consider moving email delivery to a server-side workflow if you need stricter credential secrecy.
- `index.html` carries an inline `application/ld+json` block whose SHA-256 is whitelisted in that page's `script-src`. **If you edit that block, recompute the hash**, otherwise the browser will refuse it:

  ```bash
  python3 -c "import re,hashlib,base64;b=re.search(r'<script type=\"application/ld\+json\">(.*?)</script>',open('index.html',encoding='utf-8').read(),re.S).group(1);print('sha256-'+base64.b64encode(hashlib.sha256(b.encode()).digest()).decode())"
  ```

### 🖼️ Adding images

Every `<img>` carries `width`/`height` attributes so the browser reserves layout space and the page
does not jump while images load. When adding an image, set the attributes to the file's **intrinsic**
pixel size, and make sure its CSS rule includes `height: auto` — otherwise the `height` attribute is
used as the literal rendered height and the picture is stretched.

---

*I'm always open to interesting collaborations and research opportunities.*
