import { Logo } from './assets/Logo';
import './styles/main.css';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center pt-20 gap-20'>
      <Logo />
      <div>
        <h1 className='text-[64px] font-black text-primary-white'>{`Seu`} <span className='bg-gradient bg-clip-text text-transparent'>{`duo`}</span> {`está aqui.`}</h1>
      </div>
    </div>
  )
}

export default App
