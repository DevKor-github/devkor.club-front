import { defineConfig } from '@pandacss/dev'

import { buttonRecipe } from './src/lib/recipe/index'
import { semanticTokens } from './src/lib/semantic-tokens'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe
      },
      tokens: {
        fonts: {
          pretendard: { value: 'var(--font-pretendard), sans-serif' }
        }
      },
      textStyles: {
        heading3_M: {
          value: {
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 'normal'
          }
        }
      }
    },
    semanticTokens
  },
  globalCss: {
    body: {
      fontFamily: 'pretendard'
    }
  },
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system'
})
