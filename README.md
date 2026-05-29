# Reproduction Code for ESLint

> [!NOTE]
> Conflict between `@stylistic/key-spacing` and `@stylistic/type-annotation-spacing`

## Problems

Enabling both `key-spacing` (aligning colons) and `type-annotation-spacing`
causes ESLint to throw a circular fixes warning and fail to resolve formatting.

```log
2026-05-29 69:69:69.404 [error] (node:3269630) ESLintCircularFixesWarning: Circular fixes detected while fixing /home/user/eslint-warehouse/src/fail.ts. It is likely that you have conflicting rules in your configuration.
```

## Bookmarks

- [Applied for issue#]()

- [ESLint](https://eslint.org)
- [ESLint: Repository](https://github.com/eslint/eslint)
- [ESLint Stylistic](https://eslint.style)
- [ESLint Stylistic: Repository](https://github.com/eslint-stylistic/eslint-stylistic)
