import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import { Campaigns } from '../components/Campaigns';


export function AnjosDaLeste() {
    return (
       <Container>
      <InstitutionCardContainer>
        <ImageCard>
          <ProductImage src="https://scontent.ftow1-1.fna.fbcdn.net/v/t1.6435-9/61610439_1632021516941781_2816442130250072064_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UTjlG1u-jNsAX9tEDKw&_nc_ht=scontent.ftow1-1.fna&oh=677f3e3f8c3724f727165f58bce51f85&oe=612AFCD7" />
        </ImageCard>
        <InstitutionName> Anjos da Leste - SP</InstitutionName>
        <InstitutionDescription>
          Ação social de apoio à moradores de rua das zona leste de São Paulo
          <p>Atua desde : 2018</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </InstitutionDescription>
        <p>Galeria de imagens:</p>
        <ImageGalery>

            <img src="https://www.acritica.com/uploads/news/image/772994/show_WhatsApp_Image_2020-04-17_at_18.28.04_59DF5E1A-CE6B-460A-AADC-E6797583747B.jpeg"></img>
            <img src="https://www.acritica.com/uploads/news/image/772994/show_WhatsApp_Image_2020-04-17_at_18.28.04_59DF5E1A-CE6B-460A-AADC-E6797583747B.jpeg"></img>
            <img src="https://www.acritica.com/uploads/news/image/772994/show_WhatsApp_Image_2020-04-17_at_18.28.04_59DF5E1A-CE6B-460A-AADC-E6797583747B.jpeg"></img>
        </ImageGalery>
        <div> 
        <SocialIcon className="social" url="https://www.instagram.com/invillia/?hl=pt-br" bgColor="black"/>
        <SocialIcon className="social" url="https://www.facebook.com/invillia/"bgColor="black" />
        <SocialIcon className="social" url="https://www.linkedin.com/feed/" bgColor="black" />
        </div>

        <Campaigns/>
      </InstitutionCardContainer>

   
      </Container>
    );
  }

  const ProductImage = styled.img`
    width: 120px;
    height: 120px;
  `;
  
  const InstitutionCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    height: 130vh;
    padding: 20px;
    gap: 5px;
    border-radius: 6px;
    width: 46vw;
  
    img {
      width: 170px;
    }

.social {
    width: 20%;
    margin-right: 10px;

    &:hover {
      filter: brightness(0.8);
    }
    }
  `;
  
  const ImageCard = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    width: 100px;
    height: 140px;
  
  
  `;
  
  const InstitutionName = styled.div`
  
    font-size: 1.4rem;
    color: #0F9373;
  
  `
  
  
  const InstitutionDescription = styled.div`
  
  line-height: 2rem;
    color: #535351;
  
    a {
      text-decoration: none;
    }
  `

  const Container = styled.div`
    
    display: flex;
    justify-content: center;
  
  `

  const ImageGalery = styled.div`
  
    margin-top: 10px;
    
    img {
        margin: 10px;
    }
  
  `