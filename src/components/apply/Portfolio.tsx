import { css } from '@styled-stytem/css'
import { motion } from 'framer-motion'
import { CircleX, FileText, Upload } from 'lucide-react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { useParams } from 'react-router-dom'

import FileUploadModal from '@/components/apply/FileUploadModal'
import Button from '@/components/ui/button'

interface PortfolioProps {
  file: File | null
  handleFileSelect: (file: File | null) => void
  handleDeleteFile: () => void
}
const Portfolio = ({ file, handleFileSelect, handleDeleteFile }: PortfolioProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [deleteFile, setDeleteFile] = useState(false)
  const handleCloseModal = useCallback(() => setIsOpen(false), [])

  const { track } = useParams()
  return (
    <>
      <div
        className={css({
          display: 'flex',
          px: 5,
          gap: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'stretch',
          whiteSpace: 'pre-wrap',
          color: 'label.80',
          fontSize: 16,
          fontWeight: 600
        })}
      >
        {track === 'DE' ? '포트폴리오를 첨부해주세요!' : ' 포트폴리오가 있다면 첨부해주세요! '}
        <p className={css({ fontSize: 12, fontWeight: 400 })}>500mb 이하의 파일만 업로드 가능합니다.</p>
        <div className={css({ w: 1.5, h: 1.5, rounded: 'full', bgColor: 'secondary.70' })} />
      </div>
      <div className={css({ display: 'flex', gap: 2.5 })}>
        <Button variant="icon" type="button" size="icon" onClick={() => setIsOpen(true)}>
          파일 추가
          <Upload className={css({ w: 5, h: 5 })} />
        </Button>
        {file && (
          <div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 })}>
            <Button variant="iconActive" size="icon" type="button" onClick={() => setDeleteFile(f => !f)}>
              <FileText className={css({ w: 5, h: 5 })} />
              {file?.name}
            </Button>
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={deleteFile ? { x: 0, opacity: 1 } : undefined}
              type="button"
              className={css({ cursor: 'pointer' })}
              onClick={handleDeleteFile}
            >
              <CircleX className={css({ color: 'label.80' })} />
            </motion.button>
          </div>
        )}
      </div>
      {createPortal(
        isOpen && (
          <FileUploadModal onChangeFile={handleFileSelect} description={file?.name} handleClose={handleCloseModal} />
        ),
        document.body
      )}
    </>
  )
}

export default Portfolio
