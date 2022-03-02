import { Home } from "./pages/Home";
import './App.scss'

//CONTEXT
import { UnsplashImageProvider } from './context/UnsplashImageContext';


function App() {

  return (
    <div className="App">
      <UnsplashImageProvider>
        <Home />
      </UnsplashImageProvider>
    </div>
  );
}

export default App;
