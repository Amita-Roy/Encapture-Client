import React from 'react';
// import jumbotronBg from 'assets/images/jumbotron-bg.jpeg';

const Jumbotron = () => (
  <div className="bg-jumbotron bg-cover bg-center relative" style={{ height: '700px' }}>
    <div className="content absolute w-full flex items-center justify-center h-full bg-black bg-opacity-50">
      <div>
        <h1 className="text-white text-6xl leading-relaxed">
          Award-Winning beauty salon
          {' '}
          <br />
          {' '}
          in Stockholm
        </h1>
        <button type="button" className="uppercase bg-white px-6 pt-3 pb-2 text-sm">book now</button>
      </div>
    </div>
  </div>
);

export default Jumbotron;