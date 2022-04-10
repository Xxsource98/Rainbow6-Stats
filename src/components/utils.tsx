import React from 'react'
import { Group, Text, Title, TitleOrder } from '@mantine/core'

type DrawTextType = {
    label: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    margin?: boolean
}

type SectionType = {
    title: string
    className?: string
    gridColumn?: number
    titleSize?: TitleOrder
}

type ChildSectionType = {
    title: string
    width?: number | string
}

export const SecondsToStringTime = (
    secondsTime: number,
    secondDraw?: boolean
): string => {
    const hour = Math.floor(secondsTime / 3600)
    const minutes = Math.floor((secondsTime % 3600) / 60)
    const seconds = Math.floor((secondsTime % 3600) % 60)

    const hourString = `0${hour}`.slice(-2)
    const minutesString = `0${minutes}`.slice(-2)
    const secondsString = `0${seconds}`.slice(-2)

    if (secondDraw) {
        return `${hourString}h ${minutesString}m ${secondsString}s`
    }

    return `${hourString}:${minutesString}:${secondsString}`
}

export const GetCTUImage = (name: string): string => {
    if (name) {
        switch (name) {
            case 'Navy SEALs':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/5/59/Navy_SEALs_Logo.png'
            case 'Spetsnaz':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/b/be/Spetsnaz.png'
            case 'GSG9':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/8/8a/GSG_9.png'
            case 'FBI SWAT':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/b/b6/FBI.png'
            case 'GIGR':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/7/7d/GIGR.png'
            case 'GSUTR':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/f/f1/GSUTR.png'
            case 'JTF2':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/8/80/JTF-2logo.png'
            case 'CBRN':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/9/9c/CBRN.png'
            case 'GEO':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/7/70/GEO.png'
            case 'GIGN':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/d/d1/GIGN_patch.png'
            case 'SASR':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/b/b4/SASR_bis.png'
            case 'BOPE':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/4/46/BOPE.png'
            case 'SAT':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/9/97/SAT_v2.png'
            case 'SDU':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/b/b4/SDU.png'
            case 'SAS':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/4/48/SAS.png'
            case 'Nighthaven':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/c/c0/NIGHTHAVEN_patch.png'
            case '707th SMB':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/2/27/707th_SMB.png'
            case 'APCA':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/8/88/APCA.png'
            case 'Feurzas Especiales':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/f/f4/FES.png'
            case 'Jaeger Corps':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/a/ad/Jaeger.png'
            case 'Secret Service':
                return 'https://static.wikia.nocookie.net/rainbowsix/images/7/7a/USSS.png'

            default:
                return 'https://static.wikia.nocookie.net/rainbowsix/images/b/be/Spetsnaz.png'
        }
    }

    return ''
}

export const DrawText: React.FC<DrawTextType> = ({
    label,
    size,
    margin,
    children,
}) => {
    return (
        <Text
            sx={{
                color: '#fff',
                fontWeight: 400,

                [`> span`]: {
                    fontWeight: 300,
                },
                marginLeft: margin ? 10 : 0,
            }}
            size={size || 'md'}>
            {label}: <span>{children}</span>
        </Text>
    )
}

export const Section: React.FC<SectionType> = ({
    title,
    titleSize,
    className,
    gridColumn,
    children,
}) => {
    return (
        <Group
            className={`${className || ''}`}
            sx={{
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'flex-start',
                background: 'rgba(0, 0, 0, 0.10)',
                padding: 20,
                borderRadius: 10,
                gridColumn: gridColumn ? `span ${gridColumn}` : 0,
            }}
            direction="column">
            <Title order={titleSize || 2} sx={{ color: '#fff' }}>
                {title}
            </Title>
            <Group
                sx={{
                    position: 'relative',
                    width: '100%',
                }}
                direction="column">
                {children}
            </Group>
        </Group>
    )
}

export const ChildSection: React.FC<ChildSectionType> = ({
    title,
    width,
    children,
}) => {
    return (
        <Group
            direction="column"
            sx={{
                boxSizing: 'border-box',
                padding: 10,
                width: width,
            }}>
            <Title order={4} sx={{ color: '#fff' }}>
                {title}
            </Title>
            <Group
                sx={{
                    position: 'relative',
                    width: '100%',
                }}
                direction="column">
                {children}
            </Group>
        </Group>
    )
}

export const FormatDate = (
    date: Date | null,
    withoutHours?: boolean
): string => {
    if (date) {
        const ToValidString = (value: string | number): string => {
            const string = `${value}`

            return `0${string}`.slice(-2)
        }
        if (date) {
            const newDate = new Date(date)

            const fixedDate = {
                day: ToValidString(newDate?.getDate()),
                month: ToValidString(newDate?.getMonth() + 1),
                year: newDate?.getFullYear(),
                hour: ToValidString(newDate?.getHours()),
                minutes: ToValidString(newDate?.getMinutes()),
                seconds: ToValidString(newDate?.getSeconds()),
            }

            if (withoutHours) {
                return `${fixedDate.day}.${fixedDate.month}.${fixedDate.year}`
            }

            return `${fixedDate.day}.${fixedDate.month}.${fixedDate.year} ${fixedDate.hour}:${fixedDate.minutes}:${fixedDate.seconds}`
        }
    }

    return '-'
}
