import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { InstitutionCard } from '../InstitutionCard'

export interface Institution {
  name: string
  cause: string
  campaigns: {
    product: string
    productValue: number
    goal: number
    percentConcluded: number
    productImage: string
  }
}

export function Institutions() {
  const [institutions, setInstitutions] = useState<Institution[]>([])

  useEffect(() => {
    function loadInstitutions() {
      axios
        .get('https://app-care-store.herokuapp.com/institutions')
        .then((response) => setInstitutions(response.data))
  
    }

    loadInstitutions()
  }, [])

  return (
    <InstitutionsContainer>
      <TitleContainer>
        <Title>Instituições</Title>
        <SeeAllLink href=""><Link to="/institutions"> Ver todas</Link></SeeAllLink>
      </TitleContainer>

      <Showcase>
        {institutions.map((institution, index) => (
          <InstitutionCard key={index} institution={institution} />
        ))}
      </Showcase>
    </InstitutionsContainer>
  )
}

const Title = styled.h3``

const SeeAllLink = styled.a`
  text-decoration: none;
  font-size: 1.17em;
`

const TitleContainer = styled.div`
  display: flex;
  margin-left: 16vw;
  margin-bottom: 10px;
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
`

const Showcase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  
  }
`

const InstitutionsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 10vh;
`
