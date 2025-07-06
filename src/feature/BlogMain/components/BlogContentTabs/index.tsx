import { css } from '@styled-stytem/css'
import { HStack } from '@styled-stytem/jsx'
import { motion } from 'framer-motion'
import { useQueryState } from 'nuqs'

const tabs = ['전체', 'FE', 'BE', 'PD', 'PM']

const BlogContentTabs = () => {
  const [currentTab, setCurrentTab] = useQueryState('tab', {
    defaultValue: '전체'
  })

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab)
  }

  return (
    <HStack w="full" borderBottom="1px solid" borderColor="label.90" px={2}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={css({
            display: 'flex',
            pos: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            w: 49,
            py: { S: '14px', SDown: 4 },
            color: currentTab === tab ? 'label.50' : 'label.70',
            _hover: { color: 'label.50' },
            transition: 'color 0.3s ease-in-out',
            cursor: 'pointer'
          })}
        >
          <p className={css({ fontSize: { S: 16, SDown: 13 }, fontWeight: 500, lineHeight: '100%' })}>{tab}</p>
          {currentTab === tab && (
            <motion.span
              layoutId="underline"
              className={css({
                pos: 'absolute',
                bottom: '-1px',
                left: 0,
                w: 'full',
                h: '2px',
                bg: 'label.50'
              })}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </HStack>
  )
}

export default BlogContentTabs
