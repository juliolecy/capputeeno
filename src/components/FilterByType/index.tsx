import { useFilter } from '../../hooks/useFilter'
import { FilterType } from '../../types/FilterType'
import * as k from './styles'

interface Filter {

}


const FilterByType = (props: Filter) =>{
    const {type, setType} = useFilter()

    const handleChangeType = (value: FilterType) =>{
        setType(value)
    }

    return (
   <k.FilterList>
        <k.FilterItem selected={type === FilterType.ALL} onClick={()=>handleChangeType(FilterType.ALL)}>Todos os produtos</k.FilterItem>
        <k.FilterItem selected={type === FilterType.SHIRT} onClick={()=>handleChangeType(FilterType.SHIRT)}>Camisetas</k.FilterItem>
        <k.FilterItem selected={type === FilterType.MUG} onClick={()=>handleChangeType(FilterType.MUG)}>Canecas</k.FilterItem>
   </k.FilterList>
    )
}

export default FilterByType