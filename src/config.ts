import {
  getCurrentGitBranch,
  getFirstGitCommit,
  getGitHubRepo,
  getLastGitTag,
  isPrerelease,
} from './git';
import type { ChangelogOptions, ResolvedChangelogOptions } from './types';

export function defineConfig(config: ChangelogOptions) {
  return config;
}

const defaultConfig: ChangelogOptions = {
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
    deprecated: { title: '🗑 Deprecated' },
    other: { title: '🧹 Other' },
  },
  titles: {
    breakingChanges: '💥 Breaking Changes'
  },
  contributors: true,
  capitalize: true,
  group: true,
};

export async function resolveConfig(options: ChangelogOptions) {
  const { loadConfig } = await import('c12');
  const config = await loadConfig<ChangelogOptions>({
    name: 'changeloggithub',
    defaults: defaultConfig,
    overrides: options,
  }).then((r) => r.config || defaultConfig);

  config.from = config.from || (await getLastGitTag());
  config.to = config.to || (await getCurrentGitBranch());
  config.github = config.github || (await getGitHubRepo());
  config.prerelease = config.prerelease ?? isPrerelease(config.to);

  if (config.to === config.from)
    config.from = (await getLastGitTag(-1)) || (await getFirstGitCommit());

  if (config.all) {
    config.from = await getFirstGitCommit();
  }

  return config as ResolvedChangelogOptions;
}
