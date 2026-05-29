import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

const conflict_rules = {
   // @NOTE Disable this to lose colon spacing on type
   // '@stylistic/key-spacing': ['error', { 'align': 'colon' }],

   // @NOTE Disable this to get align colon
   '@stylistic/type-annotation-spacing': ['error', { 'after': true }],
}

export default defineConfig(
   eslint.configs.recommended,
   ...tseslint.configs.recommended,
   {
      rules: conflict_rules,
      files: ['**/*.ts', '**/*.js'],
      plugins: { '@stylistic': stylistic },
      ignores: ['node_modules/'],
   }
)