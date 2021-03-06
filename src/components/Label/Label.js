import React from 'react';
import StyledLabel from './Label.styled';

const Label = ({children,htmlFor}) => {
    return( 
        <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
    )
}

export default Label;