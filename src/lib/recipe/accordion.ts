import { defineSlotRecipe } from '@pandacss/dev'

export const accordionRecipe = defineSlotRecipe({
  className: 'accordion',
  description: 'Accordion component',
  slots: ['root', 'item', 'trigger', 'content'],
  base: {
    root: {
      display: 'flex',
      w: 'full',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignSelf: 'stretch'
    },
    item: {
      display: 'flex',
      w: 'full',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignSelf: 'stretch',
      borderBottom: '1.5px solid rgba(255, 153, 0, 0.10)',
      overflow: 'visible'
    },
    trigger: {
      display: 'flex',
      w: 'full',
      alignItems: 'center',
      gap: 5,
      alignSelf: 'stretch',
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '150%',
      color: 'label.50',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      paddingBottom: { M: 5, XS: 4, XSDown: 4 }
    },
    content: {
      display: 'flex',
      overflow: 'hidden',
      w: 'full',
      S: { pl: '4.375rem' },
      XS: { pl: '1rem' },
      XSDown: { pl: '1rem' },
      alignItems: 'center',
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '150%',
      color: 'label.50/80',
      willChange: 'height',
      '&[data-state=open]': {
        animation: 'accordion-down'
      },
      '&[data-state=closed]': {
        animation: 'accordion-up'
      }
    }
  }
})
