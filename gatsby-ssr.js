import React from 'react'
import PageProvider from './src/context/pageProvider'

export function wrapPageElement({ element, props }) {
    return (
        <PageProvider {...props}>
            {element}
        </PageProvider>
    )
}