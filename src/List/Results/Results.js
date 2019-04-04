import React from 'react'
import { userInfo } from 'os';

const Results = (props) => (
    <div>
        {
            props.data.map(
                user => (
                    <div>
                        {user.name.first} {user.name.last}
                    </div>
                )
            )
        }
    </div>
)

export default Results