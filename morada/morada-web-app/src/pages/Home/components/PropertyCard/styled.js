import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PropertyTypeCardWrapper = styled(Link)`
  border: 1px solid #ccc;
  text-decoration: none;
  border-radius: 20px;
    padding: 15px;
  display: flex;
  margin-bottom: 10px;
   box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -webkit-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -moz-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    
   
 `;

export const PropertyImageWrapper = styled.div`
 flex: 30;
 
border-radius: 20px;
 img {
    width: 100%;
    border-radius: inherit;
    height: 100%;
`;

export const PropertyInfoWrapper = styled.div`
     flex: 80;
      margin-left: 10px;
     h3 {
        margin: 0;
     }
    `;

export const PropertyValueWrapper = styled.p`
    color: #222;
`;
