import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchAllProducts } from './Sanity/productServices'

function App() {
  const [products, setProducts] = useState([])


const getAllProcucts = async()=>{
  const data = await fetchAllProducts();
  setProducts(data);
}

console.log[products];

useEffect(() => {
  getAllProcucts();
}, []);

  return (
    <main>
      <h1>Min nettbutikk!</h1>
      {products?.map(product => 
      <article key={product.id}>
        <h3>{product.productname}</h3>
        <img src={product.image.asset.url}/>
      </article>

      )}
    </main>
  )
}

export default App
