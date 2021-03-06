import React from 'react';
import StyledComplete from './Complete.styled';
import Button from './../Button/Button';
import ButtonBox from '../ButtonBox/ButtonBox';

const Complete = ({active, reset}) => {
    return( 
        <StyledComplete active={active}>
            <p>Formularz został poprawnie wysłany. </p>
            <p className="thanks">Dziękujemy za skorzystanie z naszej oferty</p>
            <ButtonBox>
                <Button onClick={reset}>Uzupełnij ponownie</Button>
            </ButtonBox>
        </StyledComplete>
    )
}

export default Complete;