import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
<link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"></link>

function App() {

  return (
    <main>
      <RouterProvider router={ router } />
    </main>
  )
}

export default App;

