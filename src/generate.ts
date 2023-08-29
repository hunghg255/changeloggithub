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
      let tagS = tags[index];
      let nextTagS = tags[index + 1];

      if (!nextTagS) break;
      tagS = tagS.replace(/\"/g, '');
      nextTagS = nextTagS.replace(/\"/g, '');

      const tag = tagS.split(' ')[0];
      const nextTag = nextTagS.split(' ')[0];
      const dateCreated = nextTagS.split(' ')[1];

      const rawCommits = await getGitDiff(tag, nextTag);

      const commits = parseCommits(rawCommits, resolved);

      if (resolved.contributors) {
        await resolveAuthors(commits, resolved);
      }

      const link = `[${nextTag ? nextTag : tag}](https://github.com/${resolved.github}/compare/${tag}...${nextTag})`;

      let sec = `## ${link} - ${dateCreated}\n`;

      sec += generateMarkdownAllCommit(commits, {
        ...resolved,
        from: tag,
        to: nextTag || 'HEAD',
      });

      sec += '\n';

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
