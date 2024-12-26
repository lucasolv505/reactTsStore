import DisplayMyState from "@/components/DisplayMyState"
import Footer from "@/components/Footer"
import Topo from "@/components/Topo"
import { useState } from "react"

function usestate() {
    const [contv, setContv] = useState<number>(0)

    function contMore() {
        setContv((prevState) => prevState + 1)
    }

    function contLess() {
        setContv((prevState) => prevState - 1)
    }

    return (
        <div>
            <Topo />

            <div className="flex items-center justify-center mt-8">

              <DisplayMyState value={contv} addFunction={contMore} removeFunction={contLess}></DisplayMyState>

            </div>

            <Footer/>
        </div>
    )
}

export default usestate