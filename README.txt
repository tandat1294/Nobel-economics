NOBEL ECONOMICS — STRUCTURED PROTOTYPE v0.4

Project structure
-----------------
index.html
assets/
  site.css        Shared visual system and page components
  site.js         Shared theme, Deep Dive, timeline, read-time, progress, TOC logic
  medal.png       Prototype medal visual
cases/
  1981.html       James Tobin case
  1983.html       Gérard Debreu case
  1990.html       Markowitz · Miller · Sharpe case

Why this refactor matters
-------------------------
- Case pages no longer duplicate CSS or JavaScript.
- Theme colors, typography, Deep Dive behavior, TOC logic, and read-time logic
  are edited once and inherited everywhere.
- Read time is calculated from Story Mode prose and excludes expandable Deep Dive
  evidence, so the estimate stays meaningful.
- New Nobel cases can be created by duplicating the HTML content structure only,
  without duplicating the site's visual/behavioral code.


v0.5 stress-test
----------------
- 1983 reuses the same shared CSS/JS and core reading components as 1981.
- Mathematics-heavy content is handled through Story Mode + formula + step-flow +
  expandable proof intuition; no Debreu-specific stylesheet was introduced.
- Homepage timeline now exposes a contextual “Read YEAR case” CTA for completed cases.
- 1981 links directly to 1983.


v0.6 multi-laureate stress test
-------------------------------
- 1990 uses the exact same shared CSS/JS architecture as 1981 and 1983.
- Narrative architecture: Markowitz → Sharpe → Miller = Investor → Market → Firm.
- No 1990-specific stylesheet or JavaScript was introduced.
- Homepage timeline now links to all three completed stress-test cases.
- 1983 now links forward to 1990.

Architecture checkpoint
-----------------------
The project has now stress-tested:
1) 1981 — single laureate, finance/macroeconomics;
2) 1983 — mathematics-heavy, proof-intuition case;
3) 1990 — three laureates, multiple linked theories.

If visual/reading review passes, this is the planned checkpoint to begin public deployment.
