import React, {
    forwardRef,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import { Avatar, Group, Select, Text, Badge } from '@mantine/core'

import CurrentPlatformContext from '../context/currentPlatform'
import { navigate } from 'gatsby'
import axios, { AxiosResponse } from 'axios'

type UserDataType = {
    image: string
    label: string
    value: string
    platform: string
}

type FindInputType = {
    darkTheme?: boolean
}

const InputDarkStyle: StyleType = theme => ({
    width: 250,

    [`.mantine-Select-input`]: {
        color: theme.colors.dark[0],
        backgroundColor: theme.colors.dark[8],
        border: `1px solid ${theme.colors.dark[5]}`,

        '&::placeholder': {
            color: theme.colors.dark[3],
        },
    },
    [`.mantine-Select-icon`]: {
        color: theme.colors.dark[2],
    },
})

const FindInput: React.FC<FindInputType> = ({ darkTheme }) => {
    let timer: ReturnType<typeof setTimeout>
    const { currentPlatform } = useContext(CurrentPlatformContext)
    const [isInputEmpty, setInputEmpty] = useState<boolean>(true)
    const [userNotFound, setUserNotFound] = useState<boolean>(false)
    const [foundUsers, setFoundUsers] = useState<UserDataType[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const FindUser = (username: string | null) => {
        if (username) {
            navigate(
                `/user/${username}?platform=${currentPlatform}&section=stats`
            )
        }
    }

    const FindUsers = async (input: string): Promise<void> => {
        if (input && input !== '') {
            const platformID =
                currentPlatform === 'pc'
                    ? 'pc'
                    : currentPlatform === 'ps4'
                    ? 'ps4'
                    : 'xone'

            const promises = await axios
                .get(`/api/player-ids/${input}?platform=${platformID}`)
                .then(playersIDS => {
                    const data = playersIDS.data
                    const axiosRequests: Promise<
                        AxiosResponse<unknown, unknown>
                    >[] = []

                    if (data) {
                        data.forEach((id: string) => {
                            axiosRequests.push(
                                axios.get(`/api/player-data/${id}`)
                            )
                        })
                    }

                    return axiosRequests
                })
                .catch(() => {
                    setUserNotFound(true)
                })

            if (promises) {
                const allDatas = await axios
                    .all(promises)
                    .then(values => {
                        const foundUsers: UserDataType[] = []

                        values.forEach(user => {
                            const data = user.data

                            // @ts-ignore
                            if (data.success) {
                                // @ts-ignore
                                const playerData = data.data

                                foundUsers.push({
                                    label: playerData.username,
                                    value: playerData.username,
                                    image: playerData.avatarUrl,
                                    platform: platformID,
                                })
                            }
                        })

                        return foundUsers
                    })
                    .catch(ex => console.error(ex))

                setFoundUsers((allDatas as UserDataType[]) || [])
            }
        }
    }

    const DoneTyping = async () => {
        const input = inputRef.current?.value

        if (input === '') {
            setInputEmpty(true)
            setUserNotFound(false)
        } else {
            setInputEmpty(false)
            setUserNotFound(false)
        }

        setFoundUsers([])

        await FindUsers(input || '')
    }

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.addEventListener('keyup', () => {
                clearTimeout(timer)
                timer = setTimeout(DoneTyping, 1000)
            })
        }
    }, [inputRef])

    const SelectItem = forwardRef<HTMLDivElement, UserDataType>(
        ({ image, label, value, platform, ...others }, ref) => {
            return (
                <div ref={ref} {...others}>
                    <Group noWrap position="apart">
                        <Avatar src={image} alt={`${label}-avatar`} />
                        <Text size="sm">{value}</Text>
                        <Badge
                            variant="filled"
                            color={
                                platform === 'pc'
                                    ? 'violet'
                                    : platform === 'ps4'
                                    ? 'blue'
                                    : 'green'
                            }>
                            {platform}
                        </Badge>
                    </Group>
                </div>
            )
        }
    )

    return (
        <Select
            ref={inputRef}
            placeholder="Username"
            data={foundUsers}
            nothingFound={
                userNotFound
                    ? 'User Not Found'
                    : isInputEmpty
                    ? 'Input Username'
                    : 'Searching...'
            }
            radius="md"
            searchable
            transition="pop"
            transitionDuration={80}
            transitionTimingFunction="ease"
            itemComponent={SelectItem}
            onChange={e => FindUser(e || null)}
            onDropdownClose={() => {
                setInputEmpty(true)
                setUserNotFound(false)
                setFoundUsers([])
            }}
            onInput={i =>
                i.currentTarget.value === ''
                    ? setInputEmpty(true)
                    : setInputEmpty(false)
            }
            sx={
                darkTheme
                    ? InputDarkStyle
                    : {
                          width: 250,
                      }
            }
        />
    )
}

export default FindInput
