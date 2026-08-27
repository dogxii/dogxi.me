#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';

const indexUrl = new URL('../index.html', import.meta.url);
const html = await readFile(indexUrl, 'utf8');

const repoSlugs = [...new Set([...html.matchAll(/data-repo="([^"]+)"/g)].map((match) => match[1]))];

if (repoSlugs.length === 0) {
  console.log('No homepage repo stats found.');
  process.exit(0);
}

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'dogxi-homepage-sync',
};

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (token) {
  headers.Authorization = `Bearer ${token}`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function formatStarLabel(count) {
  return count === 1 ? '1 star' : `${count} stars`;
}

async function fetchRepoStats(repoSlug) {
  const response = await fetch(`https://api.github.com/repos/${repoSlug}`, { headers });

  if (!response.ok) {
    throw new Error(`${repoSlug}: ${response.status} ${response.statusText}`);
  }

  const repo = await response.json();
  return {
    repoSlug,
    stars: Number.isFinite(repo.stargazers_count) ? repo.stargazers_count : 0,
  };
}

const results = await Promise.allSettled(repoSlugs.map(fetchRepoStats));
const failures = [];
const statsByRepo = new Map();

for (const result of results) {
  if (result.status === 'fulfilled') {
    statsByRepo.set(result.value.repoSlug, result.value.stars);
    continue;
  }

  failures.push(result.reason instanceof Error ? result.reason.message : String(result.reason));
}

if (failures.length > 0) {
  console.error('Failed to refresh homepage stats:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

let nextHtml = html;

for (const [repoSlug, stars] of statsByRepo) {
  const starLabel = formatStarLabel(stars);
  const pattern = new RegExp(
    `(<span class="project-stars" data-repo="${escapeRegExp(repoSlug)}" aria-label=")[^"]+(">)([^<]*)(</span>)`
  );
  const replacement = `$1${starLabel}$2${stars}$4`;

  if (!pattern.test(nextHtml)) {
    throw new Error(`Missing project star span for ${repoSlug}`);
  }

  nextHtml = nextHtml.replace(pattern, replacement);
}

if (nextHtml !== html) {
  await writeFile(indexUrl, nextHtml);
  console.log(`Updated ${statsByRepo.size} homepage repo stat${statsByRepo.size === 1 ? '' : 's'}.`);
} else {
  console.log('Homepage repo stats are already current.');
}
