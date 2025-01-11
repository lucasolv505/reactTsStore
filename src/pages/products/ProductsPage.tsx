import Footer from "@/components/Footer";
import Topo from "@/components/Topo";
import { useTheme } from "@/Context/ThemeContext";
import Link from "next/link";
import { useState } from "react";



const products = [
  {
    cover: '/productsImg/headset.jpg',
    name: 'Headset',
    price: 78.99,
    discount: 0,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/mb.jpg',
    name: 'Motherboard',
    price: 100.00,
    discount: 0,
    avaliable: false,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/cellphone.jpg',
    name: 'Small Cellphone',
    price: 29.90,
    discount: 10,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/cooler.jpg',
    name: 'Cooler',
    price: 56.99,
    discount: 0,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/mouse.jpg',
    name: 'Mouse',
    price: 559000.849,
    discount: 10,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/monitor.jpg',
    name: 'Monitor',
    price: 490.90,
    discount: 0,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/cpu.jpg',
    name: 'CPU',
    price: 990.90,
    discount: 15.58,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/keyboard.jpg',
    name: 'Keyboard',
    price: 90.90,
    discount: 0,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/gpu.jpg',
    name: 'GPU',
    price: 2000.90,
    discount: 15.58,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/chair.jpg',
    name: 'Gaming Chair',
    price: 220.90,
    discount: 5.50,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/mic.jpg',
    name: 'Gamer Microphone',
    price: 150.90,
    discount: 25.50,
    avaliable: true,
    desc: 'WE CAN ADD MORE RGBA LIGHTS CAUSE ITS CLEARLY NOT ENOUGH Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    cover: '/productsImg/table.jpg',
    name: 'Gaming Table',
    price: 422.90,
    discount: 87.50,
    avaliable: true,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
]

function ProductsPage() {
  const { theme } = useTheme()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  function addToQtd(productName: string) {
    setQuantities((prevQuantities) => {
      const currentQty = prevQuantities[productName] || 0
      if (currentQty >= 20) {
        return prevQuantities
      }

      return {
        ...prevQuantities,
        [productName]: currentQty + 1
      }
    })
  }

  function removeToQtd(productName: string) {
    setQuantities((prevQuantities) => {
      const currentQty = prevQuantities[productName] || 0
      if (currentQty === 0) return prevQuantities

      return {
        ...prevQuantities, [productName]: currentQty - 1
      }
    })
  }

  return (
    <div>

      <Topo />

      <div className="flex flex-wrap justify-center p-3">

        {products.map((product) => (
          <div key={product.name} className="productContainer flex flex-col justify-center m-4 p-3"
            style={{
              color: `var(--${theme === 'dark' ? 'lightestColor' : 'bluedark'})`,
              backgroundColor: `var(--${theme === 'dark' ? 'bluedark' : 'lightestColor'})`,
              border: `3px solid var(--${theme === 'dark' ? 'lightestColor' : 'bluedark'})`
            }}>

            <Link className="pInfos flex justify-center p-4 gap-5" href={{
              pathname: `/product/${product.name.toLowerCase()}`,
              query: { cover: product.cover, name: product.name, price: product.price, discount: product.discount, avaliable: product.avaliable, desc: product.desc }
            }}
            >
              <img className="w-40" src={product.cover} alt={`${product.name} picture`} />

              <div className="flex flex-col">
                <div className="font-bold text-2xl">{product.name}</div>
                <div>US${product.price.toFixed(2)}</div>
                <div>{product.discount > 0 && `Save U$${product.discount}`}</div>
                <div>{product.avaliable ? 'In Stock' : 'Out'}</div>
                <button className="btnDefault w-[100%]">BUY</button>
              </div>
            </Link>
          </div>
        ))}

      </div>

      <Footer />
    </div>
  )
}

export default ProductsPage