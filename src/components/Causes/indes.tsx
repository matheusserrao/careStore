import styled from 'styled-components'
import cause1 from '../../imgs/cause1.jpg'
import cause2 from '../../imgs/cause2.jpg'
import inclusao from '../../imgs/inclusao.png'
import situacaorua from '../../imgs/situacaorua.png'
import criancas from '../../imgs/criancas.png'

export function Causes() {
  return (
    <CausesContainer>
      <h3>Navegue por causas</h3>
      <div className="cards">
        <div>
          <img src={cause2}></img>
          <p>Combate a pobreza</p>
        </div>

        <div>
          <img src={inclusao}></img>
          <p>Inclusão</p>
        </div>

        <div>
          <img src={situacaorua}></img>
          <p>Pessoas em situação de rua</p>
        </div>

        <div>
          <img src={criancas}></img>
          <p>Crianças</p>
        </div>
      </div>
    </CausesContainer>
  )
}

const CausesContainer = styled.div`
  background-color: #ffff;
  width: 100%;
  color: #5c5b5b;
  height: 34vh;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-right: auto;
    margin-left: 20vw;
  }

  .cards {
    padding: 40px;
    max-width: 1200px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      p {
        margin-top: 20px;
      }
    }
  }
  img {
    border-radius: 8px;
    width: 200px;
    height: 140px;
    margin-left: 20px;
  }
`
