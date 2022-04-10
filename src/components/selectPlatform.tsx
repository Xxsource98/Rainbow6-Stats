import React, { useContext } from 'react'
import { createStyles, Group, Tooltip, UnstyledButton } from '@mantine/core'
import { FaPlaystation } from '@react-icons/all-files/fa/FaPlaystation'
import { FaWindows } from '@react-icons/all-files/fa/FaWindows'
import { FaXbox } from '@react-icons/all-files/fa/FaXbox'

import CurrentPlatformContext from '../context/currentPlatform'

type SelectPlatformType = {
    small?: boolean
}

const SelectPlatform: React.FC<SelectPlatformType> = ({ small }) => {
    const { classes } = useStyles()
    const { currentPlatform, changePlatform } = useContext(
        CurrentPlatformContext
    )

    const DrawPlatform = ({ platform }: { platform: string }): JSX.Element => {
        switch (platform) {
            case 'pc': {
                return (
                    <Tooltip
                        label={'PC'}
                        transition="scale"
                        arrowSize={2}
                        withArrow>
                        <UnstyledButton
                            className={classes.platformButton}
                            onClick={() => changePlatform?.('pc')}>
                            <FaWindows
                                size={small ? 24 : 48}
                                color={
                                    currentPlatform === 'pc'
                                        ? '#fff'
                                        : '#adadad'
                                }
                            />
                        </UnstyledButton>
                    </Tooltip>
                )
            }

            case 'ps4': {
                return (
                    <Tooltip
                        label={'Playstation'}
                        transition="scale"
                        arrowSize={2}
                        withArrow>
                        <UnstyledButton
                            className={classes.platformButton}
                            onClick={() => changePlatform?.('ps4')}>
                            <FaPlaystation
                                size={small ? 24 : 48}
                                color={
                                    currentPlatform === 'ps4'
                                        ? '#fff'
                                        : '#adadad'
                                }
                            />
                        </UnstyledButton>
                    </Tooltip>
                )
            }

            case 'xone': {
                return (
                    <Tooltip
                        label={'Xbox One'}
                        transition="scale"
                        arrowSize={2}
                        withArrow>
                        <UnstyledButton
                            className={classes.platformButton}
                            onClick={() => changePlatform?.('xone')}>
                            <FaXbox
                                size={small ? 24 : 48}
                                color={
                                    currentPlatform === 'xone'
                                        ? '#fff'
                                        : '#adadad'
                                }
                            />
                        </UnstyledButton>
                    </Tooltip>
                )
            }

            default:
                return <React.Fragment />
        }
    }

    return (
        <Group noWrap>
            <DrawPlatform platform="pc" />
            <DrawPlatform platform="ps4" />
            <DrawPlatform platform="xone" />
        </Group>
    )
}

export default SelectPlatform

const useStyles = createStyles(() => ({
    platformButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))
