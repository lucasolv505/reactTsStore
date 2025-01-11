import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Topo from "@/components/Topo";
import { useTheme } from "@/Context/ThemeContext";
import Link from "next/link";

const products = [
  {
    name: 'Headset',
    price: 78.99,
    discount: 0,
    avaliable: false,
    cover: '/productsImg/headset.jpg',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Mousepad',
    price: 29.90,
    discount: 10,
    avaliable: true,
    cover: '/productsImg/mousepad.jpg',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Cooler',
    price: 56.99,
    discount: 0,
    avaliable: true,
    cover: '/productsImg/cooler.jpg',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  {
    name: 'Motherboard',
    price: 100.00,
    discount: 0,
    avaliable: true,
    cover: '/productsImg/mb.jpg',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
]

function calcDiscPercent(price: number, discount: number): string {
  return 'US$'+(price - ((discount / 100) * price)).toFixed(2)
}

function calcDiscTotal(price: number, discount: number): string {
  return 'US$'+(price - discount).toFixed(2)
}


export default function Home() {
  const {theme} = useTheme()

  return (
    <main className="main">
      <Topo />

      <div className="p-8">
        <div className="discountSection flex justify-center gap-3">

          <Card product={'Mouse'} price={49.90} discount={10} myFunction={calcDiscPercent} />

          <Card product={'Keyboard'} price={99.90} />

          <Card product={'Monitor'} price={490.90} />

          <Card product={'CPU'} price={990.90} discount={15.58} myFunction={calcDiscTotal} />

          <Card product={'GPU'} price={2000.90} discount={100} myFunction={calcDiscTotal} />
        </div>


        <h2 className="text-center mt-10 font-bold text-4xl overflow-y-hidden" style={{color: `var(--${theme === 'dark'? 'lightestColor': 'bluedark'})`}}>Featured</h2>

        <div className="featuredSection flex justify-center gap-3 mt-2 p-5">
          {products.map((product) => (
            product.avaliable === true &&

            <div className={`featured ${theme==='dark'&& 'dark'}`} key={product.name}>
              
              <div><h1 className="text-2xl font-bold mb-3" style={{color: `var(--${theme === 'dark'?'lightestColor': 'bluedark'})`}}>{product.name}</h1></div>
              
              <Link 
              className="flex justify-center p-4 gap-5" 
              href={{
              pathname: `/product/${product.name.toLowerCase()}`,
              query: { cover: product.cover, name: product.name, price: product.price, discount: product.discount, avaliable: product.avaliable, desc: product.desc }
              }}>
              <img className="w-80 border-4 border-[var(--darkblue)] hover:border-[var(--bluesky)]" src={product.cover} alt={`${product.name} picture`} />
              </Link>
              
              <div style={{color: `var(--${theme === 'dark'?'lightestColor': 'bluedark'})`}}>US${product.price.toFixed(2)}</div>
              
              <div style={{color: `var(--${theme === 'dark'?'lightestColor': 'bluedark'})`}}>{product.discount > 0 ? `Save U$${product.discount}` : ''}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </main>
  )


}
