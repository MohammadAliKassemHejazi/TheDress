import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/layouts/Home'
import Dashboard from "./components/layouts/Dashboard";
import NoMatch from "./components/layouts/NoMatch";
import ProtectedRoute from './components/utils/ProtectedRoute'
import Login from './components/layouts/Login';
import { Fragment, useContext } from 'react';
import Notification from './components/UI/notification';
import NotificationContext from './store/notification-context';

function App() {
     const notificationCtx = useContext(NotificationContext);
     const activeNotification = notificationCtx.notification; 
  return (
    <Fragment>
      <Router>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </nav>
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/Dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        ></Notification>
      )}
    </Fragment>
  );
}

export default App;
