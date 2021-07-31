import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import invilliaSocial from '../../imgs/footer.png'

export function Footer() {
  return (
    <FooterContainer>
      <img src={invilliaSocial} />
      <div> 
      <SocialIcon className="social" url="https://www.instagram.com/invillia/?hl=pt-br" bgColor="white"/>
      <SocialIcon className="social" url="https://www.facebook.com/invillia/"bgColor="white" />
      <SocialIcon className="social" url="https://www.linkedin.com/feed/" bgColor="white" />
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #07689F;
  height: 30vh;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .social {
    width: 20%;
    margin-right: 10px;

    &:hover {
      filter: brightness(0.8);
    }
  }

  img {
    width: 20%;
    height: 60%;
  }
`
