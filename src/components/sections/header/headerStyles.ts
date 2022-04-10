import { createStyles } from '@mantine/core'

// @ts-ignore
import backgroundImageSrc from '../../../images/background2.jpg'

const headerStyles = createStyles(theme => ({
    container: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        [`&:after`]: {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            width: '100vw',
            height: 'inherit',
            background: '#191a1ba0',
        },
    },
    searchBox: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',

            [`.mantine-Button-root`]: {
                marginTop: 10,
            },
        },
    },
}))

export default headerStyles
