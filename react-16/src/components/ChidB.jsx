import React from 'react'
import ChidC from './ChidC'
import { UserContect } from '../App'
import { useContext } from 'react'
const ChidB = () => {
    const user = useContext(UserContect);
    return (
        <div>
            <ChidC />
            data:  {user.name}
        </div>
    )
}

export default ChidB
