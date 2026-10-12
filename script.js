import * as THREE from 'three';

// PERSONAL LINKS: replace these two values before publishing.
const LINKEDIN_URL = 'YOUR_LINKEDIN_URL';
const EMAIL_ADDRESS = 'YOUR_EMAIL@example.com';

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const emailLink = document.getElementById('email-link');
const linkedinLink = document.getElementById('linkedin-link');
if (emailLink && EMAIL_ADDRESS !== 'YOUR_EMAIL@example.com') emailLink.href = `mailto:${EMAIL_ADDRESS}`;
if (linkedinLink && LINKEDIN_URL !== 'YOUR_LINKEDIN_URL') linkedinLink.href = LINKEDIN_URL;

// Project cards open accessible detail panels; edit these descriptions as your work grows.
const projects = {
  venture: {
    type: 'PROJECT / ENTREPRENEURSHIP', title: 'A small venture, real decisions.',
    description: 'A self-funded micro-venture that gave me a practical introduction to the moving parts of a small business: sourcing, pricing, sales and customer conversations.',
    learning: 'Thinking about costs and pricing, speaking with customers, and learning that a business idea has to work in the real world—not just on paper.',
    next: 'Document the customer problem, track costs and sales more systematically, and use the evidence to test the next decision.'
  },
  awareness: {
    type: 'EXPERIENCE / COMMUNITY INITIATIVE', title: 'Making career paths visible.',
    description: 'Contributed to a career-awareness initiative that reached 450+ Pre-University students across multiple colleges through 10+ presentations.',
    learning: 'Communicating ideas to different audiences, helping coordinate activities, and making information more accessible to students.',
    next: 'Collect structured feedback to understand which topics are most useful and how future sessions could be improved.'
  },
  ngo: {
    type: 'EXPERIENCE / NGO INTERNSHIP', title: 'Showing up for the work.',
    description: 'Completed 30 hours of internship experience with Astha Shakti NGO, including teaching, administrative coordination and community programme support.',
    learning: 'Working responsibly with a team, communicating clearly, and supporting practical tasks that help programmes run.',
    next: 'Keep building experience in project coordination, stakeholder communication and measuring programme outcomes.'
  },
  analytics: {
    type: 'COURSEWORK / ANALYTICS & RESEARCH', title: 'Finding the signal in the noise.',
    description: 'Academic practice across Excel analytics, consumer-behaviour research, database concepts and data visualisation. This section represents coursework and learning, not professional client analytics.',
    learning: 'Organising information, asking focused questions, working with basic data tools, and presenting patterns clearly.',
    next: 'Publish a well-documented case study with a clear question, method, visualisations, limitations and conclusion.'
  }
};
const modal = document.getElementById('project-modal');
const modalType = document.getElementById('modal-type');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLearning = document.getElementById('modal-learning');
const modalNext = document.getElementById('modal-next');
let lastFocused = null;
function openProject(key, trigger) {
  const item = projects[key]; if (!item || !modal) return;
  lastFocused = trigger;
  modalType.textContent = item.type;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalLearning.textContent = item.learning;
  modalNext.textContent = item.next;
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close')?.focus();
}
function closeProject() {
  if (!modal) return;
  modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastFocused?.focus();
}
document.querySelectorAll('[data-project]').forEach(card => card.addEventListener('click', () => openProject(card.dataset.project, card)));
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeProject));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal?.classList.contains('is-open')) closeProject(); });

