import React, { useCallback, useEffect, useState } from 'react'
import {
    Group,
    Image,
    RingProgress,
    Tabs,
    TabsProps,
    Title,
} from '@mantine/core'
import { DrawText, FormatDate } from '../../utils'

import { FaWindows } from '@react-icons/all-files/fa/FaWindows'
import { FaPlaystation } from '@react-icons/all-files/fa/FaPlaystation'
import { FaXbox } from '@react-icons/all-files/fa/FaXbox'
import { RainbowSixUserDataType } from 'rainbow-six-user-data'
import { StringParam, useQueryParam } from 'use-query-params'
import useUserDataStyles from './userData.style'

type UserDataType = {
    user: RainbowSixUserDataType
    platform: string
}

const ProfilePictureSize = 128

const UserData: React.FC<UserDataType> = ({ user, platform }) => {
    const { classes } = useUserDataStyles()
    const lootboxProb = user?.lootboxProbability / 100 || 0
    const [activeTab, setActiveTab] = useState<number>(0)
    const [section, setSection] = useQueryParam('section', StringParam)
    const [, setOperatorQuery] = useQueryParam('operator', StringParam)

    const SetActiveTabSection = useCallback(() => {
        if (section) {
            switch (section) {
                case 'stats':
                    setActiveTab(0)
                    break
                case 'operators':
                    setActiveTab(1)
                    break
                case 'seasons':
                    setActiveTab(2)
                    break
            }
        }
    }, [section])

    useEffect(() => {
        SetActiveTabSection()
    }, [section])

    const DrawPlatform = (): JSX.Element => {
        switch (platform) {
            case 'pc': {
                return (
                    <FaWindows
                        color="#fff"
                        size={48}
                        title="Steam &amp; Ubisoft"
                    />
                )
            }

            case 'ps4': {
                return (
                    <FaPlaystation
                        color="#fff"
                        size={48}
                        title="PlayStation 4 | PlayStation 5"
                    />
                )
            }

            case 'xone': {
                return (
                    <FaXbox
                        color="#fff"
                        size={48}
                        title="Xbox One | Xbox Series X"
                    />
                )
            }

            default:
                return <React.Fragment />
        }
    }

    const StyledTabs = (props: TabsProps): JSX.Element => {
        return (
            <Tabs
                variant="unstyled"
                styles={theme => ({
                    tabControl: {
                        backgroundColor: '#1A1B1E4A',
                        color: theme.colors.dark[0],
                        fontSize: theme.fontSizes.md,
                        padding: `15px 25px`,
                        transition: 'all 0.3s ease',

                        '&:not(:first-of-type)': {
                            borderLeft: 0,
                        },

                        '&:first-of-type': {
                            borderTopLeftRadius: theme.radius.md,
                            borderBottomLeftRadius: theme.radius.md,
                        },

                        '&:last-of-type': {
                            borderTopRightRadius: theme.radius.md,
                            borderBottomRightRadius: theme.radius.md,
                        },

                        [`@media (max-width: ${theme.breakpoints.xs + 90}px)`]:
                            {
                                padding: '15px 10px',
                            },
                    },

                    tabActive: {
                        backgroundColor: '#304d6e',
                        color: '#fff',
                    },
                })}
                {...props}
            />
        )
    }

    const HandleTabChange = (index: number): void => {
        switch (index) {
            case 0:
                setSection('stats')
                break
            case 1: {
                setOperatorQuery('')
                setSection('operators')
                break
            }
            case 2:
                setSection('seasons')
                break
        }
    }

    const DrawUpdateTime = (): JSX.Element => {
        return (
            <React.Fragment>
                <DrawText label="Last Update">
                    {FormatDate(user?.lastUpdated)}
                </DrawText>
                <DrawText label="Next Update">
                    {FormatDate(user?.updateTime)}
                </DrawText>
            </React.Fragment>
        )
    }

    return (
        <Group
            className={`${classes.groupWidget} ${classes.userWidgetContainer}`}>
            <Group className={classes.userWidgetSection}>
                <Group
                    direction="column"
                    sx={{
                        alignItems: 'flex-start',
                        height: ProfilePictureSize + 30,
                    }}>
                    <Image
                        src={user?.avatarUrl}
                        alt="user-profile"
                        width={ProfilePictureSize}
                    />
                </Group>
                <Group className={classes.infoBox} direction="column">
                    <Title order={2} className={classes.groupTitle}>
                        Player&apos;s Info
                    </Title>
                    <DrawText label="Username">{user?.username}</DrawText>
                    <DrawText label="Level">
                        {user?.level} ({user?.totalXP} XP)
                    </DrawText>
                    <Group>
                        <RingProgress
                            sections={[
                                { value: lootboxProb, color: '#68b5e8' },
                                {
                                    value: 100 - lootboxProb,
                                    color: '#31343a',
                                },
                            ]}
                            size={32}
                            sx={{ marginRight: -10 }}
                        />
                        <DrawText label="Lootbox Probability" size="md">
                            {lootboxProb}%
                        </DrawText>
                    </Group>
                </Group>
            </Group>
            <Group
                className={`${classes.userWidgetSection} ${classes.rightBox}`}>
                <DrawPlatform />
                <DrawUpdateTime />
                <StyledTabs onTabChange={HandleTabChange} active={activeTab}>
                    <Tabs.Tab label="Stats"></Tabs.Tab>
                    <Tabs.Tab label="Operators"></Tabs.Tab>
                    <Tabs.Tab label="Seasons"></Tabs.Tab>
                </StyledTabs>
            </Group>
        </Group>
    )
}

export default UserData
