import { createStyles } from '@mantine/core'

const technologiesStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        width: '70%',
        display: 'flex',
        justifyContent: 'space-around',

        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            width: '95%',
        },

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '90%',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    card: {
        width: 256,
        paddingTop: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 60,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '60%',
            marginBottom: 15,
        },

        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            width: '85%',
        },
    },
    cardHeader: {
        marginTop: 10,
        marginBottom: 10,
    },
    cardButton: {
        position: 'absolute',
        bottom: 15,
    },
}))

export default technologiesStyles
