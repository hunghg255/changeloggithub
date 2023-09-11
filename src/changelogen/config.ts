
export interface ChangelogConfig {
  cwd: any
  types: Record<string, { title: string; semver?: any }>
  scopeMap: Record<string, string>
  github: string
  from: string
  to: string
  newVersion?: string
  output: string | boolean
}
