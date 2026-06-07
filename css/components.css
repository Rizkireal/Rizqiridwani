/* ── SECTION LABEL ── */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.4rem;
  font-family: 'DM Mono', monospace;
}

.section-label::after {
  content: '';
  display: block;
  height: 1px;
  width: 36px;
  background: linear-gradient(to right, var(--accent), transparent);
}

/* ── ABOUT CARD ── */
.about-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.about-card::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(124,110,245,0.07) 0%, transparent 70%);
  pointer-events: none;
}

.about-card p {
  font-size: 0.9rem;
  line-height: 1.9;
  color: #bbbbd0;
  margin-bottom: 1rem;
  font-weight: 300;
}

.about-card p:last-child { margin-bottom: 0; }
.about-card strong { color: var(--text); font-weight: 600; }

/* ── QUOTE CARD ── */
.quote-card {
  background: linear-gradient(135deg, var(--bg2) 0%, rgba(124,110,245,0.05) 100%);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: 0 12px 12px 0;
  padding: 1.4rem 1.8rem 1.4rem 2rem;
  position: relative;
}

.quote-mark {
  font-size: 4rem;
  color: var(--accent);
  opacity: 0.15;
  font-family: Georgia, serif;
  line-height: 1;
  position: absolute;
  top: 0.4rem; left: 1.4rem;
}

.quote-text {
  font-family: 'DM Mono', monospace;
  font-size: 0.85rem;
  font-style: italic;
  color: var(--text);
  line-height: 1.7;
  padding-top: 0.8rem;
}

.quote-author {
  font-size: 0.75rem;
  color: var(--muted);
  margin-top: 0.6rem;
  font-family: 'DM Mono', monospace;
}

/* ── EXPERIENCE ── */
.exp-list { display: flex; flex-direction: column; gap: 1rem; }

.exp-item {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.4rem 1.6rem 1.4rem 2.2rem;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}

.exp-item::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--accent), var(--accent2));
  opacity: 0;
  transition: opacity 0.25s;
}

.exp-item:hover { border-color: var(--border2); }
.exp-item:hover::before { opacity: 1; }

.exp-dot {
  position: absolute;
  left: 1rem; top: 1.5rem;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

.exp-title { font-size: 0.97rem; font-weight: 700; margin-bottom: 0.3rem; }
.exp-period {
  font-size: 0.72rem;
  color: var(--accent3);
  font-family: 'DM Mono', monospace;
  margin-bottom: 0.4rem;
}
.exp-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.65; margin-bottom: 0.8rem; }

/* ── TAGS ── */
.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag {
  padding: 0.2rem 0.6rem;
  background: var(--tag-bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--muted);
  font-family: 'DM Mono', monospace;
}

/* ── PROJECT SECTION ── */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.2rem;
}

.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  transition: all 0.25s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(62,207,207,0.04), transparent);
  opacity: 0;
  transition: opacity 0.25s;
}

.project-card:hover { border-color: var(--border2); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
.project-card:hover::before { opacity: 1; }

.project-icon {
  width: 36px; height: 36px;
  border-radius: 8px;
  background: rgba(62,207,207,0.1);
  border: 1px solid rgba(62,207,207,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.project-title { font-size: 0.97rem; font-weight: 700; }
.project-desc { font-size: 0.81rem; color: var(--muted); line-height: 1.65; flex: 1; }

.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  background: transparent;
  border: 1px solid var(--border2);
  border-radius: 6px;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  font-family: 'DM Mono', monospace;
  transition: all 0.2s;
  text-decoration: none;
  width: fit-content;
}

.project-btn:hover {
  border-color: var(--accent3);
  color: var(--accent3);
  background: rgba(62,207,207,0.06);
}

/* ── CONTACT ── */
.contact-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.2s;
  text-decoration: none;
  color: var(--text);
}

.contact-row:hover {
  border-color: var(--border2);
  transform: translateX(4px);
}

.contact-icon {
  width: 36px; height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-label { font-size: 0.75rem; color: var(--muted); font-family: 'DM Mono', monospace; }
.contact-value { font-size: 0.88rem; font-weight: 600; }

/* ── RESPONSIVE GRIDS ── */
@media (max-width: 820px) {
  .project-grid { grid-template-columns: 1fr; }
}
