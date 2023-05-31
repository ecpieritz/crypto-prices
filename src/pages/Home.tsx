import * as React from 'react';
import homeStore from '../stores/homeStore';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
    const store : any = homeStore()
    React.useEffect(()=>{
        store.fetchCoins()
    },[])
  return (
    <div>
      Home
    </div>
  );
}
