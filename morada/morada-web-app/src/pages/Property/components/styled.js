import styled from 'styled-components'

export const PropertyInforWrapper = styled.section`
 h3 {
 font-size: 1.25em;
 text-transform: capitalize;
 margin-bottom: 5px;
 }
 .container-subtitle {
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
 }
 .rate{
  margin-right: 10px;
  display: flex;
  align-items: center;
  svg {
  font-size: .9em;
  font-weight: bold;
  color: #F2C94C;
  margin-right: 5px;
  }
  span {
  font-size: .8em;
  small{
    color: #878D9E;
  }
  }
 }
.price {
font-weight: bold;
color: #5078E1;
font-size: 1.5em;
margin-top: 5px;
}

 .info-secudary {
   display: flex;
   align-items: center;
   .container-secundary {
      display: flex;
      align-items: center;
     .info-container-secudary-type{ 
     display: flex;
     justify-content: end;
     align-items: center;
      flex: 8;
      
      .info-secudary-margin {
         margin-right: 10px;
         padding-bottom: 5px;
      }
     }
   }
   }

.info-secudary-type {
   display: flex;

   align-items: center;
  .info-type-margin {
   margin: 0 10px 0 5px; 
  }
} ;
`

export const PropertyDescripcitionWrapper = styled.section`

h4 {
margin: 0;
color: #121F40;
text-transform: capitalize;
}
p {
color: #878D9E;
text-align: start;
}
`

export const PropertysellerInfoWrapper = styled.section `
display: flex;
margin-top: 20px;
justify-content: space-between;
align-items: center;
.sale-info {
display: flex;
flex: 7;

.imagen {
flex: 3;
border-radius: 20px;
height: 50%;
img {
border-radius: inherit;
}
}

.seller-info {
flex: 7;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 10px;
 p {
 text-transform: capitalize;
 margin: 0;
 }
 h4 {
 overflow: hidden;
 white-space: nowrap;
 margin: 0 5px 0 0;
 text-transform: capitalize;
 text-overflow: ellipsis;
 }
}
}

.info-sale-icon {
    flex: 3;
    display: flex;
    justify-content: end;
    .icons {
     margin-right: 5px;
     padding:  5px;
     border:  1px solid #ccc;
     border-radius: 10px;
    max-height: 50%;
     svg {
     font-size: 2em;
     }
    }
    
    .whatsapp {
    background: #27AE60;
     svg {
       color: #fff;
     }
    }
    .message{
     svg {
     color: #AAADC3
     }
    }
    
}
`
