import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../imgs/logo2.png'

interface HeaderProps{

  onOpenNewLoginModal: () => void;
  onOpenNewRegisterModal: () => void;
}

export function Header({onOpenNewLoginModal, onOpenNewRegisterModal}: HeaderProps) {

  return (
    <HeaderContainer>
      <Link to="/"><img src={logo} /> </Link>  
      <Navbar>
        <ul>
          <li><Link className="link" to ="/institutions">Instituições</Link></li>
          <li>Ações Sociais</li>
          <li>Resultados</li>
          <li>Quem somos</li>
        </ul>
      </Navbar>

      <UserActions>
        <ul>
          <li onClick={onOpenNewRegisterModal} >Crie sua conta</li>
          <li onClick={onOpenNewLoginModal}>Entre</li>
          <li className="cart-button">Minhas ações do bem</li>
        </ul>

        <input type="text" placeholder="Pesquisar" />
      </UserActions>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 14vh;
  font-size: 1rem;
  color: #fff;
  background-color: #07689F;

  .link {
  
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;
    color: #ffff;
  }
  
`
const Navbar = styled.nav`
  display: flex;
  ul {
    display: flex;
    text-decoration: none;
    list-style: none;

    li {
      margin: 12px;
      cursor: pointer;

      &:hover {
        color: #c7c9ca;
      }
    }
  }
`

const UserActions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    margin-top: 14px;
    width: 20vw;
    height: 4vh;
    text-indent: 14px;
    font-size: 16px;
    border-radius: 6px;
    border-style: none;
  }

  ul {
    display: flex;
    text-decoration: none;
    list-style: none;
    gap: 40px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .cart-button {
    border: 1px solid #fff;
    border-radius: 6px;
    padding: 10px;
    background: rgba(235, 224, 224, 0.1);
  }
`
