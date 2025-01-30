import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        base: '{colors.gray.50}',
        _dark: '#09090b'
      }
    },
    foreground: {
      value: {
        base: '{colors.gray.950}',
        _dark: '{colors.gray.50}'
      }
    },
    muted: {
      DEFAULT: {
        value: {
          base: '{colors.gray.100}',
          _dark: 'rgba(39,39,42)'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.500}',
          _dark: 'rgb(161,161,169)'
        }
      }
    },
    card: {
      DEFAULT: {
        value: {
          base: '{colors.gray.50}',
          _dark: '#09090b'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.950}',
          _dark: '{colors.gray.50}'
        }
      }
    },
    popover: {
      DEFAULT: {
        value: {
          base: '{colors.gray.50}',
          _dark: '#09090b'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.950}',
          _dark: '{colors.gray.50}'
        }
      }
    },
    border: {
      value: {
        base: '{colors.gray.200}',
        _dark: 'rgba(39,39,42)'
      }
    },
    input: {
      value: {
        base: '{colors.gray.200}',
        _dark: 'rgba(39,39,42)'
      }
    },
    primary: {
      DEFAULT: {
        value: {
          base: '#09090b',
          _dark: '{colors.gray.50}'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.gray.900}'
        }
      },
      70: {
        value: {
          base: '#FFC513'
        }
      }
    },
    secondary: {
      DEFAULT: {
        value: {
          base: 'rgba(244,244,245)',
          _dark: 'rgba(39,39,42)'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.900}',
          _dark: '{colors.gray.50}'
        }
      },
      70: {
        value: {
          base: '#FF9900'
        }
      }
    },
    accent: {
      DEFAULT: {
        value: {
          base: '{colors.gray.100}',
          _dark: 'rgba(39,39,42)'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.900}',
          _dark: '{colors.gray.50}'
        }
      }
    },
    destructive: {
      DEFAULT: {
        value: {
          base: '{colors.red.500}',
          _dark: '{colors.red.700}'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.red.50}'
        }
      }
    },
    ring: {
      value: {
        base: '{colors.gray.400}',
        _dark: '{colors.gray.300}'
      }
    },
    warning: {
      DEFAULT: {
        value: {
          base: '#DB867F'
        }
      }
    },

    label: {
      50: {
        value: {
          base: '#505156'
        }
      },
      70: {
        value: {
          base: '#8A8A8D',
          _dark: '#8A8A8D'
        }
      },
      80: {
        value: {
          base: '#C1C1C1',
          _dark: '#C1C1C1'
        }
      },
      90: {
        value: {
          base: '#DFDFDF'
        }
      },
      98: {
        value: {
          base: '#F0F0F1',
          _dark: '#F0F0F1'
        }
      },
      100: {
        value: {
          base: '#FFFFFF'
        }
      },
      BG: {
        value: {
          base: '#F7F7F7'
        }
      }
    }
  },
  borders: {
    base: { value: '1px solid {colors.border}' },
    input: { value: '1px solid {colors.input}' },
    primary: { value: '1px solid {colors.primary}' },
    destructive: { value: '1px solid {colors.destructive}' }
  },
  //   radii: {
  //     xl: { value: `calc({radii.radius} + 4px)` },
  //     lg: { value: `{radii.radius}` },
  //     md: { value: `calc({radii.radius} - 2px)` },
  //     sm: { value: 'calc({radii.radius} - 4px)' }
  //   },
  animations: {
    slideDownAndFade: { value: 'slideDownAndFade 0.2s ease-out' },
    'accordion-down': { value: 'accordion-down 0.2s ease-out' },
    'accordion-up': { value: 'accordion-up 0.2s ease-out' }
  }
})
