import './app.component.css'
import '../../common/styles'

import { Header } from '../header/header.component'

import { BrowserRouter as Router } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
    </Router>
  )
}
