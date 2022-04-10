import { createStyles } from '@mantine/core'

const userOperatorsStyles = createStyles(theme => ({
    operatorsWrapper: {
        position: 'relative',
        marginTop: 25,
        width: '100%',
        overflowX: 'auto',
    },
    operatorsAccordion: {
        width: '100%',
        color: '#C1C2C5',
    },
    operatorsAccordionItem: {
        width: '100%',
        overflowX: 'auto',
        color: '#C1C2C5',
        borderBottom: `1px solid ${theme.colors.dark[4]}`,

        '& svg': {
            color: '#C1C2C5',
        },
        '& button:hover': {
            backgroundColor: '#373A406e',
        },
    },
    operatorsTable: {
        position: 'relative',
        minWidth: '100%',
        color: '#C1C2C5',

        '& thead tr th, & tfoot tr th': {
            color: '#C1C2C5',
        },
        '& thead tr th': {
            borderBottom: `1px solid ${theme.colors.gray[3]}`,
        },
        '& tbody tr td': {
            minWidth: 60,
        },
    },
    operatorBox: {
        position: 'relative',
        background: '#0000001A',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
    },
    operatorBoxHeaderWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    operatorBoxText: {
        position: 'relative',
        color: '#fff',
    },
    operatorBoxPLaytime: {
        color: '#fff',
        marginLeft: -12,
        fontSize: '0.9rem',
    },
    operatorBoxElement: {
        [`@media (max-width: ${theme.breakpoints.xs + 90}px)`]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
    },
    operatorBoxCTU: {
        [`@media (max-width: ${theme.breakpoints.xs + 90}px)`]: {
            flexDirection: 'row-reverse',
        },
    },
}))

export default userOperatorsStyles
