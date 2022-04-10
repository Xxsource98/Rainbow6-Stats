import { createStyles } from '@mantine/core'

const footerStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        width: '100vw',
        background: '#0f0f0f',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 40px',
        boxSizing: 'border-box',
    },
    titleText: {
        color: '#fff',
        fontWeight: 400,

        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            fontSize: 20,
        },
    },
    normalText: {
        color: '#c9c9c9',
        fontWeight: 300,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    buttonsContainer: {
        position: 'relative',
        display: 'flex',
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
}))

export default footerStyles
