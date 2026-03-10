---
name: new-release
description: Create a new release entry in the docs app. Provide version number, title, date, and release notes.
---

# New Release

Create a new release MDX file in `docs/src/content/docs/versions/`.

## Arguments

- **version** (required): Version number (e.g. "2.1", "3.0")
- **title** (required): Release title
- **date** (optional): Release date in human-readable format (e.g. "March 10, 2026"). Defaults to today.

## File naming

Replace dots with underscores for the filename: version `2.1` becomes `2_1.mdx`.

## Template

Create the file at `docs/src/content/docs/versions/{filename}.mdx` with this structure:

```mdx
---
title: '{title}'
description: '{description}'
---

**Release date:** {date}

## New Features & Enhancements

- **Feature:** Description.

## Bug Fixes

- Description of fix.
```

## Instructions

1. Ask the user for the release content (features, bug fixes, notes) if not provided.
2. Write engaging, concise release notes following the tone of existing releases.
3. After creating the file, confirm the path and version number.
