import { css } from '@styled-stytem/css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useQueryState } from 'nuqs'

import { HStack } from '@/components/ui/hstack'

type Props = {
  totalPage: number
}

const BlogPagination = ({ totalPage }: Props) => {
  const [page, setPage] = useQueryState('page', {
    defaultValue: 1,
    parse: value => Number(value)
  })

  const handlePage = (page: number) => {
    setPage(page, { shallow: true, scroll: true })
  }

  const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1)

  const renderPageNumber = () => {
    if (totalPage <= 5) {
      return pageNumbers.map(number => (
        <PageButton key={number} handlePage={handlePage} page={number} isActive={page === number} />
      ))
    }

    return (
      <>
        {pageNumbers.slice(0, 5).map(number => (
          <PageButton key={number} handlePage={handlePage} page={number} isActive={page === number} />
        ))}
        <li>
          <button>...</button>
        </li>
        <PageButton handlePage={handlePage} page={totalPage} isActive={page === totalPage} />
      </>
    )
  }
  return (
    <HStack as="nav" gap="45px" alignItems="center">
      <button
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          w: 8,
          h: 8,
          borderRadius: '50%',
          border: '1px solid #AFB8C1',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#E9ECEF'
          },
          transition: 'background-color 0.3s ease'
        })}
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        <ArrowLeft size={24} color="#AFB8C1" />
      </button>
      <HStack as="ul" gap="18px">
        {renderPageNumber()}
      </HStack>
      <button
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          w: 8,
          h: 8,
          borderRadius: '50%',
          border: '1px solid #AFB8C1',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#E9ECEF'
          },
          transition: 'background-color 0.3s ease'
        })}
        disabled={page === totalPage}
        onClick={() => handlePage(page + 1)}
      >
        <ArrowRight size={24} color="#AFB8C1" />
      </button>
    </HStack>
  )
}

export default BlogPagination

const PageButton = ({
  handlePage,
  page,
  isActive
}: {
  handlePage: (page: number) => void
  page: number
  isActive: boolean
}) => {
  return (
    <li>
      <button
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          w: 8,
          h: 8,
          borderRadius: '50%',
          backgroundColor: isActive ? '#D1D5DB' : '#D1D5DB66',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#D1D5DB'
          },
          transition: 'background-color 0.3s ease'
        })}
        onClick={() => handlePage(page)}
      >
        {page}
      </button>
    </li>
  )
}
