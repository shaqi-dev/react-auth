import MainLayout from './components/MainLayout';
import AuthForm from './components/AuthForm';
import './App.css';

const App = () => (
  <div className="App">
    <MainLayout>
      <AuthForm />
    </MainLayout>
  </div>
);

export default App;
