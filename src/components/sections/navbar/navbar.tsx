import React, { useEffect, useState } from 'react'
import { navigate, Link } from 'gatsby'
import {
    Image,
    Text,
    Tooltip,
    UnstyledButton,
    useMantineColorScheme,
} from '@mantine/core'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { FaRegMoon } from '@react-icons/all-files/fa/FaRegMoon'
import { FaSun } from '@react-icons/all-files/fa/FaSun'

import navbarStyles from './navbarStyles'
import { useViewportSize, useWindowScroll } from '@mantine/hooks'
import FindInput from '../../findInput'
import SelectPlatform from '../../selectPlatform'

// @ts-ignore
import R6Logo from '../../../images/r6logo.png'

type NavbarType = {
    freezed?: boolean
}

const Navbar: React.FC<NavbarType> = ({ freezed }) => {
    const { classes } = navbarStyles()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const { height } = useViewportSize()
    const [scroll] = useWindowScroll()
    const [stickyNavbar, setStickyNavbar] = useState<boolean>(false)

    const scrollFunc = () => {
        if (!freezed && scroll.y >= height - 250) {
            setStickyNavbar(true)
        } else {
            setStickyNavbar(false)
        }
    }

    useEffect(() => {
        scrollFunc()
    }, [scroll.y])

    return (
        <nav
            className={`${classes.navbar}${
                stickyNavbar ? ` ${classes.stickyNavbar}` : ''
            }${freezed ? ` ${classes.freezedNavbar}` : ''}`}>
            <div className={classes.navbarElement}>
                <Link to="/" className={classes.navbarElementLinkBox}>
                    <Image src={R6Logo} alt="logo" width={16} />
                    <Text
                        className={classes.navbarHeader}
                        sx={{ marginRight: 15 }}>
                        Rainbow 6 Stats
                    </Text>
                </Link>
                <SelectPlatform small />
            </div>
            <div className={classes.navbarElement}>
                <div className={classes.rightSideContainer}>
                    <div className={classes.rightSideElement}>
                        <FindInput darkTheme />
                    </div>
                    <div className={classes.rightSideElement}>
                        <Tooltip
                            label="Source Code"
                            transition="scale"
                            arrowSize={2}
                            withArrow>
                            <UnstyledButton
                                className={classes.buttonIcon}
                                onClick={() => navigate('https://github.com/Xxsource98/Rainbow6-Stats')}>
                                <SiGithub size={24} color="#fff" />
                            </UnstyledButton>
                        </Tooltip>
                        <Tooltip
                            label={
                                colorScheme === 'dark'
                                    ? 'Light Mode'
                                    : 'Dark Mode'
                            }
                            transition="scale"
                            arrowSize={2}
                            withArrow>
                            <UnstyledButton
                                className={classes.buttonIcon}
                                onClick={() => toggleColorScheme()}>
                                {colorScheme === 'dark' ? (
                                    <FaSun size={24} color="#fff" />
                                ) : (
                                    <FaRegMoon size={24} color="#fff" />
                                )}
                            </UnstyledButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
