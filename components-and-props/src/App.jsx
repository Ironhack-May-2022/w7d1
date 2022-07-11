import './App.css'
import Profile from './Profile'


function App() {

  const user = {
    name: 'Rick Sanchez',
    email: 'rick@c-137.com',
    picture: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Profile data={user} />
      </header>
    </div>
  )
}

export default App
