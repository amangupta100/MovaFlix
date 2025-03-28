import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import {Demo} from './pages/Demo'

export const App = () => {
  return (
    <div className=''>
    <Navbar/>
    <Home/>
    <Features/>
    <Demo/>
    </div>
  )
}
