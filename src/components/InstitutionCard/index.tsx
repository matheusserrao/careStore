import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Institution } from "../Campaigns";
import ProgressBar from "../ProgressBar";

interface ProductCardProps {
  institution: Institution;
}
export function InstitutionCard({ institution }: ProductCardProps) {
  return (
    <InstitutionCardContainer>
      <ImageCard>
        <ProductImage src="https://scontent.ftow1-1.fna.fbcdn.net/v/t1.6435-9/61610439_1632021516941781_2816442130250072064_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UTjlG1u-jNsAX9tEDKw&_nc_ht=scontent.ftow1-1.fna&oh=677f3e3f8c3724f727165f58bce51f85&oe=612AFCD7" />
      </ImageCard>
      <InstitutionName> Anjos da Leste - SP</InstitutionName>
      <InstitutionDescription>
        Ação social de apoio à moradores de rua das zona leste de São Paulo
        <p>Atua desde : 2018</p>
        <p>Ações cadastradas: <a href="">Ver ações</a></p>
      </InstitutionDescription>
    </InstitutionCardContainer>
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
  height: 400px;
  padding: 20px;
  gap: 5px;
  border-radius: 6px;
  width: 16vw;

  img {
    width: 170px;
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