import { Button, Card, Image, Text } from '@mantine/core'
import React from 'react'

import Section from '../section/section'
import technologiesStyles from './technologiesStyles'

// @ts-ignore
import GatsbyIcon from '../../../images/gatsby.png'
// @ts-ignore
import ReactIcon from '../../../images/react.png'
// @ts-ignore
import MantineIcon from '../../../images/mantine.png'

type TechCardType = {
    title: string
    description: string
    image: string
    buttonUrl: string
}

const TechCard: React.FC<TechCardType> = ({
    title,
    description,
    image,
    buttonUrl,
}) => {
    const { classes } = technologiesStyles()

    return (
        <Card className={classes.card} shadow="sm" padding="xl">
            <Card.Section>
                <Image src={image} width={100} alt={title} />
            </Card.Section>
            <Text className={classes.cardHeader} weight={500} size="lg">
                {title}
            </Text>
            <Text size="md">{description}</Text>
            <Button
                component="a"
                target="_blank"
                href={buttonUrl}
                className={classes.cardButton}>
                Read More
            </Button>
        </Card>
    )
}

const Technologies: React.FC = () => {
    const { classes } = technologiesStyles()

    return (
        <Section
            title="Technologies Used"
            styles={{
                customComponentHeight: 400,
            }}>
            <div className={classes.container}>
                <TechCard
                    title={'React'}
                    description={
                        'Open-source JavaScript library that is used for building user interfaces specifically for single-page applications'
                    }
                    image={ReactIcon}
                    buttonUrl="https://reactjs.org"
                />
                <TechCard
                    title={'Gatsby'}
                    description={
                        'GatsbyJS is a React-based, GraphQL powered, static site generator.'
                    }
                    image={GatsbyIcon}
                    buttonUrl="https://gatsbyjs.com/"
                />
                <TechCard
                    title={'Mantine'}
                    description={'A fully featured React components library.'}
                    image={MantineIcon}
                    buttonUrl="https://mantine.dev/"
                />
            </div>
        </Section>
    )
}

export default Technologies
