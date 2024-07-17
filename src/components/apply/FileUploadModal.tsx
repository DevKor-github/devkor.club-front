import { css } from '@styled-stytem/css'
import { ChangeEvent, useState } from 'react'

import { fetchPresignedUrl, uploadImageToS3 } from '@/api/recruit'
import UploadIcon from '@/assets/UploadIcon.svg'

interface FileUploadModalProps {
  onChangeFile: (fileName: string, originalFileName: string) => void
  handleClose: () => void
}
const FileUploadModal = ({ onChangeFile, handleClose }: FileUploadModalProps) => {
  const [dragOver, setDragOver] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  // 드래그 중인 요소가 목표 지점 진입할때
  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(true)
  }

  // 드래그 중인 요소가 목표 지점을 벗어날때
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
  }

  // 드래그 중인 요소가 목표 지점에 위치할때
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  // 드래그 중인 요소가 목표 지점에서 드롭될때
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)

    // 드래그되는 데이터 정보와 메서드를 제공하는 dataTransfer 객체 사용
    if (e.dataTransfer) {
      setFile(e.dataTransfer.files[0])
    }
  }

  // Drag & Drop이 아닌 클릭 이벤트로 업로드되는 기능도 추가
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null)
    // input 요소의 값 초기화
    e.target.value = ''
  }

  const handleUpload = async () => {
    if (!file) {
      handleClose()
      return
    }
    const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.pdf` // file name 생성
    try {
      // TODO: 진행중 스피너, 모달 등 추가
      const presignedUrl = await fetchPresignedUrl(fileName)
      await uploadImageToS3(presignedUrl, file)
      onChangeFile(fileName, file.name)
      handleClose()
    } catch (error) {
      // alert
      alert('포트폴리오 업로드에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <>
      <button
        className={css({
          display: 'flex',
          pos: 'fixed',
          top: 0,
          left: 0,
          w: 'full',
          h: 'full',
          zIndex: 0
        })}
        onClick={handleClose}
      />
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          maxW: 540,
          rounded: 4,
          py: '30px',
          px: 12,
          bgColor: 'white',
          boxShadow: ' 0px 6px 8px 0px rgba(0, 0, 0, 0.05)',
          zIndex: 100,
          backfaceVisibility: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          pos: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        })}
      >
        <div className={css({ display: 'flex', px: 2.5, alignItems: 'flex-start' })}>
          <h1 className={css({ fontSize: 22, fontWeight: 700 })}>Upload</h1>
        </div>
        <label
          className={css({
            display: 'flex',
            flexDir: 'column',
            w: 'full',
            bgColor: '#FFFDF2',
            border: '1px dashed rgba(183, 170, 56, 0.30)',
            rounded: 4,
            justifyContent: 'center',
            alignItems: 'center',
            py: 30,
            px: 31,
            mt: 30
          })}
          htmlFor="fileUpload"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{ borderColor: dragOver ? 'primary.70' : 'rgba(183, 170, 56, 0.30)' }}
        >
          <img src={UploadIcon} alt="upload" />
          <div className={css({ display: 'flex', p: '5px', alignItems: 'flex-start', fontSize: 16, fontWeight: 700 })}>
            <p>
              Drag & drop files or{' '}
              <span className={css({ textDecoration: 'underline', color: 'primary.70' })}>Browse</span>
            </p>
          </div>
          <div
            className={css({
              display: 'flex',
              p: '5px',
              alignItems: 'flex-start',
              fontSize: 12,
              fontWeight: 400,
              color: '#676767'
            })}
          >
            <p>Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
          </div>
          <input id="fileUpload" type="file" hidden onChange={handleChange} />
        </label>
        <div
          className={css({
            display: 'flex',
            alignSelf: 'stretch',
            mt: 5,
            fontSize: 14,
            fontWeight: 700,
            color: '#676767',
            gap: 2.5,
            flexDir: 'column'
          })}
        >
          <div
            className={css({
              display: 'flex',
              rounded: 4,
              border: '0.5px solid #E3E3E3',
              bgColor: 'white',
              px: 2.5,
              py: 2
            })}
          >
            {file ? file.name : 'your-file-here.PDF'}
          </div>
        </div>
        <button
          className={css({
            display: 'flex',
            h: 45,
            px: '14px',
            py: '9px',
            justifyContent: 'center',
            alignItems: 'center',
            rounded: 4,
            opacity: 0.6,
            bgColor: 'primary.70',
            alignSelf: 'stretch',
            color: 'white',
            mt: 47,
            cursor: 'pointer'
          })}
          onClick={handleUpload}
        >
          UPLOAD FILES
        </button>
      </div>
    </>
  )
}

export default FileUploadModal
