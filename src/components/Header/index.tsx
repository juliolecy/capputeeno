import * as k from './styles'
import { PrimaryInputWithSearchIcon } from '../PrimaryInput'
import CartControl from '../CartControl'
import { useFilter } from '../../hooks/useFilter'

export default function Header (){
    const {setSearch, search} = useFilter()
    return (
        <k.Header>
            <k.Logo>Capputeeno</k.Logo>
            <div>
                <PrimaryInputWithSearchIcon
                value={search}
                handleChange={setSearch} 
                placeholder='Procurando por algo específico?'/>
                <CartControl/>
            </div>
        </k.Header>
    )
}