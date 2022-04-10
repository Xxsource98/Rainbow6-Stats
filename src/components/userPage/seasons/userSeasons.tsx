import React from 'react'

import {
    RainbowSixSeasonalStatsType,
    RainbowSixUserDataType,
} from 'rainbow-six-user-data'

import userSeasonsStyles from './userSeasons.style'
import { Group, Table, Text, Image } from '@mantine/core'
import { FormatDate, Section } from '../../utils'

type UserSeasonsType = {
    user: RainbowSixUserDataType
}

const UserSeasons: React.FC<UserSeasonsType> = ({ user }) => {
    const { classes } = userSeasonsStyles()

    const Bold: React.FC = ({ children }) => (
        <span className={classes.seasonsBoldText}>{children}</span>
    )

    const DrawSeasonsAccordion = (): JSX.Element => {
        const DrawTableItems = (): JSX.Element => {
            const TableElements = user?.seasonalStats?.map((value, index) => {
                let currentSeason: RainbowSixSeasonalStatsType | null = null

                switch (user.region) {
                    case 'apac':
                        currentSeason = value.apac
                        break
                    case 'emea':
                        currentSeason = value.emea
                        break
                    case 'ncsa':
                        currentSeason = value.ncsa
                        break
                    default:
                        currentSeason = value.apac
                        break
                }

                const KD = (currentSeason.kills / currentSeason.deaths).toFixed(
                    2
                )
                const WL = (currentSeason.wins / currentSeason.losses).toFixed(
                    2
                )

                const DrawMMR = (): JSX.Element => {
                    if (currentSeason?.nextMMR === 0) {
                        return (
                            <Text>
                                <Bold>{currentSeason.MMR} (MAX)</Bold>
                            </Text>
                        )
                    }

                    return (
                        <Text>
                            <Bold>{currentSeason?.MMR}</Bold> /{' '}
                            {currentSeason?.nextMMR}
                        </Text>
                    )
                }

                return (
                    <tr key={index}>
                        <td
                            style={{
                                color: value.primaryColor,
                                fontWeight: 600,
                            }}>
                            {value.seasonName}
                        </td>
                        <td>
                            <DrawMMR />
                        </td>
                        <td>
                            <Group position="left">
                                <Image
                                    src={currentSeason.rank.imageURL}
                                    alt={`${index}-image-rank`}
                                    width={38}
                                    title={
                                        currentSeason.rank.name === 'Champions'
                                            ? `Rank Position: ${currentSeason.championsRankPosition}`
                                            : ''
                                    }
                                />
                                <Bold>{currentSeason.rank.name}</Bold>
                            </Group>
                        </td>
                        <td>
                            <Group position="left">
                                <Image
                                    src={currentSeason.maxRank.imageURL}
                                    alt={`${index}-image-max-rank`}
                                    width={38}
                                    title={
                                        currentSeason.maxRank.name ===
                                        'Champions'
                                            ? `Rank Position: ${currentSeason.championsRankPosition}`
                                            : ''
                                    }
                                />
                                <Text>{currentSeason.maxRank.name}</Text>
                            </Group>
                        </td>
                        <td>
                            <Bold>{currentSeason.kills || 'N/A'}</Bold> /{' '}
                            <Bold>{currentSeason.deaths || 'N/A'}</Bold> (
                            {KD === 'NaN' || KD === '0' ? '-' : KD})
                        </td>
                        <td>
                            <Bold>{currentSeason.wins || 'N/A'}</Bold> /{' '}
                            <Bold>{currentSeason.losses || 'N/A'}</Bold> (
                            {WL === 'NaN' || WL === '0' ? '-' : WL})
                        </td>
                        <td>{FormatDate(value.startDate, true)}</td>
                        <td>{FormatDate(value.endDate, true)}</td>
                    </tr>
                )
            })

            return <tbody>{TableElements}</tbody>
        }

        return (
            <Table className={classes.seasonsTable}>
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>MMR</th>
                        <th>Rank</th>
                        <th>Max Rank</th>
                        <th>Kills / Deaths</th>
                        <th>Win / Losses</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <DrawTableItems />
            </Table>
        )
    }

    return (
        <Section title="Seasons" className={classes.seasonsWrapper}>
            <DrawSeasonsAccordion />
        </Section>
    )
}

export default UserSeasons
