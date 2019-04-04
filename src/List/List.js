import React from 'react'

import Error from './Error'
import Loading from './Loading'
import NotLoaded from './NotLoaded'
import NoUsers from './NoUsers'
import Results from './Results'

class List extends React.Component {
    
    render() {
        return (
            <div>
                {
                    this.props.isError ?
                        <Error />
                        :
                        this.props.isLoading ?
                            <Loading />
                            :
                            !this.props.users ?
                                <NotLoaded />
                                :
                                this.props.users.length === 0 ?
                                    <NoUsers />
                                    :
                                    <Results
                                        data={this.props.users}
                                    />
                }
            </div>
        )
    }
}
export default List