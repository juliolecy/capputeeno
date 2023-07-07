import { FilterByPriority } from '../FilterByPriority'
import FilterByType from '../FilterByType'
import * as k from './styles'

interface FilterBarProps {

}

export default function FilterBar(props : FilterBarProps){
    return(
        <k.FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </k.FilterContainer>

        )
    }