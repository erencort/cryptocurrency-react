import { useState } from 'react/cjs/react.development';
import './App.css';
import { MainContext } from './context';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("")
  const [coinList, setCoinList] = useState([])
  
  const data = {
    search,
    setSearch
  }

  useEffect(() => {
    fetchreq()
  }, [])

  const fetchreq =  async () => {
    const resp = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0&currency=USD")
    console.log(resp.data.coins)
    setCoinList(resp.data.coins)
  }

  const filteredCoinList = coinList.filter(coin =>{
    return coin.id.includes(search.toLowerCase())
  })

  return (
    <MainContext.Provider value={data} >
      <div className='app'>
        <Header />
        {filteredCoinList.map((coins, index) => 
        <InfoCard key={index} name={coins.name} symbol={coins.symbol} icon={coins.icon} price={coins.price} />
        )}
      </div>
    </MainContext.Provider>
  );
}

export default App;
