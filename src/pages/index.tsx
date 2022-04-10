import React from 'react'

import PageWrapper from '../components/pageWrapper'
import Header from '../components/sections/header/header'
import AboutGame from '../components/sections/aboutGame/aboutGame'
import Technologies from '../components/sections/technologies/technologies'
import HowItWorks from '../components/sections/howItWorks/howItWorks'

const Index: React.FC = () => {
    return (
        <PageWrapper>
            <Header />
            <AboutGame />
            <HowItWorks />
            <Technologies />
        </PageWrapper>
    )
}

export default Index
