import { IMyLabel } from "@interfaces/mylabel"
import './label.css'

export const MyLabel = ({
    label = 'this is a label',
    size = 'normal',
    allCaps,
    color = 'primary',
    fontColor = undefined
}: IMyLabel) => {

    return (
        <span 
            className={`${size} ${color}` }
            style={{color:fontColor && fontColor}}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}

export default MyLabel