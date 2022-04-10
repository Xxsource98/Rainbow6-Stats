import { createStyles } from '@mantine/core'

const useUserStatsStyle = createStyles(theme => ({
    groupWidget: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: 'rgba(0, 0, 0, 0.10)',
        padding: 20,
        borderRadius: 10,
    },
    statsWrapper: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '0.6fr 2fr',
        marginTop: 25,
        gap: 25,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    leftWrapper: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
    },
    gridWrapper: {
        position: 'relative',
        display: 'grid',
        gap: 20,
        gridTemplateColumns: 'repeat(3, 1fr)',

        [`@media (max-width: 740px)`]: {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    rankContainer: {
        position: 'relative',
        margin: 0,
        padding: 0,
        width: '100%',
    },
    rankImage: {
        position: 'absolute',
        right: 0,
        top: -60,
        width: 84,

        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            width: 64,
        },
    },
    operatorBox: {
        position: 'relative',
        background: '#0000001A',
        width: '100%',
        padding: 5,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
    },
    operatorBoxText: {
        position: 'relative',
        left: 5,
        color: '#fff',
    },
    operatorBoxPLaytime: {
        color: '#fff',
        marginLeft: -12,
        fontSize: '0.9rem',

        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: '0.8rem',
        },
    },
    textLink: {
        cursor: 'pointer',
        fontWeight: '400',
        color: '#fff',
    },
}))

export default useUserStatsStyle
