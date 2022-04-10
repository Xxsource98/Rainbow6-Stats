import React, { useState } from 'react'
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from '@mantine/core'
import { useLocalStorageValue } from '@mantine/hooks'
import CurrentPlatformContext from './currentPlatform'

const ThemeProvider: React.FC = ({ children }) => {
    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: 'color-scheme',
        defaultValue: 'light',
    })
    const [currentPlatform, setCurrentPlatform] = useState<string>('pc')

    const ToggleColorScheme = () =>
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light')

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={ToggleColorScheme}>
            <MantineProvider
                theme={{
                    colorScheme: colorScheme,
                    fontFamily: 'Open Sans, sans-serif',
                    breakpoints: {
                        xs: 390,
                        sm: 600,
                        md: 955,
                        lg: 1215,
                    },
                }}>
                <CurrentPlatformContext.Provider
                    value={{
                        currentPlatform: currentPlatform,
                        changePlatform: newPlatform =>
                            setCurrentPlatform(newPlatform),
                    }}>
                    {children}
                </CurrentPlatformContext.Provider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default ThemeProvider
