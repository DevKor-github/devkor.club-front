import { css } from '@styled-stytem/css'

const Spinner = () => {
  return (
    <div
      className={css({
        display: 'flex',
        alignSelf: 'center',
        width: '24px',
        height: '24px',
        border: '2.5px solid #FFC011',
        borderTop: '2.5px solid #FF9900',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out'
      })}
    />
  )
}

export default Spinner
