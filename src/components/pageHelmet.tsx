import React from 'react'
import Helmet from 'react-helmet'

type PageHelmetType = {
    title?: string
}

const PageHelmet: React.FC<PageHelmetType> = ({ title, children }) => {
    return (
        <React.Fragment>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
                title={title || 'Rainbow 6 Stats'}
                meta={[
                    {
                        httpEquiv: 'Content-Type',
                        content: 'text/html; charset=utf-8',
                    },
                    {
                        name: 'title',
                        content: 'Rainbow 6 Stats',
                    },
                    {
                        name: 'description',
                        content:
                            "Rainbow 6 Stats is a website that fetch and displaying player's statistics.",
                    },
                    {
                        name: 'keywords',
                        content:
                            'rainbow, six, siege, rainbowsix, rainbowsixsiege, player, players, statistics, stats, ubisoft, uplay, react, gatsby, mantine, mantinedev, github',
                    },
                    {
                        name: 'robots',
                        content: 'index, follow',
                    },
                    {
                        name: 'language',
                        content: 'English',
                    },
                    {
                        name: 'author',
                        content: 'Xxsource98',
                    },
                ]}
            />
            {children}
        </React.Fragment>
    )
}

export default PageHelmet
