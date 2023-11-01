import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: "Poppins", 'Times New Roman';
    min-height: 100vh;
    background-color: ${({ theme }) => theme.color.backgroundColor};
}
`;

export const ShopWrapper = styled.section`

max-width: ${({ theme }) => theme.responsive.desktop};
 margin: 0 auto;
 padding: 50px 20px;
 min-height: 100vh;
 position: relative;
 
 .buttonWrapper{
    display: flex;
    justify-content: space-between;
 }
`;

export const Shop = styled.section`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 gap: 30px;
`;

export const SingleProduct = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 25px;


    img {
    min-width: 100%;
    min-height: 50%;
    height: 50%;
    width: 100%;
    margin: 7px auto;
    border-radius: 8px;
}

.product-name {
    margin-top: 0px;
    margin-bottom: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.0015em;
    color: #0E161A;
}

.product-info p{
    margin-top: 5px;
}`;

export const CartButton = styled.button`


  position: absolute;
  bottom: 0;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  width: 100%;
  border: 2px solid #427743;

.circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  margin: 0;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 0;
  background: #427743;
  color: #fff;
}

.btn-icon { 
    border-radius: 0;
    padding: 7px;
}
p{
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin: auto 0 0 1.85rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: #427743;
}
&:hover .circle {
  width: 100%;
}
.btn-icon{
    transition: all 0.5s cubic-bezier(0.65, 0, 0.076, 1);
}
&:hover .btn-icon{
    margin-left: 25%;
}
&:hover p{
  color: #fff;
}`