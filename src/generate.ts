import type { ChangelogOptions } from './types';
import { generateMarkdown, generateMarkdownAllCommit } from './markdown';
import { resolveAuthors } from './github';
import { resolveConfig } from './config';
import { parseCommits } from './parse';
import { getGitDiff } from './changelogen/git';
import { getAllGitTag } from './git';

export async function generate(options: ChangelogOptions) {
  const resolved = await resolveConfig(options);

  // Export all
  if (options.all) {
    const md = [];
    const tags = await getAllGitTag();

    tags.unshift(resolved.from as string);

    for (let index = 0; index < tags.length; index++) {
      const tag = tags[index];
      const nextTag = tags[index + 1];

      if (!nextTag) break;

      const rawCommits = await getGitDiff(tag, nextTag);

      const commits = parseCommits(rawCommits, resolved);

      if (resolved.contributors) {
        await resolveAuthors(commits, resolved);
      }

      const link = `[${commits[0].committerDate}](https://github.com/${resolved.github}/compare/${tag}...${nextTag})`

      let sec = `## ${nextTag ? nextTag : tag} - ${link}\n`;

      sec += generateMarkdownAllCommit(commits, {
        ...resolved,
        from: tag,
        to: nextTag || 'HEAD',
      });

      sec += '\n'

      md.push(sec);
    }

    md.reverse();

    return { config: resolved, md: md, commits: [] };
  }

  // Export diff
  const rawCommits = await getGitDiff(resolved.from, resolved.to);
  const commits = parseCommits(rawCommits, resolved);
  if (resolved.contributors) {
    await resolveAuthors(commits, resolved);
  }

  const md = generateMarkdown(commits, resolved);

  return { config: resolved, md: md, commits };
}
