import React from 'react'

import Section from '../section/section'

const HowItWorks: React.FC = () => {
    return (
        <Section
            title="How It Works"
            description={`
            Rainbow 6 Stats is searching for a player and displaying all possible statistics created with Gatsby JS and Mantine.
        Web application is using <a href='https://github.com/Xxsource98/rainbow-six-user-data' style="color: #666666; text-decoration: none">Rainbow Six User Data</a> API (Which is using r6stats.com API).
        `}
        />
    )
}

export default HowItWorks
