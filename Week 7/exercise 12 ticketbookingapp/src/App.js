import React, { useState } from 'react';


function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function UserGreeting(props) {
  return (
    <div>
      <h1>Welcome back</h1>
      <LogoutButton onClick={props.onLogout} />
    </div>
  );
}

function GuestGreeting(props) {
  return (
    <div>
      <h1>Welcome Guest</h1>
      <h2>Please sign up.</h2>
      <LoginButton onClick={props.onLogin} />
    </div>
  );
}

function Greeting({ isLoggedIn, onLogin, onLogout }) {
  return isLoggedIn
    ? <UserGreeting onLogout={onLogout} />
    : <GuestGreeting onLogin={onLogin} />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </div>
  );
}

export default App;
