import styled from 'styled-components'

export const PropertyTypesContainer = styled.section`
   display: flex;
   overflow-x: auto;
   margin-bottom: 10px;
`;

export const PropertyTypesContainerProfile = styled.section`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   margin: 20px 0 10px 0;
`;

export const PropertyTypesContainerIcon = styled.div`
  flex-grow: 3;
  display: flex;
  justify-content: center;
  padding: 10px 0px 10px 0px;
  border: 2px solid #F4F4F4;
  border-radius: 10px;
`
// -----------------------------

export const PropertyTypesContainerDos = styled.section`
   margin: 0 0 0 5px;
   line-height: 0.5;
   p {
    font-size: 1.8em;
    color: #39445F;
   }
    .descripcion {
     color: #616A7F;
     font-weight: 400;
     span {
        color: #6487E4;
         font-weight: 700;
     }  
    }
`;
