import * as RadixAccordion from '@radix-ui/react-accordion'
import { css, cx, type RecipeVariantProps } from '@styled-stytem/css'
import { accordion as accordionRecipe } from '@styled-stytem/recipes'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { forwardRef, useEffect, useRef, useState } from 'react'

type AccordionProps = Parameters<typeof RadixAccordion.Root>[0] & {
  children: React.ReactNode
}

const accordion = accordionRecipe()

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({ className, ...props }, ref) => {
  return <RadixAccordion.Root ref={ref} className={cx(accordion.root, className)} {...props} />
})

const AccordionItem = forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => {
  return <RadixAccordion.Item ref={ref} className={cx(accordion.item, className)} {...props} />
})

type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> &
  RecipeVariantProps<typeof accordionRecipe> & {
    triggerIcon?: React.ReactNode
    triggerIconPosition?: 'left' | 'right'
  }

const AccordionTrigger = forwardRef<React.ElementRef<typeof RadixAccordion.Trigger>, AccordionTriggerProps>(
  ({ className, triggerIcon: Icon, triggerIconPosition = 'left', children, ...props }, ref) => {
    const triggerRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState<'open' | 'closed'>(
      triggerRef.current?.getAttribute('data-state') === 'open' ? 'open' : 'closed'
    )

    useEffect(() => {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
            const newState = triggerRef.current?.getAttribute('data-state')
            setIsOpen(newState === 'open' ? 'open' : 'closed')
          }
        })
      })

      if (triggerRef.current) {
        observer.observe(triggerRef.current, { attributes: true })
      }

      return () => observer.disconnect()
    }, [])

    const triggerIcon = Icon ?? (
      <div className={css({ position: 'relative', w: '24px', h: '24px' })}>
        <AnimatePresence initial={false} mode="wait">
          {isOpen === 'open' ? (
            <motion.div
              key="minus"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className={css({ position: 'absolute', inset: 0 })}
            >
              <MinusIcon
                className={css({
                  color: 'secondary.70',
                  S: { w: 6, h: 6 },
                  XS: { w: 5, h: 5 },
                  XSDown: { w: 5, h: 5 }
                })}
                strokeWidth={3}
              />
            </motion.div>
          ) : (
            <motion.div
              key="plus"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className={css({ position: 'absolute', inset: 0 })}
            >
              <PlusIcon
                className={css({
                  color: 'secondary.70',
                  S: { w: 6, h: 6 },
                  XS: { w: 5, h: 5 },
                  XSDown: { w: 5, h: 5 }
                })}
                strokeWidth={3}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
    return (
      <RadixAccordion.Header className={css({ display: 'flex' })}>
        <RadixAccordion.Trigger
          ref={ref ?? triggerRef}
          className={cx(accordion.trigger, className)}
          {...props}
          onClick={e => {
            props.onClick?.(e)
            setIsOpen(triggerRef.current?.getAttribute('data-state') === 'open' ? 'closed' : 'open')
          }}
        >
          {triggerIconPosition === 'left' && triggerIcon}
          {children}
          {triggerIconPosition === 'right' && triggerIcon}
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
    )
  }
)

const AccordionContent = forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <RadixAccordion.Content ref={ref} className={cx(accordion.content, className)} {...props}>
      <div
        className={css({ display: 'flex', alignItems: 'flex-start', gap: 2.5, pb: { M: 4, XS: 3, XSDown: 3 }, pt: 0 })}
      >
        <div
          className={css({
            S: { w: '3px', h: '28px' },
            XS: { w: '2px', h: '20px' },
            XSDown: { w: '2px', h: '20px' },
            borderRadius: '1.5px',
            background: 'secondary.70/30',
            flexShrink: 0
          })}
        />
        {children}
      </div>
    </RadixAccordion.Content>
  )
})

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