// Three.js hero sculpture. If WebGL is unavailable, the rest of the portfolio still works.
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  try {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setSize(canvas.clientWidth || 500, canvas.clientHeight || 500, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8.2);
    scene.add(new THREE.AmbientLight(0xbac7ff, 1.6));
    const keyLight = new THREE.PointLight(0xffffff, 95, 18); keyLight.position.set(3, 3, 4); scene.add(keyLight);
    const blueLight = new THREE.PointLight(0x687cff, 80, 14); blueLight.position.set(-3, -1, 2); scene.add(blueLight);
    const rimLight = new THREE.PointLight(0xc5aaff, 55, 12); rimLight.position.set(1, -3, -2); scene.add(rimLight);
    const group = new THREE.Group(); scene.add(group);
    const chrome = new THREE.MeshPhysicalMaterial({ color: 0xcbd0dc, metalness: 1, roughness: 0.17, clearcoat: 1, clearcoatRoughness: 0.12 });
    const darkChrome = new THREE.MeshPhysicalMaterial({ color: 0x68718b, metalness: 0.95, roughness: 0.22, clearcoat: 1 });
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.05, 0.31, 180, 24, 2, 5), chrome);
    knot.rotation.set(0.3, 0.2, -0.2); group.add(knot);
    const torusA = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.025, 12, 160), darkChrome); torusA.rotation.set(1.05, 0.35, 0.4); group.add(torusA);
    const torusB = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.018, 10, 150), chrome); torusB.rotation.set(0.35, 1.1, -0.35); group.add(torusB);
    const torusC = new THREE.Mesh(new THREE.TorusGeometry(2.02, 0.012, 8, 160), darkChrome); torusC.rotation.set(1.35, 0.1, -0.2); group.add(torusC);
    const smallSpheres = [];
    const sphereGeo = new THREE.SphereGeometry(0.055, 18, 18);
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2;
      const r = 2.15 + Math.sin(i * 2.3) * 0.18;
      const dot = new THREE.Mesh(sphereGeo, i % 3 === 0 ? chrome : darkChrome);
      dot.position.set(Math.cos(a) * r, Math.sin(a * 1.3) * 1.55, Math.sin(a) * r * 0.45);
      group.add(dot); smallSpheres.push({ dot, a, r });
    }
    // Soft particles add depth without external images or model downloads.
    const particleCount = 320; const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - .5) * 8;
      positions[i * 3 + 1] = (Math.random() - .5) * 8;
      positions[i * 3 + 2] = (Math.random() - .5) * 4 - 1;
    }
    const particleGeo = new THREE.BufferGeometry(); particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particleGeo, new THREE.PointsMaterial({ color: 0xa8b6ff, size: 0.018, transparent: true, opacity: 0.65 })); scene.add(particles);
    let targetX = 0, targetY = 0, pointerX = 0, pointerY = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    canvas.addEventListener('pointermove', event => {
      const rect = canvas.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - .5) * 1.5;
      targetY = ((event.clientY - rect.top) / rect.height - .5) * 1.1;
    });
    canvas.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });
    const resize = () => {
      const width = Math.max(1, canvas.clientWidth); const height = Math.max(1, canvas.clientHeight);
      renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize); observer.observe(canvas); resize();
    let frame = 0;
    const animate = () => {
      if (document.hidden) { requestAnimationFrame(animate); return; }
      frame += 0.005;
      pointerX += (targetX - pointerX) * 0.035; pointerY += (targetY - pointerY) * 0.035;
      if (!reducedMotion) {
        group.rotation.y = frame * 0.34 + pointerX * 0.42;
        group.rotation.x = Math.sin(frame * 0.7) * 0.12 + pointerY * 0.32;
        knot.rotation.z = Math.sin(frame * 0.55) * 0.13;
        torusA.rotation.z += 0.0015; torusB.rotation.x -= 0.001;
        particles.rotation.y = frame * 0.035;
        smallSpheres.forEach(({ dot, a, r }) => { dot.position.y = Math.sin(frame * 1.6 + a) * 0.15 + Math.sin(a * 1.3) * 1.2; dot.position.x = Math.cos(a + frame * .16) * r; dot.position.z = Math.sin(a + frame * .16) * r * .45; });
      }
      renderer.render(scene, camera); requestAnimationFrame(animate);
    };
    animate();
  } catch (error) {
    console.warn('3D scene could not start; the rest of the site remains available.', error);
    canvas.style.background = 'radial-gradient(circle at center, rgba(157,176,255,.18), transparent 65%)';
  }
}

// A restrained cursor glow on pointer devices.
const glow = document.querySelector('.cursor-glow');
if (glow && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', event => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }, { passive: true });
} else if (glow) glow.style.display = 'none';
