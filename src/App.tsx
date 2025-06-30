import { Route, Switch } from 'wouter'
import Portfolio from './components/Portfolio'
import NotFound from './components/NotFound'

function App() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App