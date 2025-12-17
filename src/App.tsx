import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForm';
import UsersList from './components/UsersList';

const App = () => {
  return <div style={{ padding: '20px' }}>
    <h1>React Forms & API Demo</h1>

    <hr />
    <ControlledForm />

    <hr />
    <UnControlledForm />


    <hr />
    <UsersList />
  </div>
}

export default App
