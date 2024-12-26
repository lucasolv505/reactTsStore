interface DisplayStateProps{
    value:number,
    addFunction:any,
    removeFunction: any,
}

function DisplayMyState({value, addFunction, removeFunction}:DisplayStateProps){

  return (
    <div className="flex gap-4 items-center">
        <button className="btnDefault h-[30px] w-[30px]" onClick={removeFunction}>-</button>
        <div>
            {value}
        </div>
        <button className="btnDefault h-[30px] w-[30px]" onClick={addFunction}>+</button>
    </div>
  )

}

export default DisplayMyState