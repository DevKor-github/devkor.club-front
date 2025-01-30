import { defineConfig } from '@pandacss/dev'

import { accordionRecipe, buttonRecipe, textareaRecipe, screenWrapperRecipe } from './src/lib/recipe/index'
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
        button: buttonRecipe,
        screenWrapper: screenWrapperRecipe,
        textarea: textareaRecipe
      },
      slotRecipes: {
        accordion: accordionRecipe
      },
      tokens: {
        fonts: {
          pretendard: { value: 'var(--font-pretendard), sans-serif' },
          montserrat: { value: 'var(--font-montserrat), sans-serif' }
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
      },
      breakpoints: {
        XL: '2560px',
        L: '1440px',
        M: '1024px',
        S: '768px',
        XS: '375px'
      }
    },
    keyframes: {
      'accordion-down': {
        from: { height: '-10' },
        to: { height: 'var(--radix-accordion-content-height)' }
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' }
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
