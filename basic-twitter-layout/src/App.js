import './App.css';
import Dashboard from './Dashboard';
import NewsFeed from './NewsFeed';
import WhatsHappening from './WhatsHappening';

function App() {
  return (
    <div className='all'>
      <Dashboard/>
      <div className='main'>
        <WhatsHappening />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
