import { notNullish } from '@antfu/utils'
import type { ChangelogenOptions } from './types'
import { GitCommit, RawGitCommit, parseGitCommit } from './changelogen/git'

export function parseCommits(commits: RawGitCommit[], config: ChangelogenOptions): GitCommit[] {
  return commits.map(commit => parseGitCommit(commit, config)).filter(notNullish)
}
