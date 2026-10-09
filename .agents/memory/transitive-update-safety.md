---
name: Transitive update safety
description: A pnpm update pitfall when fixing indirect dependency vulnerabilities.
---

A successful targeted pnpm update with a dependency depth does not prove an indirect dependency was updated. It can leave the intended package unchanged while refreshing unrelated workspace override and peer resolutions.

**Why:** This occurred while investigating a publishing security blocker; the command succeeded but changed unrelated tooling rather than the vulnerable package.

**How to apply:** Confirm the actual resolved dependency tree and inspect the lockfile diff before declaring a vulnerability fixed. Keep unrelated updates out of a targeted fix, and retain the workspace's minimum-release-age policy when a newer parent package is too recent.
