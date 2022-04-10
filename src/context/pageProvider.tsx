import React from 'react'
import ThemeProvider from './themeProvider'

import '../styles/global.scss'

const PageProvider: React.FC = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>
}

export default PageProvider
