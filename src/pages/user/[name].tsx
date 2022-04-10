import { navigate } from 'gatsby'
import React, { useCallback, useEffect, useState } from 'react'

import { RainbowSixUserDataType } from 'rainbow-six-user-data'
import PageWrapper from '../../components/pageWrapper'

// @ts-ignore
import { createStyles, Loader, LoadingOverlay } from '@mantine/core'
import UserPageData, {
    FailStatusType,
} from '../../components/userPage/userPageData'
import { useScrollLock } from '@mantine/hooks'

import { useQueryParam, StringParam } from 'use-query-params'
import axios from 'axios'

type UserType = {
    params: {
        name: string
    }
}

const User: React.FC<UserType> = ({ params }) => {
    const [failStatus, setFailStatus] = useState<FailStatusType>({
        userNotFound: false,
        failToFetch: false,
    })
    const [isLoading, setLoading] = useState<boolean>(true)
    const [currentUserData, setCurrentUserData] =
        useState<RainbowSixUserDataType | null>(null)
    const [, setCurrentSection] = useState<string>('stats')
    const [, setScrollLocked] = useScrollLock()
    const { classes } = useStyles()
    const [section, setSection] = useQueryParam('section', StringParam)
    const [platform] = useQueryParam('platform', StringParam)

    const FetchUserData = useCallback(async () => {
        setScrollLocked(true)
        const platformString =
            platform === 'pc' ? 'pc' : platform === 'ps4' ? 'ps4' : 'xone'

        const playerID = await axios
            .get(`/api/player-ids/${params.name}?platform=${platformString}`)
            .then(data => {
                return data.data[0]
            })
            .catch(() =>
                setFailStatus({
                    userNotFound: false,
                    failToFetch: true,
                })
            )

        if (playerID) {
            const playerData = await axios
                .get(`/api/player-data/${playerID}`)
                .then(data => {
                    return data.data
                })
                .catch(() =>
                    setFailStatus({
                        userNotFound: false,
                        failToFetch: true,
                    })
                )

            if (playerData.success) {
                setCurrentUserData(playerData.data)
            }
        } else {
            setFailStatus({
                userNotFound: true,
                failToFetch: false,
            })
        }

        setScrollLocked(false)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (platform === undefined) {
            navigate('/', {
                replace: true,
            })
        } else {
            FetchUserData()
        }

        if (section === undefined) {
            setSection('stats')
        } else {
            setCurrentSection(section || 'stats')
        }
    }, [])

    const LoadingElement = (): JSX.Element => {
        return (
            <div className={classes.loadingContainer}>
                <Loader />
            </div>
        )
    }

    return (
        <React.Fragment>
            <LoadingOverlay
                visible={isLoading}
                loader={<LoadingElement />}
                transitionDuration={500}
            />
            <PageWrapper
                customGradient={{
                    background: '#141e30',
                    gradient: 'linear-gradient(to right, #141e30, #243b55)',
                }}
                freezedNavbar>
                <UserPageData
                    user={currentUserData as RainbowSixUserDataType}
                    platform={platform || 'pc'}
                    failStatus={failStatus}
                    section={section as string}
                />
            </PageWrapper>
        </React.Fragment>
    )
}

export default User

const useStyles = createStyles(theme => ({
    loadingContainer: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        background:
            theme.colorScheme === 'light'
                ? theme.colors.gray[1]
                : theme.colors.dark[4],
        zIndex: 100,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
