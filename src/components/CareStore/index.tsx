import styled from "styled-components";
import product1 from "../../imgs/product1.png";
import product2 from "../../imgs/product2.png";
import product3 from "../../imgs/product3.png";

export default function CareStore() {
  return (
    <>
      <TitleContainer>
        <Title>Care Store</Title>
        <SeeAllLink href=""> Ver todas</SeeAllLink>
      </TitleContainer>
      <CareStoreContainer>
        <ProductsContainer>
          <ProductCard>
            <ProductImg src={product1} />
            <ProductName>Caneca Alien Power</ProductName>
            <p>R$ 10,00</p>
            <BuyButton>COMPRAR</BuyButton>
          </ProductCard>

          <ProductCard>
            <ProductImg src={product2} />
            <ProductName>Caneca Alien Power</ProductName>
            <p>R$ 20,00</p>
            <BuyButton>COMPRAR</BuyButton>
          </ProductCard>

          <ProductCard>
            <ProductImg src={product3} />
            <ProductName>Caneca Alien Power</ProductName>
            <p>R$ 10,00</p>
            <BuyButton>COMPRAR</BuyButton>
          </ProductCard>

          <ProductCard>
            <ProductImg src={product3} />
            <ProductName>Caneca Alien Power</ProductName>
            <p>R$ 10,00</p>
            <BuyButton>COMPRAR</BuyButton>
          </ProductCard>

          <ProductCard>
            <ProductImg src={product1} />
            <ProductName>Caneca Alien Power</ProductName>
            <p>R$ 10,00</p>
            <BuyButton>COMPRAR</BuyButton>
          </ProductCard>

          <ProductCard>
            <ProductImg src={product2} />
            <ProductName>Caneca Alien Power</ProductName>
            <p>R$ 20,00</p>
            <BuyButton>COMPRAR</BuyButton>
          </ProductCard>
        </ProductsContainer>
      </CareStoreContainer>
    </>
  );
}
const Title = styled.h3``;

const SeeAllLink = styled.a`
  text-decoration: none;
  font-size: 1.17em;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-left: 16vw;
  margin-bottom: 40px;
  align-items: baseline;
  color: #424344;
  font-size: 1.2rem;
  padding: 10px;

  a {
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;
    color: #1e75c2;
  }
`;

const CareStoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  width: 1000px;
`;

const ProductCard = styled.div`
  display: flex;
  width: 16vw;
  height: 320px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  p {
    color: #195f10;
    font-size: 1.2rem;
  }
`;

const ProductImg = styled.img`
  margin-top: 16px;
`;

const ProductName = styled.div`
  font-size: 1.2rem;
  padding: 10px;
`;

const BuyButton = styled.button`
  background: #4d59c6;
  width: 10vw;
  padding: 10px;
  margin: 10px;
  color: #fff;
  border: none;
  border-radius: 12px;
  &:hover {
    filter: brightness(0.8);
  }
`;
