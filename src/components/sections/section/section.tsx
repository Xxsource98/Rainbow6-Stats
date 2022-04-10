import React from 'react'
import { Title, Text, Button } from '@mantine/core'

import sectionStyles from './sectionStyles'

type SectionType = {
    title: string
    description?: string
    button?: {
        buttonText: string
        buttonHref: string
    }
    styles?: {
        sectionHeight?: number | string
        sectionWidth?: number | string
        customComponentHeight?: number | string
        overwriteSectionClass?: string
        headerText?: StyleType
        descriptionText?: StyleType
        button?: StyleType
    }
}

const Section: React.FC<SectionType> = ({
    title,
    description,
    children,
    button,
    styles,
}) => {
    const { classes } = sectionStyles()

    const DrawDescription = (): JSX.Element => {
        if (description) {
            return (
                <Text
                    size="xl"
                    className={classes.descriptionText}
                    sx={styles?.descriptionText}
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}
                />
            )
        }

        return <React.Fragment />
    }

    const DrawCustomComponent = (): JSX.Element => {
        if (children) {
            return (
                <div
                    className={classes.customComponent}
                    style={{
                        minHeight: styles?.customComponentHeight || 0,
                    }}>
                    {children}
                </div>
            )
        }

        return <React.Fragment />
    }

    const DrawButton = (): JSX.Element => {
        if (button) {
            return (
                <Button
                    className={classes.button}
                    component="a"
                    target="_blank"
                    href={button.buttonHref}
                    sx={styles?.button}>
                    {button.buttonText}
                </Button>
            )
        }

        return <React.Fragment />
    }

    return (
        <section
            className={
                styles?.overwriteSectionClass
                    ? `${classes.container} ${styles?.overwriteSectionClass}`
                    : classes.container
            }
            style={{
                minHeight: styles?.sectionHeight ? 0 : 600,
                height: styles?.sectionHeight || 'auto',
                width: styles?.sectionWidth || '100vw',
            }}>
            <div className={classes.sectionWrapper}>
                <Title
                    order={1}
                    className={classes.headerText}
                    sx={styles?.headerText}>
                    {title}
                </Title>
                <DrawDescription />
                <DrawCustomComponent />
                <DrawButton />
            </div>
        </section>
    )
}

export default Section
