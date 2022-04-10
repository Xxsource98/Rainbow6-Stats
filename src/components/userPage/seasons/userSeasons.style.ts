import { createStyles } from '@mantine/core'

const userSeasonsStyles = createStyles(theme => ({
    seasonsWrapper: {
        position: 'relative',
        marginTop: 25,
        width: '100%',
        overflowX: 'auto',
    },
    seasonsAccordion: {
        width: '100%',
    },
    seasonsAccordionItem: {
        position: 'relative',
        width: '100%',
        color: '#C1C2C5',
        boxSizing: 'border-box',
        border: 'none',
        borderRadius: 15,
        marginBottom: 15,
        backgroundColor: '#373A401e',

        '& svg': {
            color: '#C1C2C5',
        },
        '& button': {
            borderRadius: 15,
            transition: 'all 0.3s ease',
        },
        '& button:hover': {
            backgroundColor: '#373A406e',
        },
        '&::before': {
            position: 'absolute',
            left: 0,
            top: 0,
            height: 100,
            width: 5,
            background: 'red',
        },
    },
    seasonsAccordionItemGroup: {
        position: 'relative',
        padding: 15,
    },
    seasonsBoldText: {
        fontWeight: '500',
    },
    seasonsTable: {
        color: '#C1C2C5',

        '& thead tr th, & tfoot tr th': {
            color: '#C1C2C5',
        },
        '& thead tr th': {
            borderBottom: `1px solid ${theme.colors.gray[3]}`,
        },
        '& tbody tr td': {
            borderBottom: `1px solid ${theme.colors.dark[4]}`,
        },
    },
}))

export default userSeasonsStyles
