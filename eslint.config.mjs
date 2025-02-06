import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    {
        ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**', 'public/**'],
    },
    ...compat.extends(
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ),
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            // 네이밍 규칙
            'react/jsx-pascal-case': 'error',
            camelcase: ['error', { properties: 'never' }],
            'react/jsx-handler-names': [
                'error',
                {
                    eventHandlerPrefix: 'handle',
                    eventHandlerPropPrefix: 'on',
                },
            ],
            // 변수명 길이 제한
            'id-length': [
                'error',
                {
                    min: 2,
                    exceptions: ['x', 'y', 'i', 'j', 'id', '_'],
                },
            ],
            // 특정 약어 사용 금지
            'id-denylist': ['error', 'err', 'idx', 'e'],

            // TypeScript 네이밍 컨벤션
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['camelCase'],
                },
                {
                    selector: 'variable',
                    types: ['function'],
                    format: ['camelCase'],
                    suffix: ['Ref'],
                    filter: {
                        regex: 'Ref$',
                        match: true,
                    },
                },
                // {
                //     selector: 'interface',
                //     format: ['PascalCase'],
                //     custom: {
                //         regex: '(Props|Model)$',
                //         match: true,
                //     },
                // },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase'],
                    suffix: ['Type'],
                },
            ],

            // React 컴포넌트 규칙
            'react/destructuring-assignment': ['error', 'always'],
            'react/function-component-definition': [
                2,
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
            'react/jsx-key': ['error', { checkFragmentShorthand: true }],

            // Import 순서
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],

            // JavaScript 기본 규칙
            'prefer-const': 'error',
            'no-var': 'error',
            eqeqeq: 'error',
            'object-shorthand': 'error',
            // 'no-console': ['warn', { allow: ['warn', 'error'] }],

            // TypeScript 규칙
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

            // React Hooks 규칙
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-hooks/rules-of-hooks': 'off',
        },
    },
]

export default eslintConfig
