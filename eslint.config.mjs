// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // 这里禁用 @typescript-eslint/no-non-null-asserted-optional-chain 规则
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      indent: [
        2,
        2,
        {
          SwitchCase: 1
        }
      ],
      quotes: [1, 'single'],
      'no-plusplus': ['error'],
      'no-console': 'off',
      'no-param-reassign': 'off',
      'no-shadow': 'off', //
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': 'off',
      'no-unused-expressions': 'off',
      'no-case-declarations': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true
        }
      ],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'consistent-return': 'off',
      'new-cap': 'off',
      'guard-for-in': 'off',
      'class-methods-use-this': 'off',
      camelcase: 'off',
      eqeqeq: ['error'],
      'prefer-arrow-callback': ['error'],
      'object-shorthand': ['error'],
      'max-params': [0, 3]
    }
  }
)
