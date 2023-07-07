import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ProductCard'
import * as k from './styles'



const ProductList = () =>{
const {data} = useProducts()
return (
    <k.ListContainer>
        {data?.map(product => 
            <ProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
            />)}
    </k.ListContainer>
)
}

export default ProductList