import * as React from 'react';
import homeStore from '../stores/homeStore';
import { Link } from 'react-router-dom';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
  const store: any = homeStore()
  React.useEffect(() => {
    store.fetchCoins()
  }, [])
  return (
    <div>
      <input type="text" value={store.query} onChange={store.setQuery} />
      {store.coins.map((coin: any) => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>
              {coin.name}
            </Link>
          </div>
        )
      })}
    </div>
  );
}
