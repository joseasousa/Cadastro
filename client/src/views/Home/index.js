import React, { Component } from 'react'
import { Image, Segment, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import Users from './Users'

import { Creators as UserActions } from '../../redux/store/user'
import { Link } from 'react-router-dom'

class Home extends Component {
  componentDidMount () {
    this.props.userRequest()
  }
  render () {
    const { users, loading } = this.props

    return (
      <div className='ui container'>
        <div className='center'>
          <Image
            centered
            src='https://dgivdslhqe3qo.cloudfront.net/careers/photos/23661/thumb_photo_1484531612.png'
          />
          <div className='row'>
            <h1>Users</h1>

            <Link className='button ui teal' to='/add'>
              Add new User
            </Link>
          </div>
        </div>
        {loading ? <h1>...</h1> : <Users users={users} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.user.data,
  loading: state.user.loading
})

const mapDispatchToProps = dispatch => ({
  userRequest: () => dispatch(UserActions.userRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
