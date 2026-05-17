import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const PRESENTATIONS_DIR = join(ROOT, 'presentations');
const DIST = join(__dirname, 'dist');

const MONTHS = {
  es: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

function escapeHtml(s) {
  return String(s ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
}

function formatDate(iso, isApprox, lang) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  const months = MONTHS[lang] ?? MONTHS.es;
  const monthName = months[m - 1];
  if (isApprox) {
    return lang === 'en' ? `${monthName} ${y}` : `${monthName} de ${y}`;
  }
  return lang === 'en' ? `${monthName} ${d}, ${y}` : `${d} de ${monthName} de ${y}`;
}

function isUpcoming(iso, todayIso) {
  return iso >= todayIso;
}

async function loadPresentations() {
  const entries = await readdir(PRESENTATIONS_DIR, { withFileTypes: true });
  const presentations = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const jsonPath = join(PRESENTATIONS_DIR, slug, 'presentation.json');
    try {
      const raw = await readFile(jsonPath, 'utf-8');
      const meta = JSON.parse(raw);
      presentations.push({ slug, ...meta });
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.warn(`[landing] No presentation.json in ${slug} — skipping`);
      } else {
        console.warn(`[landing] Could not read ${slug}/presentation.json: ${err.message}`);
      }
    }
  }
  presentations.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return presentations;
}

function renderCard(p, todayIso) {
  const upcoming = isUpcoming(p.date, todayIso);
  const dateText = formatDate(p.date, !!p.dateApprox, p.language || 'es');
  const langLabel = (p.language || 'es').toUpperCase();
  return `<a class="card${upcoming ? ' card--upcoming' : ''}" href="./${escapeHtml(p.slug)}/">
  <div class="card-meta">
    <span class="card-date">${escapeHtml(dateText)}</span>
    ${upcoming ? '<span class="card-badge card-badge--upcoming">Próxima</span>' : ''}
    <span class="card-badge card-badge--lang">${escapeHtml(langLabel)}</span>
  </div>
  <h2 class="card-title">${escapeHtml(p.title || p.slug)}</h2>
  ${p.subtitle ? `<p class="card-subtitle">${escapeHtml(p.subtitle)}</p>` : ''}
  <p class="card-byline">
    <span class="card-speaker">${escapeHtml(p.speaker || '')}</span>
    ${p.venue ? `<span class="card-divider">·</span><span class="card-venue">${escapeHtml(p.venue)}</span>` : ''}
  </p>
  ${p.description ? `<p class="card-description">${escapeHtml(p.description)}</p>` : ''}
  <span class="card-cta">Abrir presentación →</span>
</a>`;
}

function renderHTML(presentations, todayIso) {
  const cards = presentations.map((p) => renderCard(p, todayIso)).join('\n');
  const upcomingCount = presentations.filter((p) => isUpcoming(p.date, todayIso)).length;
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Presentaciones · PauseAI España</title>
  <meta name="description" content="Charlas y conferencias de PauseAI España. Riesgos de la IA avanzada, política, ética y movimiento por una pausa." />
  <meta property="og:title" content="Presentaciones · PauseAI España" />
  <meta property="og:description" content="Charlas y conferencias de PauseAI España." />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/png" href="./logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Saira+Condensed:wght@500;700;900&family=Roboto+Slab:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <nav class="topbar">
    <a class="brand" href="https://pauseai.es">
      <img src="./logo.png" alt="PauseAI" />
      <span>pauseai.es</span>
    </a>
    <a class="back" href="https://pauseai.es">← Volver a pauseai.es</a>
  </nav>

  <header class="hero">
    <img src="./logo-completo.png" alt="PauseAI España" class="hero-logo" />
    <h1>Presentaciones</h1>
    <p class="hero-subtitle">Charlas y conferencias de <strong>PauseAI España</strong> sobre riesgos de la IA avanzada, ética, política y movimiento por una pausa.</p>
    <p class="hero-count">${presentations.length === 1 ? '1 presentación' : `${presentations.length} presentaciones`}${upcomingCount > 0 ? ` · ${upcomingCount === 1 ? '1 próxima' : `${upcomingCount} próximas`}` : ''}</p>
  </header>

  <main class="container">
    <section class="grid">
      ${cards}
    </section>
  </main>

  <footer class="footer">
    <p><strong>PauseAI España</strong> — Pausemos la IA, sociedad civil por una pausa al desarrollo de IA avanzada.</p>
    <p class="small">
      <a href="https://pauseai.es">pauseai.es</a>
      <span class="divider">·</span>
      <a href="https://pauseai.info">pauseai.info (internacional)</a>
      <span class="divider">·</span>
      <a href="https://github.com/PauseAI">GitHub</a>
    </p>
    <p class="small muted">Construido con <a href="https://sli.dev">Slidev</a> · Actualizado ${formatDate(todayIso, false, 'es')}</p>
  </footer>
</body>
</html>
`;
}

const STYLE_CSS = `:root {
  --pauseai-navy: #0f172a;
  --pauseai-navy-light: #1e293b;
  --pauseai-navy-lighter: #273347;
  --pauseai-orange: #ff9416;
  --pauseai-orange-dim: rgba(255, 148, 22, 0.15);
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 148, 22, 0.4);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--pauseai-navy);
  color: var(--text-primary);
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  line-height: 1.55;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ---------- Topbar ---------- */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  color: var(--text-secondary);
  transition: color 0.15s;
}

