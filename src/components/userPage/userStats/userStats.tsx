import React from 'react'
import { Group, Image, Text, Title, UnstyledButton } from '@mantine/core'
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle'
import {
    ChildSection,
    DrawText,
    SecondsToStringTime,
    Section,
} from '../../utils'

import {
    RainbowSixAvailableRegions,
    RainbowSixOperatorType,
    RainbowSixUserDataType,
} from 'rainbow-six-user-data'
import { StringParam, useQueryParam } from 'use-query-params'
import useUserStatsStyle from './userStats.style'

type UserStatsType = {
    user: RainbowSixUserDataType
    operators: RainbowSixOperatorType[]
}

const UserStats: React.FC<UserStatsType> = ({ user, operators }) => {
    const { classes } = useUserStatsStyle()
    const [, setSection] = useQueryParam('section', StringParam)
    const [, setOperatorQuery] = useQueryParam('operator', StringParam)

    const SetOperatorSection = (operatorName: string) => {
        if (operatorName) {
            setSection('operators')
            setOperatorQuery(operatorName)
        }
    }

    const DrawOperators = (): JSX.Element => {
        const operatorsArray = operators?.map((element, index) => {
            const operator = element.operator

            return (
                <UnstyledButton
                    onClick={() => SetOperatorSection(operator.name)}
                    className={classes.operatorBox}
                    key={index}>
                    <Image
                        src={operator.images.badge}
                        width={64}
                        alt={`${operator.name}-image`}
                    />
                    <Group direction="column">
                        <Title order={5} className={classes.operatorBoxText}>
                            {operator.name}
                        </Title>
                        <Group
                            sx={{
                                position: 'relative',
                                marginTop: -15,
                                left: 5,
                            }}>
                            <AiOutlineClockCircle color="#fff" />
                            <Text
                                size="sm"
                                className={classes.operatorBoxPLaytime}>
                                {SecondsToStringTime(element.playtime)}
                            </Text>
                        </Group>
                    </Group>
                </UnstyledButton>
            )
        })

        return (
            <Group
                sx={{
                    position: 'relative',
                    width: ' 100%',
                }}
                direction="column">
                {operatorsArray}
            </Group>
        )
    }

    const DrawOperatorsElement = (): JSX.Element => {
        return (
            <Section title="Operators">
                <DrawOperators />
                <Group
                    sx={{ width: '100%' }}
                    direction="column"
                    align="flex-end">
                    <Text
                        className={classes.textLink}
                        onClick={() => setSection('operators')}>
                        All Operators
                    </Text>
                </Group>
            </Section>
        )
    }

    const DrawRank = (): JSX.Element => {
        const seasonalStats = user?.seasonalStats

        if (seasonalStats) {
            const seasonal = seasonalStats[0]
            const regionIndex = user?.region as RainbowSixAvailableRegions
            const seasonalObject = seasonal ? seasonal[regionIndex] : null

            return (
                <Section title="Rank">
                    <Image
                        className={classes.rankImage}
                        src={seasonalObject?.rank.imageURL}
                        alt="Rank Image"
                    />
                    <Group className={classes.rankContainer} direction="column">
                        <Title order={4} sx={{ marginLeft: 10, color: '#fff' }}>
                            {seasonal?.seasonName}
                        </Title>
                        <DrawText label="Rank" margin>
                            {seasonalObject?.rank.name}
                        </DrawText>
                        <DrawText label="MMR" margin>
                            {seasonalObject?.MMR}
                        </DrawText>
                        <DrawText label="W/L" margin>
                            {seasonalObject?.wins} | {seasonalObject?.losses}
                        </DrawText>
                    </Group>
                    <Group
                        sx={{ width: '100%' }}
                        direction="column"
                        align="flex-end">
                        <Text
                            className={classes.textLink}
                            onClick={() => setSection('seasons')}>
                            All Seasons
                        </Text>
                    </Group>
                </Section>
            )
        }

        return <React.Fragment />
    }

    return (
        <div className={classes.statsWrapper}>
            <div className={classes.leftWrapper}>
                <DrawRank />
                <DrawOperatorsElement />
            </div>
            <div className={classes.gridWrapper}>
                <Section title="General Stats" gridColumn={2}>
                    <DrawText label="Assists" margin>
                        {user?.stats.generalStats.assists}
                    </DrawText>
                    <DrawText label="Barricades Deployed" margin>
                        {user?.stats.generalStats.barricadesDeployed}
                    </DrawText>
                    <DrawText label="Blind Kills" margin>
                        {user?.stats.generalStats.blindKills}
                    </DrawText>
                    <DrawText label="Bullets Fired" margin>
                        {user?.stats.generalStats.bulletsFired}
                    </DrawText>
                    <DrawText label="Bullets Hit" margin>
                        {user?.stats.generalStats.bulletsHit}
                    </DrawText>
                    <DrawText label="Distance Travelled" margin>
                        {user?.stats.generalStats.distanceTravelled / 1000}
                        km
                    </DrawText>
                    <DrawText label="Draws" margin>
                        {user?.stats.generalStats.draws}
                    </DrawText>
                    <DrawText label="Gadgets Destroyed" margin>
                        {user?.stats.generalStats.gadgetsDestroyed}
                    </DrawText>
                    <DrawText label="Games Played" margin>
                        {user?.stats.generalStats.gamesPlayed}
                    </DrawText>
                    <DrawText label="Losses" margin>
                        {user?.stats.generalStats.losses}
                    </DrawText>
                    <DrawText label="Penetration Kills" margin>
                        {user?.stats.generalStats.penetrationKills}
                    </DrawText>
                    <DrawText label="Rappel Breaches" margin>
                        {user?.stats.generalStats.rappelBreaches}
                    </DrawText>
                    <DrawText label="Reinforcements Deployed" margin>
                        {user?.stats.generalStats.reinforcementsDeployed}
                    </DrawText>
                    <DrawText label="Revives" margin>
                        {user?.stats.generalStats.revives}
                    </DrawText>
                    <DrawText label="Suicides" margin>
                        {user?.stats.generalStats.suicides}
                    </DrawText>
                </Section>
                <Section title="Ranked Stats">
                    <DrawText label="Kills" margin>
                        {user?.stats.rankedStats.kills}
                    </DrawText>
                    <DrawText label="Deaths" margin>
                        {user?.stats.rankedStats.deaths}
                    </DrawText>
                    <DrawText label="KD" margin>
                        {user?.stats.rankedStats.kd}
                    </DrawText>
                    <DrawText label="Wins" margin>
                        {user?.stats.rankedStats.wins}
                    </DrawText>
                    <DrawText label="Losses" margin>
                        {user?.stats.rankedStats.losses}
                    </DrawText>
                    <DrawText label="Games Played" margin>
                        {user?.stats.rankedStats.gamesPlayed}
                    </DrawText>
                    <DrawText label="Play Time" margin>
                        {SecondsToStringTime(user?.stats.rankedStats.playtime)}
                    </DrawText>
                    <DrawText label="Draws" margin>
                        {user?.stats.rankedStats.draws}
                    </DrawText>
                    <DrawText label="WL" margin>
                        {user?.stats.rankedStats.wl}
                    </DrawText>
                </Section>
                <Section title="Other Stats">
                    <DrawText label="Kills" margin>
                        {user?.stats.otherStats.kills}
                    </DrawText>
                    <DrawText label="Deaths" margin>
                        {user?.stats.otherStats.deaths}
                    </DrawText>
                    <DrawText label="KD" margin>
                        {user?.stats.otherStats.kd}
                    </DrawText>
                    <DrawText label="Wins" margin>
                        {user?.stats.otherStats.wins}
                    </DrawText>
                    <DrawText label="Losses" margin>
                        {user?.stats.otherStats.losses}
                    </DrawText>
                    <DrawText label="Games Played" margin>
                        {user?.stats.otherStats.gamesPlayed}
                    </DrawText>
                    <DrawText label="Play Time" margin>
                        {SecondsToStringTime(user?.stats.otherStats.playtime)}
                    </DrawText>
                    <DrawText label="Draws" margin>
                        {user?.stats.otherStats.draws}
                    </DrawText>
                    <DrawText label="WL" margin>
                        {user?.stats.otherStats.wl}
                    </DrawText>
                </Section>
                <Section title="Casual Stats" gridColumn={2}>
                    <DrawText label="Kills" margin>
                        {user?.stats.casualStats.kills}
                    </DrawText>
                    <DrawText label="Deaths" margin>
                        {user?.stats.casualStats.deaths}
                    </DrawText>
                    <DrawText label="KD" margin>
                        {user?.stats.casualStats.kd}
                    </DrawText>
                    <DrawText label="Wins" margin>
                        {user?.stats.casualStats.wins}
                    </DrawText>
                    <DrawText label="Losses" margin>
                        {user?.stats.casualStats.losses}
                    </DrawText>
                    <DrawText label="Games Played" margin>
                        {user?.stats.casualStats.gamesPlayed}
                    </DrawText>
                    <DrawText label="Play Time" margin>
                        {SecondsToStringTime(user?.stats.casualStats.playtime)}
                    </DrawText>
                    <DrawText label="Draws" margin>
                        {user?.stats.casualStats.draws}
                    </DrawText>
                    <DrawText label="WL" margin>
                        {user?.stats.casualStats.wl}
                    </DrawText>
                </Section>
                <Section title="Gamemode Stats" gridColumn={3}>
                    <Group
                        sx={{
                            position: 'relative',
                            width: '100%',
                            justifyContent: 'space-around',
                            boxSizing: 'border-box',
                            padding: 10,
                        }}
                        direction="row"
                        align="center">
                        <ChildSection title="Bomb" width={300}>
                            <DrawText label="Best Score" margin>
                                {user?.stats.gamemodeStats.bomb.bestScore}
                            </DrawText>
                            <DrawText label="Games Played" margin>
                                {user?.stats.gamemodeStats.bomb.gamesPlayed}
                            </DrawText>
                            <DrawText label="Wins" margin>
                                {user?.stats.gamemodeStats.bomb.wins}
                            </DrawText>
                            <DrawText label="Losses" margin>
                                {user?.stats.gamemodeStats.bomb.losses}
                            </DrawText>
                            <DrawText label="W/L" margin>
                                {user?.stats.gamemodeStats.bomb.wl}
                            </DrawText>
                            <DrawText label="Playtime" margin>
                                {SecondsToStringTime(
                                    user?.stats.gamemodeStats.bomb.playtime
                                )}
                            </DrawText>
                        </ChildSection>
                        <ChildSection title="Hostage" width={300}>
                            <DrawText label="Best Score" margin>
                                {user?.stats.gamemodeStats.hostage.bestScore}
                            </DrawText>
                            <DrawText label="Games Played" margin>
                                {user?.stats.gamemodeStats.hostage.gamesPlayed}
                            </DrawText>
                            <DrawText label="Wins" margin>
                                {user?.stats.gamemodeStats.hostage.wins}
                            </DrawText>
                            <DrawText label="Losses" margin>
                                {user?.stats.gamemodeStats.hostage.losses}
                            </DrawText>
                            <DrawText label="W/L" margin>
                                {user?.stats.gamemodeStats.hostage.wl}
                            </DrawText>
                            <DrawText label="Playtime" margin>
                                {SecondsToStringTime(
                                    user?.stats.gamemodeStats.hostage.playtime
                                )}
                            </DrawText>
                        </ChildSection>
                        <ChildSection title="Secure Area" width={300}>
                            <DrawText label="Best Score" margin>
                                {user?.stats.gamemodeStats.secureArea.bestScore}
                            </DrawText>
                            <DrawText label="Games Played" margin>
                                {
                                    user?.stats.gamemodeStats.secureArea
                                        .gamesPlayed
                                }
                            </DrawText>
                            <DrawText label="Wins" margin>
                                {user?.stats.gamemodeStats.secureArea.wins}
                            </DrawText>
                            <DrawText label="Losses" margin>
                                {user?.stats.gamemodeStats.secureArea.losses}
                            </DrawText>
                            <DrawText label="W/L" margin>
                                {user?.stats.gamemodeStats.secureArea.wl}
                            </DrawText>
                            <DrawText label="Playtime" margin>
                                {SecondsToStringTime(
                                    user?.stats.gamemodeStats.secureArea
                                        .playtime
                                )}
                            </DrawText>
                        </ChildSection>
                    </Group>
                </Section>
            </div>
        </div>
    )
}

export default UserStats
