import styled from 'styled-components'
import iconCard1 from '../../imgs/iconCard1.png'
import iconCard2 from '../../imgs/iconCard2.png'

export default function Cards() {
  return (
    <CardsContainer>
      <FirstCard>
        <img src={iconCard1} />
        <p>
          Conheça nossas propostas e <a href="">inscreva</a> sua instituição
        </p>
      </FirstCard>

      <SecondCard>
        <img src={iconCard2} />
        <p>
          Conheça as ações recorrentes e <a href="">torne-se um padrinho</a>
        </p>
      </SecondCard>
    </CardsContainer>
  )
}

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #353434;
  gap: 50px;
  border-radius: 50px;

  img {
    width: 30%;
  }
`

const FirstCard = styled.div`
  background: #fff;
  width: 26vw;
  height: 30vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: border 0.1s;

  &:hover {
    box-shadow: 1px 2px 6px #a3a1a1;
    -webkit-transition: box-shadow 0.2s ease-in;
  }
  p {
    margin-top: 30px;
  }
  a {
    color: #4d59c6;
    font-weight: 600;
    text-decoration: none;
  }
`

const SecondCard = styled.div`
  background: #fff;
  width: 26vw;
  height: 30vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: border 0.1s;

  &:hover {
    box-shadow: 1px 2px 6px #a3a1a1;
    -webkit-transition: box-shadow 0.2s ease-in;
  }
  p {
    margin-top: 30px;
  }
  a {
    text-decoration: none;
    color: #4d59c6;
    font-weight: 600;
  }
`
