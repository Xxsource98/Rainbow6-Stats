import { createStyles } from '@mantine/core'

const navbarStyles = createStyles(theme => {
    return {
        navbar: {
            position: 'fixed',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100vw',
            left: 0,
            top: 0,
            height: 80,
            backgroundColor: 'transparent',
            boxSizing: 'border-box',
            padding: '10px 50px',
            zIndex: 10,
            transition: 'all 0.3s ease',

            [`@media (max-width: ${theme.breakpoints.sm + 50}px)`]: {
                height: 100,
            },
        },
        freezedNavbar: {
            position: 'absolute',
        },
        stickyNavbar: {
            backgroundColor: '#323b4b7c',

            [`@media (max-width: ${theme.breakpoints.sm + 50}px)`]: {
                height: 100,
            },
        },
        navbarElement: {
            position: 'relative',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            width: '50%',

            [`&:first-of-type`]: {
                [`@media (max-width: ${theme.breakpoints.sm + 50}px)`]: {
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },
            },

            [`&:last-child`]: {
                justifyContent: 'flex-end',

                [`@media (max-width: ${theme.breakpoints.sm + 50}px)`]: {
                    display: 'none',
                },
            },

            [`@media (max-width: ${theme.breakpoints.sm + 50}px)`]: {
                width: '100%',
            },
        },
        navbarElementLinkBox: {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
        },
        navbarHeader: {
            fontWeight: 500,
            fontSize: 22,
            color: theme.colors.gray[1],
            marginLeft: 10,

            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                fontSize: 15,
            },

            [`@media (max-width: ${theme.breakpoints.sm + 50}px)`]: {
                textAlign: 'center',
                width: '100%',
                display: 'none',
            },

            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                fontSize: 19,
            },
        },
        rightSideContainer: {
            position: 'relative',
            width: 700,
            display: 'flex',
            justifyContent: 'flex-end',

            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                width: 'auto',
            },

            [`@media (max-width: ${theme.breakpoints.sm + 50}px)`]: {
                display: 'none',
            },
        },
        rightSideElement: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'inherit',
            padding: '5px 10px',

            [`&:first-of-type`]: {
                marginRight: 16,

                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                    display: 'none',
                },
            },
        },
        buttonIcon: {
            width: 36,
            height: 36,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.1s ease',
            borderRadius: '100%',

            [`&:active`]: {
                background:
                    theme.colorScheme === 'light'
                        ? theme.colors.gray[2]
                        : theme.colors.dark[6],
            },
        },
    }
})

export default navbarStyles
