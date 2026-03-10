---
name: new-release
description: Create a new release entry in the versions app. Provide version number, title, date, and release notes.
---

# New Release

Create a new release markdown file in `versions/src/content/releases/`.

## Arguments

- **version** (required): Version number (e.g. "2.1", "3.0")
- **title** (required): Release title
- **date** (optional): Release date in YYYY-MM-DD format. Defaults to today.

## File naming

Replace dots with underscores for the filename: version `2.1` becomes `2_1.md`.

## Template

Create the file at `versions/src/content/releases/{filename}.md` with this structure:

```markdown
---
title: '{title}'
date: '{date}'
versionNumber: '{version}'
description: '{description}'
image:
  src: 'https://xer-assets.juanrcifuentes.com/versions/starlog-placeholder-1.jpg'
  alt: 'Release image.'
---

## {heading}

![Release image](https://xer-assets.juanrcifuentes.com/versions/starlog-placeholder-1.jpg)

{intro paragraph}

### New Features & Enhancements

- **Feature:** Description.

### Bug Fixes

- Description of fix.
```

## Instructions

1. Ask the user for the release content (features, bug fixes, notes) if not provided.
2. Use the image placeholder URL as shown above unless the user provides a specific image.
3. Write engaging, concise release notes following the tone of existing releases.
4. After creating the file, confirm the path and version number.