import React from 'react'

import Section from '../section/section'

const AboutGame: React.FC = () => {
    return (
        <Section
            title="About Game"
            description={`
        Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of an objective within a room. The title has no campaign but features a series of short, offline missions called, "situations" that can be played solo. These missions have a loose narrative, focusing on recruits going through training to prepare them for future encounters with the "White Masks", a terrorist group that threatens the safety of the world.
        `}
            button={{
                buttonText: 'Read More',
                buttonHref:
                    'https://en.wikipedia.org/wiki/Tom_Clancy%27s_Rainbow_Six_Siege',
            }}
        />
    )
}

export default AboutGame
