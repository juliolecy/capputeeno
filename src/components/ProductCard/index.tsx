import { FormatPrice } from '../../utils/FormatPrice'
import * as k from './styles'

interface ProductCard {
    image: string,
    title: string,
    price: number
}

const ProductCard = (props: ProductCard) =>{
    const price = FormatPrice(props.price)
    return (
        <k.Card>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </k.Card>
    )
}

export default ProductCard