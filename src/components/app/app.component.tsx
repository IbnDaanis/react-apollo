import './app.component.css'
import '../../common/styles'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from '../header/header.component'
import { AboutPage } from '../../pages/about/about.page'
import { HomePage } from '../../pages/home/home.page'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../common/apollo-client'

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}
