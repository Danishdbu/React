import React from 'react'
import { UserContect } from '../App'
import { useContext } from 'react'

const ChidC = () => {
    const user = useContext(UserContect);
    return (
        <div>
            {/* {user.name} */}
        </div>
    )
}

export default ChidC
