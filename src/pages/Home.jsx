import * as React from 'react';
import homeStore from '../stores/homeStore';
import { Link } from 'react-router-dom';


export default function Home() {
  const store = homeStore()
  React.useEffect(() => {
    store.fetchCoins()
  }, [])
  return (
    <>
      <header className='cp-header'>
        <h1>Crypto Prices</h1>
      </header>

      <main>
        <section className='cp-input'>
          <h3>Which cryptocurrency are you looking for?</h3>
          <input type="text" value={store.query} onChange={store.setQuery} />
        </section>
        
        <section className='cp-top'>
          <h3>Here are the top 7 coins:</h3>
          {store.coins.map(coin => {
            return (
              <div className='cp-top__item' key={coin.id}>
                <Link to={`/${coin.id}`}>
                  {coin.name}
                </Link>
              </div>
            )
          })}
        </section>

      </main>
    </>
  );
}
