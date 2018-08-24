import React, { Component, Fragment } from 'react'
import { Button, Form, Grid, Header, Image } from 'semantic-ui-react'
import axios from 'axios'
import ReactDropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { Creators as UserActions } from '../../redux/store/user'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: {},
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
    this.setState({ form })
  }

  signin = () => {
    //const { email, passwd, name } = this.state.form
    this.props.signin(this.state.form)
  }

  onPreviewDrop = async files => {
    const req = await this.fileUpload(files[0])
    this.setState({
      file: files[0],
      form: { ...this.state.form, file_id: req.data.id }
    })
  }

  fileUpload(file) {
    const url = 'http://localhost:3333/files'
    const form = this.state.form
    const formData = new FormData()

    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(url, formData, config)
  }

  render() {
    const { file } = this.state
    return (
      <Fragment>
        <div className="step step1">
          <div className="row">
            <Grid
              textAlign="center"
              style={{ height: '100%' }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 700 }}>
                <ReactDropzone accept="image/*" onDrop={this.onPreviewDrop}>
                  Drop an image, get a preview!
                  <Fragment>
                    <Image
                      alt="Preview"
                      key={file.preview}
                      src={file.preview}
                      circular
                    />
                  </Fragment>
                </ReactDropzone>
              </Grid.Column>
            </Grid>
          </div>
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
                      name="password"
                      onChange={this.handleChange('password')}
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
                  <Button onClick={() => this.signin()}>Salvar</Button>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  signin: data => {
    dispatch(UserActions.createUserRequest(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)
