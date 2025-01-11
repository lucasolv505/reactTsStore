import { useTheme } from "@/Context/ThemeContext"
import Link from "next/link"
import CartComponent from "./Cart"
import { useCart } from "@/Context/CartContext"

function Topo() {
    const { cartOpen, openCart } = useCart()
    const {theme, toggleTheme} = useTheme()
    const myConst = 'Const Tech'
    let myLet = 'Store'

    const testcss = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'var(--bluedark)',
      backgroundColor: 'var(--bluesky)',
      fontSize: '20px',
      gap: '20px'
    }

    function showLogo() {
        return (
        <div>
            <Link href={'/'}>
                <img src='/techlogo.png' alt="tech logo" className="w-28" />
            </Link>
        </div>)
    }

    return (
        <div>
            <div className={`header ${theme === 'dark'? 'dark': ''}`}>
                {showLogo()}

                <div className="storeName justify-center items-center">
                    <div className={`text-xl ${theme === 'dark'? 'textDarkMode': ''}`}>{myConst}</div>
                    <div className={`subtitleTop ${theme === 'dark'?'dark':''}`}>↑ my const ↑</div>
                </div>

                <div>
                    <div className="flex justify-center mb-3"><button onClick={openCart}>🛒</button></div>

                    <button onClick={toggleTheme} className="btnDefault ">Mode {theme === 'light'? '🌙':'🌞'}</button>
                </div>


                <div className={`cartDiv ${cartOpen=== true? 'show':'hide'} ${theme=='dark'? 'dark': ''}`}><CartComponent/></div>               
            </div>

            <nav className="flex  bg-[var(--bluedark)] text-white justify-evenly p-5">
                <Link className="btnDefault w-[100px]" href={'/'}>Home
                </Link>

                <Link className="btnDefault w-[100px]" href={'/products/ProductsPage'}>Products
                </Link>

                <Link className="btnDefault w-[100px]" href={'/inputs/Inputs'}>Inputs
                </Link>

                <Link className="btnDefault w-[100px]" href={'/filter/Filter'}>Games
                </Link>
            </nav>

            <h3 style={{ color: 'var(--bluedark)', backgroundColor: 'var(--bluesky)', textAlign: 'center'}}>TS + NEXTJS + REACT</h3>
      
            <div style={testcss}>
                <div>{myLet}</div>
                <div>React</div>
            </div>
        </div>

    )
}

export default Topo