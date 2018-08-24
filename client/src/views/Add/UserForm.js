import React, { Component, Fragment } from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Image
} from 'semantic-ui-react'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: '',
        passwd: '',
        first_name: '',
        last_name: ''
      }
    }


  }

  handleChange = fieldname => event => {
    const form = {
      ...this.state.form
    }
    form[fieldname] = event.target.value
  }

  signin = () => {
    //const { email, passwd, name } = this.state.form
    console.log(this.state.form)
    this.request(1)
  }

  render() {
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
              <Form.Field>
                <label>First Name</label>
                <input
                  name="first_name"
                  onChange={this.handleChange('first_name')}
                  placeholder="First Name"
                />
              </Form.Field>

              <Form.Field>
                <label>Last Name</label>
                <input
                  name="last_name"
                  onChange={this.handleChange('last_name')}
                  placeholder="Last Name"
                />
              </Form.Field>

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

              <Form.Field>
                <label>Password</label>
                <input
                  name="passwd"
                  onChange={this.handleChange('passwd')}
                  placeholder="First Name"
                  type="password"
                />
              </Form.Field>

              <Form.Field>
                <label>Password</label>
                <input
                  name="passwd"
                  onChange={this.handleChange('passwd')}
                  placeholder="First Name"
                  type="password"
                />
              </Form.Field>

            </Form>
          </Grid.Column>
        </Grid>
        </div>
        </div>
      </Fragment>
    )
  }
}

export default Add
