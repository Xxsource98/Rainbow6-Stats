import { createStyles } from '@mantine/core'

const useUserDataStyles = createStyles(theme => ({
    userWidgetContainer: {
        position: 'relative',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        gridColumn: 'span 2',

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column',
        },
    },
    infoBox: {
        alignItems: 'flex-start',
        height: 128 + 50,

        [`@media (max-width: ${theme.breakpoints.xs + 90}px)`]: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
    userWidgetSection: {
        position: 'relative',
        minHeight: 128,

        [`@media (max-width: ${theme.breakpoints.xs + 90}px)`]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    rightBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        minHeight: 128 + 50,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            position: 'relative',
            alignItems: 'center',
        },
    },
    groupWidget: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: 'rgba(0, 0, 0, 0.10)',
        padding: 20,
        borderRadius: 10,
    },
    groupTitle: {
        color: '#fff',
        fontWeight: 500,

        [`@media (max-width: ${theme.breakpoints.xs + 90}px)`]: {
            textAlign: 'center',
        },
    },
}))

export default useUserDataStyles
