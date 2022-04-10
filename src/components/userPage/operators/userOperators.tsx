import React from 'react'
import { Image, Text, Group, Table, Accordion } from '@mantine/core'

import { RainbowSixOperatorType } from 'rainbow-six-user-data'
import { StringParam, useQueryParam } from 'use-query-params'
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle'
import { GetCTUImage, SecondsToStringTime, Section } from '../../utils'
import userOperatorsStyles from './userOperators.style'

type UserOperatorsType = {
    operators: RainbowSixOperatorType[]
}

const UserOperators: React.FC<UserOperatorsType> = ({ operators }) => {
    const { classes } = userOperatorsStyles()
    const [operatorQuery] = useQueryParam('operator', StringParam)

    const DrawOperatorsAccordion = (): JSX.Element => {
        let initialIndex = -1

        if (operators) {
            const accordionItems = operators?.map((value, index) => {
                if (operatorQuery === value.operator.name) initialIndex = index

                const AccordionElementLabel = (): JSX.Element => {
                    const operator = value.operator

                    return (
                        <Group
                            position="apart"
                            className={classes.operatorBoxElement}>
                            <Group>
                                <Image
                                    src={operator.images.badge}
                                    width={58}
                                    alt={`${operator.name}-image`}
                                />
                                <Group direction="column">
                                    <Text sx={{ color: '#C1C2C5' }}>
                                        {operator.name}
                                    </Text>
                                    <Group sx={{ marginTop: -15 }}>
                                        <AiOutlineClockCircle color="#fff" />
                                        <Text
                                            size="sm"
                                            className={
                                                classes.operatorBoxPLaytime
                                            }>
                                            {SecondsToStringTime(
                                                value.playtime
                                            )}
                                        </Text>
                                    </Group>
                                </Group>
                            </Group>
                            <Group className={classes.operatorBoxCTU}>
                                <Text sx={{ color: '#C1C2C5' }}>
                                    {operator.ctu}
                                </Text>
                                <Image
                                    src={GetCTUImage(operator.ctu)}
                                    width={36}
                                    alt="image"
                                />
                            </Group>
                        </Group>
                    )
                }

                const DrawOperatorAbilities = (): JSX.Element => {
                    const abilities = value.abilities.map(ability => {
                        return (
                            <Text key={ability.key}>
                                {ability.title}: {ability.value}
                            </Text>
                        )
                    })

                    return <React.Fragment>{abilities}</React.Fragment>
                }

                const DrawRows = (): JSX.Element => {
                    return (
                        <tr key={index}>
                            <td>
                                <Text>
                                    {value.kills} / {value.deaths} ({value.kd})
                                </Text>
                            </td>
                            <td>
                                <Text>
                                    {value.wins} / {value.losses} ({value.wl})
                                </Text>
                            </td>
                            <td>
                                <Text>{value.experience} XP</Text>
                            </td>
                            <td>
                                <Text>{value.headshots}</Text>
                            </td>
                            <td>
                                <Text>{value.meleeKills}</Text>
                            </td>
                            <td>
                                <DrawOperatorAbilities />
                            </td>
                        </tr>
                    )
                }

                const AccordionItemClassName = `${
                    classes.operatorsAccordionItem
                }${
                    operatorQuery === value.operator.name
                        ? ' active-operator'
                        : ''
                }`

                return (
                    <Accordion.Item
                        label={<AccordionElementLabel />}
                        className={AccordionItemClassName}
                        key={index}>
                        <Table className={classes.operatorsTable}>
                            <thead>
                                <tr>
                                    <th>Kills / Deaths</th>
                                    <th>Wins / Losses</th>
                                    <th>Experience</th>
                                    <th>Headshots</th>
                                    <th>Melee Kills</th>
                                    <th>Abilities</th>
                                </tr>
                            </thead>
                            <tbody>
                                <DrawRows />
                            </tbody>
                        </Table>
                    </Accordion.Item>
                )
            })

            const ScrollToActiveOperator = () => {
                const selector = document.querySelector('.active-operator')

                if (selector) {
                    selector.scrollIntoView({
                        behavior: 'smooth',
                    })
                }
            }

            return (
                <Accordion
                    className={classes.operatorsAccordion}
                    initialItem={initialIndex}
                    onLoad={ScrollToActiveOperator}>
                    {accordionItems}
                </Accordion>
            )
        }

        return <React.Fragment />
    }

    return (
        <Section title="Operators" className={classes.operatorsWrapper}>
            <DrawOperatorsAccordion />
        </Section>
    )
}

export default UserOperators
