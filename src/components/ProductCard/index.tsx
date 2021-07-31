import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Institution } from '../Campaigns'
import ProgressBar from '../ProgressBar'

interface ProductCardProps {
  institution: Institution
}
export function ProductCard({ institution }: ProductCardProps) {
  const [productQuantity, setProductQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(
    1 * parseFloat(institution.campaigns.productValue.toString())
  )

  useEffect(() => {
    setTotalPrice(
      productQuantity * parseFloat(institution.campaigns.productValue.toString())
    )
  }, [productQuantity])

  function incrementProductQuantity() {
    setProductQuantity((prev) => prev + 1)
  }

  function decrementProductQuantity() {
    if (productQuantity < 2) {
      return
    } else {
      setProductQuantity(productQuantity - 1)
    }
  }
  return (
    <ProductCardContainer>
      <ImageCard>
        <ProductImage src={institution.campaigns.productImage} />
      </ImageCard>
      <p>{institution.campaigns.product}</p>

      <PriceLabel>
        Ajude com
        <ProductPrice>R${totalPrice.toFixed(2)}</ProductPrice>
      </PriceLabel>

      <ProductQuantity>
        <QuantityButton onClick={decrementProductQuantity}>- </QuantityButton>{' '}
        {productQuantity}{' '}
        <QuantityButton onClick={incrementProductQuantity}>+</QuantityButton>
      </ProductQuantity>
      <a href="https://buy.stripe.com/test_8wMaGy2EdbnGeVqcMM" target="_blank">
        <DonateButton>DOAR</DonateButton>
      </a>
      <ProgressBar 
        completed={institution.campaigns.percentConcluded}
        bgcolor="#03b848aa"
      />
      <p>Meta de {institution.campaigns.goal} unidades</p>
      <p>Instituição - {institution.name}</p>
    </ProductCardContainer>
  )
}

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
`

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 54vh;
  padding: 20px;
  gap: 5px;
  border-radius: 6px;
  min-width: 16vw;

  &:hover {
    box-shadow: 1px 2px 6px #bebdbda7;
    -webkit-transition: box-shadow 0.2s ease-in;
  }

  img {
    width: 170px;
  }

`

const ProductQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 50%;
  border: 1px solid black;
`

const QuantityButton = styled.button`
  padding: 8px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;

  &:hover {
    filter: brightness(0.8);
  }
`

const ImageCard = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  width: 100px;
  height: 140px;
`
const ProductPrice = styled.div`
  background-color: #26a14ba6;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 6px;
  text-align: center;
`
const DonateButton = styled.button`
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
`
const PriceLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  color: #5c5959;
  align-items: center;
`
