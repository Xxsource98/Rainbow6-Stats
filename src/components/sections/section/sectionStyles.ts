import { createStyles } from '@mantine/core'

const sectionStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sectionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '55%',
        zIndex: 2,
        height: 'inherit',

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '75%',
        },

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '85%',
        },
    },
    headerText: {
        position: 'relative',
        textAlign: 'center',
        padding: '40px 0px',
        fontWeight: 400,
        marginBottom: 5,
        fontSize: 35,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 30,
            padding: '20px 0px',
        },

        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            fontSize: 25,
        },
    },
    descriptionText: {
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: 15,
        },
    },
    widgetsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        marginTop: 40,
    },
    customComponent: {
        position: 'relative',
        width: '100vw',
        minHeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default sectionStyles
