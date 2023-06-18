import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Homepage from './components/Homepage';
import RepoDetails from './components/RepoDetails';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home/' element={<Homepage />} />
          <Route
            path='/repodetails/:account'
            element={
              <ProtectedRoute>
                <RepoDetails />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
