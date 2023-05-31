import * as React from 'react';
import showStore from '../stores/showStore';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Show() {
  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    store.fetchData(params.id);
  }, []);

  return (
    <>
      <nav className='cp-nav'>
        <a href="/">Back</a>
      </nav>
      <header className='cp-header'>
        <h2>{store.dataRes.data.name} ({store.dataRes.data.symbol})</h2>
        <p>{store.dataRes.data.description.en}</p>
      </header>

      <section className='cp-chart'>
      <AreaChart
        width={500}
        height={400}
        data={store.graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

      </section>

    </>

  );


}
