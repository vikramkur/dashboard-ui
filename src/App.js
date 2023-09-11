import './App.css';
import './Master.css'
import MainNav from './Components/Navbar/Nav';
import Sidenav from './Components/Navbar/Sidenav';
import Wraper from './Components/Wraper'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
        <MainNav/>
        <Wraper/>
        {/* <Sidenav/> */}
    </div>
  );
}

export default App;
