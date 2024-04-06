import Button from '@/components/Button.tsx'

function App() {
  const handleClick = (varint: string) => {
    alert(varint)
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#242424',
        gap: 10
      }}
    >
      <Button variant="primary" onClick={() => handleClick('primary')}>
        Primary
      </Button>
      <Button variant="secondary" onClick={() => handleClick('secondary')}>
        Secondary
      </Button>
    </div>
  )
}

export default App
