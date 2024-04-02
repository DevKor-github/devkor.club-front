module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', '@typescript-eslint', 'jsx-a11y', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/extensions': ['error', 'ignorePackages'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: "import React from 'react' makes bundle size larger."
          }
        ]
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: 'next',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: 'react',
            group: 'builtin'
          },
          {
            pattern: '@tanstack/**',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@/libs/**',
            group: 'unknown'
          },
          {
            pattern: '@/core/**',
            group: 'unknown'
          },
          {
            pattern: '@/store/**',
            group: 'unknown'
          },
          {
            pattern: '**/*.css.ts',
            group: 'unknown',
            position: 'after'
          }
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}
