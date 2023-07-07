import { InputHTMLAttributes } from 'react'
import { Search} from '../../assets/icons/search'
import * as k from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
value:string,
handleChange: (value: string) => void
}

export function PrimaryInputWithSearchIcon(props: InputProps){
    return (
        <k.InputContainer>
            <k.PrimaryInput onChange={(e => props.handleChange(e.target.value))} {...props}/>
            <Search/>
        </k.InputContainer>
        )
}