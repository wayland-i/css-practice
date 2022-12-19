import './App.css';
import Dashboard from './Dashboard';
import NewsFeed from './NewsFeed';
import WhatsHappening from './WhatsHappening';
import { useState } from 'react';

function App() {

  const [tweets, setTweets] = useState([]);

  return (
    <div className='all'>
      <Dashboard/>
      <div className='main'>
        <WhatsHappening  setTweets={setTweets} tweets={tweets}/>
        <NewsFeed tweets={tweets}/>
      </div>
    </div>
  );
}

export default App;
