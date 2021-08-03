import './app.component.css'
import '../../common/styles'

import { Header } from '../header/header.component'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AboutPage } from '../../pages/about/about.page'
import { HomePage } from '../../pages/home/home.page'

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}
