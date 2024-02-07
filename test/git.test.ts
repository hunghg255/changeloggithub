import { expect, test } from 'vitest'
import { generate, parseCommits } from '../src'
import fs from 'fs';
import { cwd } from 'process';

test('parse', async () => {
  // const COMMIT_FROM = '3c41852149e8baae532fe9d1ab2ea9a831d6098b'
  // const COMMIT_TO = 'ec61d0dcb92dd82cc7aecd49c8fbd99e000319e9'
  const md = await fs.readFileSync(require.resolve('./rawcommit.md'), 'utf-8');
const c = md
.split('----\n')
.splice(1)
.map((line) => {
  const [firstLine, ..._body] = line.split('\n');
  const [message, shortHash, authorName, authorEmail] =
    firstLine.split('|');
  const r = {
    message,
    shortHash,
    author: { name: authorName, email: authorEmail },
    body: _body.join('\n'),
  };
  return r;
});


  const commits = parseCommits(c, {
    scopeMap: {},
  types: {
    core: { title: '🔥 Core' },
    feat: { title: '🚀 Features' },
    fix: { title: '🐛 Fixes' },
    perf: { title: '🏎 Performance' },
    refactor: { title: '🔨 Refactor' },
    revert: { title: '⏪ Reverts' },
    i18n: { title: '🌐 I18n' },
    a11y: { title: '♿️ Accessibility' },
    report: { title: '📊 Report' },
    cli: { title: '🖥 CLI' },
    audits: { title: '🔍 Audits' },
    misc: { title: '🎫 Misc' },
    wip: { title: '🚧 WIP' },
    docs: { title: '📖 Documentation' },
    build: { title: '📦 Build' },
    types: { title: '🏷 Types' },
    chore: { title: '🏡 Chores' },
    examples: { title: '📚 Examples' },
    test: { title: '🧪 Tests' },
    dx: { title: '🛠 DX' },
    style: { title: '💄 Style' },
    ci: { title: '🤖 CI' },
    workflow: { title: '🔧 Workflow' },
    release: { title: '🚢 Release' },
    deps: { title: '📦 Dependencies' },
    improve: { title: '👌 Improvements' },
    security: { title: '🔒 Security' },
    deprecated: { title: '🗑 Deprecated' }
  },
  titles: {
    breakingChanges: '💥 Breaking Changes'
  },
  contributors: true,
  capitalize: true,
  group: true,
  });


  // const { config, md } = await generate({
  //   from: COMMIT_FROM,
  //   to: COMMIT_TO,
  // })

  // expect(config).toMatchInlineSnapshot(`
  //   {
  //     "capitalize": true,
  //     "contributors": true,
  //     "from": "3c41852149e8baae532fe9d1ab2ea9a831d6098b",
  //     "github": "shikijs/shiki",
  //     "group": true,
  //     "prerelease": false,
  //     "scopeMap": {},
  //     "titles": {
  //       "breakingChanges": "🚨 Breaking Changes",
  //     },
  //     "to": "ec61d0dcb92dd82cc7aecd49c8fbd99e000319e9",
  //     types: {
  //       core: { title: '🔥 Core' },
  //       feat: { title: '🚀 Features' },
  //       fix: { title: '🐛 Fixes' },
  //       perf: { title: '🏎 Performance' },
  //       refactor: { title: '🔨 Refactor' },
  //       revert: { title: '⏪ Reverts' },
  //       i18n: { title: '🌐 I18n' },
  //       a11y: { title: '♿️ Accessibility' },
  //       report: { title: '📊 Report' },
  //       cli: { title: '🖥 CLI' },
  //       audits: { title: '🔍 Audits' },
  //       misc: { title: '🎫 Misc' },
  //       wip: { title: '🚧 WIP' },
  //       docs: { title: '📖 Documentation' },
  //       build: { title: '📦 Build' },
  //       types: { title: '🏷 Types' },
  //       chore: { title: '🏡 Chores' },
  //       examples: { title: '📚 Examples' },
  //       test: { title: '🧪 Tests' },
  //       dx: { title: '🛠 DX' },
  //       style: { title: '💄 Style' },
  //       ci: { title: '🤖 CI' },
  //       workflow: { title: '🔧 Workflow' },
  //       release: { title: '🚢 Release' },
  //       deps: { title: '📦 Dependencies' },
  //       improve: { title: '👌 Improvements' },
  //       security: { title: '🔒 Security' },
  //       deprecated: { title: '🗑 Deprecated' }
  //     },
  //   }
  // `)
  // expect(md.replace(/&nbsp;/g, ' ').replace(/[ ]+/g, ' ')).toMatchInlineSnapshot(`
  //   "### Breaking Changes

  //   - **cli**: Rename \`groupByScope\` to \`group\` - by **Enzo Innocenzi** in https://github.com/hunghg255/changeloggithub/issues/22 [<samp>(89282)</samp>](https://github.com/hunghg255/changeloggithub/commit/8928229)

  //   ### Features

  //   - Inline contributors - by **Anthony Fu** [<samp>(e4044)</samp>](https://github.com/hunghg255/changeloggithub/commit/e404493)
  //   - Throw on shallow repo - by **Anthony Fu** [<samp>(f1c1f)</samp>](https://github.com/hunghg255/changeloggithub/commit/f1c1fad)
  //   - Improve how references are displayed - by **Enzo Innocenzi** in https://github.com/hunghg255/changeloggithub/issues/19 [<samp>(cdf8f)</samp>](https://github.com/hunghg255/changeloggithub/commit/cdf8fe5)
  //   - Support \`--no-emoji\` - by **Enzo Innocenzi** in https://github.com/hunghg255/changeloggithub/issues/20 [<samp>(e94ba)</samp>](https://github.com/hunghg255/changeloggithub/commit/e94ba4a)
  //   - **contributors**:
  //    - Improve author list - by **Enzo Innocenzi** in https://github.com/hunghg255/changeloggithub/issues/18 [<samp>(8d8d9)</samp>](https://github.com/hunghg255/changeloggithub/commit/8d8d914)
  //   - **style**:
  //    - Group scopes only when one of the scope have multiple commits - by **Anthony Fu** [<samp>(312f7)</samp>](https://github.com/hunghg255/changeloggithub/commit/312f796)
  //    - Use \`<sup>\` for author info - by **Anthony Fu** [<samp>(b51c0)</samp>](https://github.com/hunghg255/changeloggithub/commit/b51c075)
  //    - Limit sha to 5 letters and make monospace - by **Anthony Fu** [<samp>(b07ad)</samp>](https://github.com/hunghg255/changeloggithub/commit/b07ade8)

  //   ### Bug Fixes

  //   - Use \`creatordate\` to sort tags - by **Frost Ming** in https://github.com/hunghg255/changeloggithub/issues/17 [<samp>(5666d)</samp>](https://github.com/hunghg255/changeloggithub/commit/5666d8d)
  //   - Config defaults - by **Anthony Fu** [<samp>(9232f)</samp>](https://github.com/hunghg255/changeloggithub/commit/9232fdf)
  //   - Use \`replace\` instead of \`replaceAll\` for Node 14 - by **Anthony Fu** [<samp>(5154e)</samp>](https://github.com/hunghg255/changeloggithub/commit/5154e78)
  //   - **cli**: Add missing \`--group\` option - by **Enzo Innocenzi** in https://github.com/hunghg255/changeloggithub/issues/21 [<samp>(22800)</samp>](https://github.com/hunghg255/changeloggithub/commit/228001d)
  //   - **style**: Revert \`<sup>\` style - by **Anthony Fu** [<samp>(742ae)</samp>](https://github.com/hunghg255/changeloggithub/commit/742ae0b)

  //   ##### [View changes on GitHub](https://github.com/hunghg255/changeloggithub/compare/19cf4f84f16f1a8e1e7032bbef550c382938649d...49b0222e8d60b7f299941def7511cee0460a8149)"
  // `)
})
