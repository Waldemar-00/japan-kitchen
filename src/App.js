import './App.css' 
import Header from './components/Layout/Header'
import Promo from './components/List/Promo'
import   ContextProvider  from './store/ContextProvider'
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header/>
        <Promo/>
      </div>
    </ContextProvider>
  ) 
}

export default App 
