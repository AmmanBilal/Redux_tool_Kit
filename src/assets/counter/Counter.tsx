
import { increment,decrement, incrementByAmount, incrementAsync } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState,AppDispatch } from '../../store'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
const [incrementAmount,setIncrementAmount] = useState<number>(2)
const count = useSelector((state:RootState) => 
            state.counter.value
        )
const dispatch = useDispatch<AppDispatch>()

  return (
    <>
    <div className='row'>
     
     <button  className='button'
     aria-label='Increment Value' onClick={()=>{
        dispatch(increment())
     }}>
        +
     </button>
     <span className='value'>{count}</span>
     <button  className='button'
     aria-label='Decrement Value' onClick={()=>{
        dispatch(decrement())
     }}>
        -
     </button>
     </div>
    <div className='row'>
    <input className='textbox'
    aria-label='"set incremente amount'
     value={incrementAmount}
     onChange={e=> setIncrementAmount(Number(e.target.value))}/>

     <button  className='button'
     aria-label='increase by amount'
     onClick={()=>{
      dispatch((incrementByAmount(incrementAmount||0)))
     }}>
      Add Amount
     </button>

     <button className='asyncButton'
     aria-label='increase by amount'
     onClick={()=>dispatch(incrementAsync(1))}>
      Add Async
     </button>
    </div>
    </>
   
  )
}

export default Counter