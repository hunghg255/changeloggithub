# changeloggithub

[![NPM version](https://img.shields.io/npm/v/changeloggithub?color=a1b858&label=)](https://www.npmjs.com/package/changeloggithub)

Generate changelog for GitHub releases from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), powered by [changelogen](https://github.com/unjs/changelogen).


## Features

- Support exclamation mark as breaking change, e.g. `chore!: drop node v10`
- Grouped scope in changelog
- Create the release note, or update the existing one
- List contributors

## Usage

In GitHub Actions:

```yml
# .github/workflows/release.yml

name: Release

permissions:
  contents: write

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v3
        with:
          node-version: 18.x

      - run: npx changeloggithub@latest
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

It will be trigged whenever you push a tag to GitHub that starts with `v`.

## Preview Locally

```bash
npx changeloggithub@latest --dry
```

## Write to a file


```bash
npx changeloggithub@latest --all true
```
