import React from 'react'

import headerStyles from './headerStyles'
import Section from '../section/section'
import FindInput from '../../findInput'

const Header: React.FC = () => {
    const { classes } = headerStyles()

    const FindComponent = (): JSX.Element => {
        return (
            <div className={classes.searchBox}>
                <FindInput />
            </div>
        )
    }

    return (
        <Section
            title="Rainbow 6 Stats"
            description="Rainbow 6 Stats is a website that fetch and displaying player's statistics. Website is coded in React using Gatsby Framework with Mantine components library. User data is provided by r6stats.com API. I just coded it for fun."
            styles={{
                overwriteSectionClass: classes.container,
                sectionHeight: '100vh',
                headerText: theme => ({
                    color: theme.colors.gray[1],
                }),
                descriptionText: theme => ({
                    color: theme.colors.gray[1],
                }),
            }}>
            <FindComponent />
        </Section>
    )
}

export default Header
