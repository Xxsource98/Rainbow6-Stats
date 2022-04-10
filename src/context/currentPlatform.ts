import { createContext } from 'react'

type CurrentPlatformContextType = {
    currentPlatform: string
    changePlatform?: (newPlatform: string) => void
}

const CurrentPlatformContext = createContext<CurrentPlatformContextType>({
    currentPlatform: 'pc',
})

export default CurrentPlatformContext
