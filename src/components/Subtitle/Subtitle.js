import React from 'react';
import StyledSubtitle from './Subtitle.styled';

const Subtitle = ({children}) => {
    return(
        <StyledSubtitle>{children}</StyledSubtitle>
    )
}

export default Subtitle;
