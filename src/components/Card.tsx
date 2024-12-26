interface CardPropsWithDiscount{
  product: string,
  price:number,
  discount:number,
  myFunction:(price:number, discount:number)=> string | number
}

interface CardsPropsWithoutDiscount{
  product:string,
  price:number,
  discount?:never,
  myFunction?:never,
}

type CardProps = CardPropsWithDiscount | CardsPropsWithoutDiscount

function Card({product,price,discount,myFunction}:CardProps) {

  return (
    <div className={`flex flex-col border-4 ${discount ? 'border-blue-700' : 'border-red-700' } rounded-sm p-5 min-w-[20%] justify-center items-center bg-[#EDEDED]`} >

        <div>{product}</div>

        <div>{discount ? myFunction(price, discount) : 'US$'+(price? price.toFixed(2): '00')}</div>

        <div className="bg-red-700 text-sm">{discount && (myFunction.name === 'calcDiscPercent' ? `${discount}% OFF`: `Save U$${discount}`)}</div>
        
    </div>
  )
}

export default Card

//teste → condição verdadeira → condição false 