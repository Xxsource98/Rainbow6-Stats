import React from 'react'
import { Affix, createStyles, Transition, UnstyledButton } from '@mantine/core'
import { useWindowScroll, useViewportSize } from '@mantine/hooks'
import { MdKeyboardArrowUp } from '@react-icons/all-files/md/MdKeyboardArrowUp'

import PageHelmet from './pageHelmet'
import Navbar from './sections/navbar/navbar'
import Footer from './sections/footer/footer'

type PageWrapperType = {
    title?: string
    backgroundImage?: string
    freezedNavbar?: boolean
    customGradient?: {
        background: string
        gradient: string
    }
}

const PageWrapper: React.FC<PageWrapperType> = ({
    title,
    backgroundImage,
    freezedNavbar,
    customGradient,
    children,
}) => {
    const { classes } = useStyles()
    const [scroll, scrollTo] = useWindowScroll()
    const { height } = useViewportSize()

    return (
        <PageHelmet title={title}>
            <Navbar freezed={freezedNavbar} />
            <main
                className={classes.container}
                style={{
                    background: customGradient ? customGradient.background : '',
                    backgroundImage: backgroundImage
                        ? `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
                        : customGradient
                        ? customGradient.gradient
                        : '',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    zIndex: 1,
                }}>
                {children}
            </main>
            <Footer />

            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > height}>
                    {transitionStyles => (
                        <UnstyledButton
                            className={classes.button}
                            onClick={() => scrollTo({ y: 0 })}
                            style={transitionStyles}>
                            <MdKeyboardArrowUp />
                        </UnstyledButton>
                    )}
                </Transition>
            </Affix>
        </PageHelmet>
    )
}

export default PageWrapper

const useStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        backgroundColor:
            theme.colorScheme === 'light'
                ? theme.colors.gray[0]
                : theme.colors.dark[7],
        color:
            theme.colorScheme === 'light'
                ? theme.colors.dark[7]
                : theme.colors.gray[1],
        padding: 0,
        margin: 0,
        fontWeight: 300,
        fontSize: 20,
        width: '100%',
        minHeight: '100vh',
        [`> p`]: {
            margin: 0,
            padding: 0,
        },
        [`> a`]: {
            textDecoration: 'none',
            color:
                theme.colorScheme === 'light'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[1],
            margin: 0,
            padding: 0,
        },
    },
    backgroundOverlay: {
        [`&:after`]: {
            position: 'absolute',
            zIndex: -1,
            content: '""',
            top: 0,
            left: 0,
            width: '100vw',
            minHeight: 'inherit',
            background: '#191a1ba0',
        },
    },
    button: {
        width: 36,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.1s ease',
        borderRadius: '100%',
        background:
            theme.colorScheme === 'light'
                ? theme.colors.gray[1]
                : theme.colors.dark[6],

        [`&:active`]: {
            background:
                theme.colorScheme === 'light'
                    ? theme.colors.gray[2]
                    : theme.colors.dark[6],
        },
    },
}))
