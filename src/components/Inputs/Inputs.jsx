import React, { useEffect, useRef, useState } from 'react';
import '../Inputs/Inputs.css';

function Inputs({ additem ,Setedit , mode , Usemode }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [taxas, setTaxas] = useState('');
  const [ads, setAds] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [count, setCount] = useState('');
  const ref = useRef(null);

  const handleClick = () => {
    if (!title || !price){
      alert('The Title or Price is Empty')
    }else{
    const newItem = {
      
      title,
      price: parseFloat(price || 0),
      taxas: parseFloat(taxas || 0),
      ads: parseFloat(ads || 0),
      discount: parseFloat(discount || 0),
      category,
      count: parseInt(count || 0),
    };

    Usemode('Create')

    for (let i = 0 ; i < (newItem.count || 1); i++){
additem(newItem)
    };
    resetInputs();
  };
}

  const resetInputs = () => {
    setTitle('');
    setPrice('');
    setTaxas('');
    setAds('');
    setDiscount('');
    setCategory('');
    setCount('');
  };
console.log(Setedit)
  useEffect (()=>{
    if (Setedit){
      setTitle(Setedit.title);
      setPrice(Setedit.price);
      setTaxas(Setedit.taxas);
      setAds(Setedit.ads);
      setDiscount(Setedit.discount);
      setCategory(Setedit.category);
      setCount(1);
    }
  },[Setedit])

  const total = parseFloat(price || 0) + parseFloat(ads || 0) + parseFloat(taxas || 0) - parseFloat(discount || 0);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.background = total >= 0 ? 'green' : 'red';
    }
  }, [total]); 

  return (
    <div className="main">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="numbers">
        <input
          type="number"
          min={0}
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          min={0}
          placeholder="taxas"
          value={taxas}
          onChange={(e) => setTaxas(e.target.value)}
        />
        <input
          type="number"
          min={0}
          placeholder="ads"
          value={ads}
          onChange={(e) => setAds(e.target.value)}
        />
        <input
          type="number"
          min={0}
          placeholder="discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <small ref={ref}>{total}</small>
      </div>
      <input
        type="number"
        placeholder="count"
        min={0}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <input
        type="text"
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleClick}>{mode}</button>
    </div>
  );
}

export default Inputs;
