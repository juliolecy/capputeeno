import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Cart } from '../../assets/icons/cart'
import * as k from './styles'

interface CartControl {

}

const CartControl = (props: CartControl) =>{

    const {value} = useLocalStorage('cart-items', [])



    return (
   <div>
        <Cart/>
        {value.length &&
            <k.CartCount>{value.length}</k.CartCount>
        }
   </div>
    )
}

export default CartControl