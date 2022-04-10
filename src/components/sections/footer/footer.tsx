import React from 'react'

import {
    Text,
    Title,
    Tooltip,
    UnstyledButton,
    useMantineColorScheme,
} from '@mantine/core'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { FaRegMoon } from '@react-icons/all-files/fa/FaRegMoon'
import { FaSun } from '@react-icons/all-files/fa/FaSun'

import footerStyles from './footerStyle'
import { navigate } from 'gatsby'

const Footer: React.FC = () => {
    const { classes } = footerStyles()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    const DrawButtons = (): JSX.Element => {
        return (
            <div className={classes.buttonsContainer}>
                <Tooltip
                    label="Source Code"
                    transition="scale"
                    arrowSize={2}
                    withArrow>
                    <UnstyledButton
                        className={classes.buttonIcon}
                        onClick={() => navigate('https://github.com/', {})}>
                        <SiGithub size={24} color="#fff" />
                    </UnstyledButton>
                </Tooltip>
                <Tooltip
                    label={colorScheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
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
        )
    }

    return (
        <footer className={classes.container}>
            <div className={classes.section}>
                <Title className={classes.titleText} order={2}>
                    Rainbow 6 Stats
                </Title>
                <Title className={classes.titleText} order={4}>
                    Created by:
                </Title>
                <Text
                    className={classes.normalText}
                    component="a"
                    href="https://github.com/Xxsource98"
                    target="_blank"
                    size="md">
                    Xxsource98
                </Text>
                <DrawButtons />
            </div>
        </footer>
    )
}

export default Footer
