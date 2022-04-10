import React from 'react'

import { BiError } from '@react-icons/all-files/bi/BiError'

import '../styles/global.scss'

const PageNotFound: React.FC = () => {
    return (
        <div className="not-found">
            <BiError />
            Page Not Found
        </div>
    )
}

export default PageNotFound