.brand:hover {
  color: var(--pauseai-orange);
}

.brand img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
}

.back {
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: color 0.15s;
}

.back:hover {
  color: var(--pauseai-orange);
}

/* ---------- Hero ---------- */
.hero {
  text-align: center;
  padding: 3.5rem 2rem 2.5rem;
  max-width: 760px;
  margin: 0 auto;
}

.hero-logo {
  height: 56px;
  margin-bottom: 1.75rem;
  opacity: 0.95;
}

.hero h1 {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--pauseai-orange);
  margin: 0 0 0.5rem;
  line-height: 1;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin: 0.5rem auto 0;
  max-width: 600px;
}

.hero-subtitle strong {
  color: var(--text-primary);
  font-weight: 600;
}

.hero-count {
  margin-top: 1.25rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

/* ---------- Grid ---------- */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  flex: 1;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

/* ---------- Card ---------- */
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--pauseai-navy-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-2px);
  border-color: var(--border-hover);
  background: var(--pauseai-navy-lighter);
}

.card--upcoming {
  border-color: var(--pauseai-orange);
  box-shadow: 0 0 0 1px var(--pauseai-orange-dim);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
  margin-bottom: 0.75rem;
}

.card-date {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.card-badge {
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.card-badge--upcoming {
  background: var(--pauseai-orange);
  color: var(--pauseai-navy);
}

.card-badge--lang {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-secondary);
  margin-left: auto;
}

.card-title {
  font-family: 'Saira Condensed', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: var(--pauseai-orange);
  margin: 0 0 0.35rem;
  line-height: 1.15;
}

.card-subtitle {
  font-family: 'Roboto Slab', serif;
  font-size: 0.95rem;
  color: var(--text-primary);
  margin: 0 0 0.85rem;
  line-height: 1.4;
}

.card-byline {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin: 0 0 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}

.card-speaker {
  font-weight: 600;
  color: var(--text-primary);
}

.card-divider {
  color: var(--text-muted);
}

.card-venue {
  color: var(--text-secondary);
}

.card-description {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin: 0 0 1rem;
  line-height: 1.5;
  flex: 1;
}

.card-cta {
  font-size: 0.8rem;
  color: var(--pauseai-orange);
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-top: auto;
}

/* ---------- Footer ---------- */
.footer {
  text-align: center;
  padding: 2.5rem 1.5rem 3rem;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.15);
}

.footer p {
  margin: 0.35rem 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.footer .small {
  font-size: 0.78rem;
}

.footer .muted {
  color: var(--text-muted);
  margin-top: 0.85rem;
}

.footer a {
  color: var(--text-primary);
  border-bottom: 1px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.footer a:hover {
  color: var(--pauseai-orange);
  border-bottom-color: var(--pauseai-orange);
}

.footer .divider {
  margin: 0 0.5rem;
  color: var(--text-muted);
}

/* ---------- Responsive ---------- */
@media (max-width: 640px) {
  .topbar {
    padding: 0.75rem 1rem;
  }

  .hero {
    padding: 2.5rem 1rem 1.5rem;
  }

  .hero-logo {
    height: 44px;
  }

  .container {
    padding: 0 1rem 3rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 1.25rem;
  }
}
`;

async function copyLogos() {
  const sources = [
    {
      src: join(PRESENTATIONS_DIR, 'civil-society-aipsrc-2026-05', 'public', 'logos', 'logo.png'),
      dest: join(DIST, 'logo.png'),
    },
    {
      src: join(PRESENTATIONS_DIR, 'civil-society-aipsrc-2026-05', 'public', 'logos', 'banner.png'),
      dest: join(DIST, 'logo-completo.png'),
    },
  ];
  for (const { src, dest } of sources) {
    try {
      await copyFile(src, dest);
    } catch (err) {
      console.warn(`[landing] Could not copy ${src}: ${err.message}`);
    }
  }
}

async function main() {
  await mkdir(DIST, { recursive: true });
  const todayIso = new Date().toISOString().slice(0, 10);
  const presentations = await loadPresentations();
  const html = renderHTML(presentations, todayIso);
  await writeFile(join(DIST, 'index.html'), html, 'utf-8');
  await writeFile(join(DIST, 'style.css'), STYLE_CSS, 'utf-8');
  await copyLogos();
  console.log(
    `[landing] Generated ${presentations.length} card${presentations.length === 1 ? '' : 's'} at ${DIST}`,
  );
}

main().catch((err) => {
  console.error('[landing] Build failed:', err);
  process.exit(1);
});
