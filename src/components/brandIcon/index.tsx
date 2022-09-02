import React from "react"
import {StyledBrandIcon} from "./styles"

type Props = JSX.IntrinsicElements['div']

export const BrandIcon:React.FC<Props> = ({...props}) => {
    return(
        <StyledBrandIcon {...props as any}>
            <p>Motors<span>shop</span></p>
            
        </StyledBrandIcon>
    )
}