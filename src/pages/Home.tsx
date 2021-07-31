import React from 'react'
import { Campaigns } from '../components/Campaigns'
import Cards from '../components/Cards'
import CareStore from '../components/CareStore'
import { Causes } from '../components/Causes/indes'
import { Institutions } from '../components/Institutions'

export  function Home() {
    return (
        <>
        <Cards />
        <Campaigns />
        <Causes />
        <Institutions />
        <CareStore />
        </>
    )
}
