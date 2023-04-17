import React from 'react';

const ListingUI = () => {
  const items = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' },
    { id: 4, title: 'Item 4', description: 'Description for Item 4' },
    { id: 5, title: 'Item 5', description: 'Description for Items 5' }
  ];

  return (
    <div className="container">
      <h1>Listing UI</h1>
      <div className="list">
        {items.map(item => (
          <div className="item" key={item.id}>
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingUI;
