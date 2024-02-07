🤖: update grammars|c73fec6d|Pine Wu|octref@gmail.com

M       packages/shiki/languages/fsharp.tmLanguage.json
M       packages/shiki/languages/java.tmLanguage.json
M       packages/shiki/languages/julia.tmLanguage.json
M       packages/shiki/languages/latex.tmLanguage.json
M       packages/shiki/languages/lua.tmLanguage.json
M       packages/shiki/languages/markdown.tmLanguage.json
M       packages/shiki/languages/sql.tmLanguage.json
M       packages/shiki/languages/swift.tmLanguage.json
M       packages/shiki/languages/tex.tmLanguage.json
----
chore: release v0.8.7|7987565a|Anthony Fu|anthonyfu117@hotmail.com


M       package.json
M       packages/markdown-it-shikiji/package.json
M       packages/rehype-shikiji/package.json
M       packages/shikiji-compat/package.json
M       packages/shikiji-transformers/package.json
M       packages/shikiji-twoslash/package.json
M       packages/shikiji/package.json
----
chore: improve style|a4f45333|Anthony Fu|anthonyfu117@hotmail.com


M       packages/shikiji-twoslash/style-rich.css
----
fix(markdown-it): prepend builtin transformers, close #40|e653ea95|Anthony Fu|anthonyfu117@hotmail.com


M       packages/markdown-it-shikiji/src/index.ts
M       packages/shikiji-twoslash/test/markdown-it.test.ts
A       packages/shikiji-twoslash/test/out/markdown-it/highlight-lines.html
----
chore: release v0.8.6|2fb3954d|Anthony Fu|anthonyfu117@hotmail.com


M       package.json
M       packages/markdown-it-shikiji/package.json
M       packages/rehype-shikiji/package.json
M       packages/shikiji-compat/package.json
M       packages/shikiji-transformers/package.json
M       packages/shikiji-twoslash/package.json
M       packages/shikiji/package.json
----
chore: update|abaa5491|Anthony Fu|anthonyfu117@hotmail.com


M       packages/shikiji-compat/test/types.test.ts
----
fix(compat): do not re-export enum|2ed1771f|Anthony Fu|anthonyfu117@hotmail.com


M       packages/shikiji-compat/src/index.ts
----
feat: adjust css|724ad1e4|Anthony Fu|anthonyfu117@hotmail.com


M       packages/shikiji-twoslash/style-rich.css
----
chore: release v0.8.5|5b1b416f|Anthony Fu|anthonyfu117@hotmail.com


M       package.json
M       packages/markdown-it-shikiji/package.json
M       packages/rehype-shikiji/package.json
M       packages/shikiji-compat/package.json
M       packages/shikiji-transformers/package.json
M       packages/shikiji-twoslash/package.json
M       packages/shikiji/package.json
----
docs(twoslash): mention about `explicitTrigger` option|44cc7b8a|Anthony Fu|anthonyfu117@hotmail.com


M       packages/shikiji-twoslash/README.md
----
fix(twoslash): fix popover offset calculation|5c8fc77f|Anthony Fu|anthonyfu117@hotmail.com


M       packages/shikiji-twoslash/src/index.ts
M       packages/shikiji-twoslash/src/renderer-classic.ts
M       packages/shikiji-twoslash/src/renderer-rich.ts
M       packages/shikiji-twoslash/style-rich.css
M       packages/shikiji-twoslash/test/out/classic/cuts_out_unnecessary_code.html
M       packages/shikiji-twoslash/test/out/markdown-it/works.html
D       packages/shikiji-twoslash/test/out/rich/basic.html
M       packages/shikiji-twoslash/test/out/rich/rich.html
----
chore: release v0.8.4|f6c81274|Anthony Fu|anthonyfu117@hotmail.com


M       package.json
M       packages/markdown-it-shikiji/package.json
M       packages/rehype-shikiji/package.json
M       packages/shikiji-compat/package.json
M       packages/shikiji-transformers/package.json
M       packages/shikiji-twoslash/package.json
M       packages/shikiji/package.json
----
chore: lint|3b0f29c0|Anthony Fu|anthonyfu117@hotmail.com


M       packages/markdown-it-shikiji/src/index.ts
----
feat(twoslash): support passing explicit trigger in markdown-it and rehype integration|66661fe6|Anthony Fu|anthonyfu117@hotmail.com


M       package.json
M       packages/markdown-it-shikiji/src/index.ts
M       packages/rehype-shikiji/src/index.ts
M       packages/shikiji-twoslash/src/index.ts
M       packages/shikiji-twoslash/src/renderer-rich.ts
M       packages/shikiji-twoslash/src/types.ts
R082    packages/shikiji-twoslash/test/cases.test.ts    packages/shikiji-twoslash/test/classic.test.ts
A       packages/shikiji-twoslash/test/markdown-it.test.ts
R093    packages/shikiji-twoslash/test/out/compiler_errors.html packages/shikiji-twoslash/test/out/classic/compiler_errors.html
R091    packages/shikiji-twoslash/test/out/completions.html     packages/shikiji-twoslash/test/out/classic/completions.html
R086    packages/shikiji-twoslash/test/out/console_log.html     packages/shikiji-twoslash/test/out/classic/console_log.html
R098    packages/shikiji-twoslash/test/out/cuts_out_unnecessary_code.html       packages/shikiji-twoslash/test/out/classic/cuts_out_unnecessary_code.html
R089    packages/shikiji-twoslash/test/out/simple.html  packages/shikiji-twoslash/test/out/classic/simple.html
A       packages/shikiji-twoslash/test/out/markdown-it/works.html
R100    packages/shikiji-twoslash/test/out/rich.html    packages/shikiji-twoslash/test/out/rich/basic.html
A       packages/shikiji-twoslash/test/out/rich/rich.html
M       packages/shikiji-twoslash/test/rich.test.ts
M       packages/shikiji/src/core/renderer-hast.ts
M       packages/shikiji/src/types.ts
M       pnpm-lock.yaml
M       tsconfig.json
M       vitest.config.ts
----
