import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width:150px;
height:150px;
border-radius:0.6rem;
padding:1rem;
&:hover{
  cursor: pointer;
  transform: translateY(-8px);
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
  filter: brightness(1.3);
}
@media (max-width: 768px) {
  width: 250px;
}
`
const DefaultCardText = styled.div`
color: #F2F3F4;
font-size:1.4rem;
font-weight:600;

`

const FlexContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`
export const DefaultCard = ({category}) => {
  return (
    <Card style={{"background-color":`${category.color}`}}>
        <DefaultCardText>
            {category.name}
        </DefaultCardText>
        <FlexContainer>
        </FlexContainer>
    </Card>
  )
}
