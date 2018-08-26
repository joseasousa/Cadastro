import React, { Component, Fragment } from 'react'
import { Button, Form, Grid, Header, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Creators as UserActions } from '../../redux/store/user'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: '',
        passwd: '',
        first_name: '',
        last_name: ''
      },
      redirect: false
    }
  }

  handleChange = fieldname => event => {
    const form = {
      ...this.state.form
    }
    form[fieldname] = event.target.value
    this.setState({ form })
  }

  signin = () => {
    //const { email, passwd, name } = this.state.form
    this.props.store(this.state.form)
    this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to="add/formImage" />
    }
    return (
      <Fragment>
        <div className="step step1">
          <div className="row">
            <Header as="h3" content="Cadastro" textAlign="center" />
            <Grid
              textAlign="center"
              style={{ height: '100%' }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 700 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image
                    centered
                    src="https://dgivdslhqe3qo.cloudfront.net/careers/photos/23661/thumb_photo_1484531612.png"
                  />
                </Header>

                <Form size="large">
                  <Form.Group widths="equal">
                    <Form.Field>
                      <label>First Name</label>
                      <Form.Input
                        name="first_name"
                        onChange={this.handleChange('first_name')}
                        placeholder="First Name"
                      />
                    </Form.Field>

                    <Form.Field>
                      <label>Last Name</label>
                      <Form.Input
                        name="last_name"
                        onChange={this.handleChange('last_name')}
                        placeholder="Last Name"
                      />
                    </Form.Field>
                  </Form.Group>

                  <Form.Field>
                    <label>Company Name</label>
                    <input
                      name="company"
                      onChange={this.handleChange('company')}
                      placeholder="i.e Apple Inc"
                      type="text"
                    />
                  </Form.Field>

                  <Form.Field>
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      onChange={this.handleChange('email')}
                      placeholder="Email"
                    />
                  </Form.Field>

                  <Form.Group widths="equal">
                    <Form.Field>
                      <label>Password</label>
                      <Form.Input
                        name="passwd"
                        onChange={this.handleChange('passwd')}
                        placeholder="First Name"
                        type="password"
                      />
                    </Form.Field>

                    <Form.Field>
                      <label>Password</label>
                      <Form.Input
                        name="passwd"
                        onChange={this.handleChange('password')}
                        placeholder="First Name"
                        type="password"
                      />
                    </Form.Field>
                  </Form.Group>

                  <Button
                    className="left floated"
                    color="teal"
                    onClick={() => this.signin( )}
                  >
                    NEXT STEP
                  </Button>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user : state.user.user
})

const mapDispatchToProps = dispatch => ({
  store: user => dispatch(UserActions.storeUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)
