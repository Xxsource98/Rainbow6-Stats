import React, { useMemo } from 'react'
import { Link } from 'gatsby'
import { createStyles, Text, Title } from '@mantine/core'
import { RainbowSixUserDataType } from 'rainbow-six-user-data'

import UserData from './userData/userData'
import UserStats from './userStats/userStats'

import { BiError } from '@react-icons/all-files/bi/BiError'
import UserOperators from './operators/userOperators'
import UserSeasons from './seasons/userSeasons'

export type FailStatusType = {
    userNotFound: boolean
    failToFetch: boolean
}

type UserPageDataType = {
    user: RainbowSixUserDataType
    platform?: string
    failStatus: FailStatusType
    section: string
}

const UserPageData: React.FC<UserPageDataType> = ({
    user,
    platform,
    failStatus,
    section,
}) => {
    const { classes } = useStyles()
    const userOperatorsArray = useMemo(() => {
        return user?.operators
            .sort((a, b) => {
                return a.playtime > b.playtime ? -1 : 1
            })
            .flat()
    }, [user])
    const userOperatorsShortArray = useMemo(() => {
        return user?.operators
            .sort((a, b) => {
                return a.playtime > b.playtime ? -1 : 1
            })
            .splice(0, 7)
    }, [user])

    const DrawUserAllData = (): JSX.Element => {
        switch (section) {
            case 'stats':
                return (
                    <UserStats
                        user={user}
                        operators={userOperatorsShortArray}
                    />
                )
            case 'operators':
                return <UserOperators operators={userOperatorsArray} />
            case 'seasons':
                return <UserSeasons user={user} />

            default:
                return (
                    <UserStats
                        user={user}
                        operators={userOperatorsShortArray}
                    />
                )
        }
    }

    if (failStatus.userNotFound) {
        return (
            <div className={classes.container}>
                <div className={classes.errorWrapper}>
                    <BiError size={32} />
                    <Title order={1}>Error</Title>
                    <Text size="lg">Player Not Found</Text>
                    <Link to="/" className={classes.errorBackText}>
                        <Text>Back to Home</Text>
                    </Link>
                </div>
            </div>
        )
    }

    if (failStatus.failToFetch) {
        return (
            <div className={classes.container}>
                <div className={classes.errorWrapper}>
                    <BiError size={32} />
                    <Title order={1}>Error</Title>
                    <Text size="lg">Failed to Fetch Data</Text>
                    <Link to="/" className={classes.errorBackText}>
                        <Text>Back to Home</Text>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <UserData user={user} platform={platform as string} />
                <DrawUserAllData />
            </div>
        </div>
    )
}

export default UserPageData

const useStyles = createStyles(() => ({
    container: {
        position: 'relative',
        paddingTop: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 100,
    },
    wrapper: {
        width: '90%',
    },
    errorWrapper: {
        position: 'absolute',
        top: 0,
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        height: '100vh',
    },
    errorBackText: {
        textDecoration: 'none',
        color: '#BFBFBF',
        marginTop: 20,
    },
    groupWidget: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: 'rgba(0, 0, 0, 0.10)',
        padding: 20,
        borderRadius: 10,
    },
    insideGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    groupTitle: {
        color: '#fff',
        fontWeight: 500,
    },
}))
