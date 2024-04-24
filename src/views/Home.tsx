import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import LoginButton from '../components/LoginButton'

const msg = import.meta.env.VITE_MSG

const Home: React.FunctionComponent = () => {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo vite' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{msg}</p>
      <LoginButton />
    </>
  )
}

export default Home
