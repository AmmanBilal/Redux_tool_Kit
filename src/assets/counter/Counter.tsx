
import { increment,decrement } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'



const Counter = () => {
const count = useSelector((state:RootState) => 
            state.counter.value
        )
const dispatch = useDispatch()

  return (
    <>
    
     <div>Counter</div>
     <button aria-label='Increment Value' onClick={()=>{
        dispatch(increment())
     }}>
        +
     </button>
     <span>{count}</span>
     <button aria-label='Decrement Value' onClick={()=>{
        dispatch(decrement())
     }}>
        -
     </button>
    </>
   
  )
}

export default Counter