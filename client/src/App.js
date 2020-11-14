import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Router } from '@reach/router';
import Index from './views/Index';
import NewPet from './views/NewPet';
import OnePet from './views/Details';
import UpdatePet from './views/Update';



function App() {
  return (
    <div className="jumbotron">
      <Router>
        <Index path="/"/>
        <NewPet path="/pets/new" />
        <OnePet path="/pets/:_id" />
        <UpdatePet path="/pets/:_id/edit" />
      </Router>
    </div>
  );
}

export default App;
