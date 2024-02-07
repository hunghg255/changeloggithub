<p align="center">
<a href="https://www.npmjs.com/package/changeloggithub" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/bi:tags.svg?color=%23f9ec5d" alt="logo" width='100'/></a>
</p>

<p align="center">
  A script to generate changelog from github releases
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/changeloggithub" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/changeloggithub.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/changeloggithub" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/changeloggithub.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=changeloggithub" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/changeloggithub" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/changeloggithub/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/changeloggithub/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/changeloggithub" alt="License" /></a>
</p>

Generate changelog for GitHub releases from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), 
- Forked from [changelogithub](https://github.com/antfu/changelogithub)
- Forked from [changelogen](https://github.com/unjs/changelogen)

## Features

- Support exclamation mark as breaking change, e.g. `chore!: drop node v10`
- Grouped scope in changelog
- Create the release note, or update the existing one
- List contributors
- Support `--dry` mode to preview the changelog
- Support `--all` mode to write to a file
- Support `--from` and `--to` mode to write to a file between two tags

## Usage

In GitHub Actions:
- combined with [bumpp](https://npmjs.com/package/bumpp)
  
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

## Write to a file between two tags


```bash
npx changeloggithub@latest --from v1.0.0 --to v2.0.0 --output changelog-v2.0.0.md
```
