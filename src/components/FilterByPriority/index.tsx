import { useState } from 'react'
import { Arrow } from '../../assets/icons/arrow'
import * as k from './styles'
import { useFilter } from '../../hooks/useFilter'
import { PriorityTypes } from '../../types/PriorityTypes'


export function FilterByPriority(){
    const [open, setOpen]= useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () =>{
        setOpen(e=>!e)
    }

    const handleUpdatePriority = (value: PriorityTypes) =>{
        setPriority(value)
        setOpen(false)
    }
    return (
        <k.FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <Arrow/>    
            </button>

            {open &&
            <k.PriorityFilter>
                <li onClick={() =>handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() =>handleUpdatePriority(PriorityTypes.MAJOR_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() =>handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() =>handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </k.PriorityFilter>
            }
        </k.FilterContainer>

    )
}