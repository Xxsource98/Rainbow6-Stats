import { CSSObject, MantineTheme } from '@mantine/core'

declare global {
    type StyleType = CSSObject | ((theme: MantineTheme) => CSSObject)
}
