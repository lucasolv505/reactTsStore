import Footer from "@/components/Footer"
import Topo from "@/components/Topo"
import { useCart } from "@/Context/CartContext"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useState } from "react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { cover, name, price, discount, avaliable, genre, id, desc } = query

  if (!name) {
    return {
      notFound: true
    }
  }

  const parsedDiscount = discount ? Number(discount) : 0
  const parsedPrice = price ? Number(price) : 0
  const parsedGenre = genre || null

  return {
    props: { cover, name, price: parsedPrice, discount: parsedDiscount, avaliable, genre: parsedGenre, id, desc }
  }
}


function ProductPage({ cover, name, price, discount, avaliable, genre, id, desc }: any) {
  const [quantities, setQuantities] = useState(1)
  const { addToCart, openCart } = useCart()

  function addOne() {
    if (quantities < 20) {
      setQuantities(prevState => prevState + 1)
    } else {
      return
    }
  }

  function removeOne() {
    if (quantities > 1) {
      setQuantities(prevState => prevState - 1)
    } else {
      return
    }
  }

  function handleAddToCart() {
    const productToAdd = {
      id,
      name,
      price,
      discount,
      cover,
      desc,
      avaliable,
      quantity: quantities
    }
    addToCart(productToAdd)
    openCart()
  }

  return (
    <div>
      <Topo />

      <div className="items-center justify-center flex">
        <div className="flex flex-col justify-center mt-10 bg-[#ffffff57] rounded-xl px-20 py-12 w-[50%]">
          <div className="mb-10">
            <Link className="btnDefault w-[40px]" href={'/products/ProductsPage'}>←
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="mr-10">
              {cover ? <img className="w-64 border-4 border-[var(--lightestColor)]" src={cover.toString()} alt={`${cover} cover`} /> : 'where is the cover?'}
            </div>

            <div>
              <h1 className="mb-2 font-bold text-2xl">{name}</h1>
              <p>{genre && genre}</p>
              <p>US${Number(price).toFixed(2)}</p>
              <p>{Number(discount) > 0 && `Save up to U$${Number(discount)}`}</p>
              <p>{avaliable ? 'In Stock' : 'Out of Stock'}</p>


              <div className="flex gap-2 items-center justify-start">
                <h2>Quantity</h2>
                <button className="flex bg-[var(--grayISH)] p-1 rounded border-2 text-[#0F1C25] h-[21px] w-[21px] overflow-hidden justify-center items-center text-center pb-[7px]" onClick={removeOne}>-</button>
                {quantities}
                <button className="flex bg-[var(--grayISH)] p-1 rounded border-2 text-[#0F1C25] h-[21px] w-[21px] overflow-hidden justify-center items-center text-center pb-[8px]" onClick={addOne} >+</button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-[100%]">
            <button className="btnDefault w-[100%] m-9 flex items-center justify-center" onClick={handleAddToCart} >ADD TO 🛒</button>
            {desc}
          </div>


        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductPage