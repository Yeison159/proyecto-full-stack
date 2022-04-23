import styled from 'styled-components'

export const PropertyHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  ;
  .container-icon{
  padding: 5px ;
     border:  1px solid #ccc;
     border-radius: 10px;
  }
`;

export const PropertyImageWrapper = styled.div`
border-radius: 20px;
margin: 30px 0 10px 0;
img {
width: 100%;
border-radius: inherit;
}
 
`;

export const WrapperPropertyButton = styled.div `
button {
  width: 100%;
  padding: 20px 0;
  color: #fff;
  background: #5078E1;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 1.02em;
  font-weight: 400;
  text-transform: capitalize;
}
`
