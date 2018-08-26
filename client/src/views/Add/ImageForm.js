import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ReactDropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { Image, Grid, Button, Icon, Header } from 'semantic-ui-react'
import { Creators as UserActions } from '../../redux/store/user'

class ImageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: {
        preview: ''
      },
      file_id: ''
    }
  }

  onPreviewDrop = async files => {
    const req = await this.fileUpload(files[0])
    this.setState({ file: files[0], file_id: req.data.id })
  }

  fileUpload(file) {
    const url = 'http://localhost:3333/files'
    const formData = new FormData()

    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(url, formData, config)
  }

  cad() {
    let { user, createUser } = this.props
    const { file_id } = this.state
    user = { ...user, file_id }

    createUser(user)
  }

  render() {
    const { file } = this.state
    const {saved, user} = this.props
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100
    }
    if (saved ) {
      return <Redirect to="/" />
    }


    return (
      <Fragment>
        <div className="step step2">
          <div className="row">
            <Header as="h3" content="Cadastro" textAlign="center" />

            <Grid
              textAlign="center"
              style={{ height: '100%' }}
              verticalAlign="middle"
              horizontalalign="middle"
            >
              <Image
                centered
                src="https://dgivdslhqe3qo.cloudfront.net/careers/photos/23661/thumb_photo_1484531612.png"
              />
              <Grid.Row>
                <Header as="h2"  textAlign="center">
                  Profile photo
                </Header>
              </Grid.Row>
              <Grid.Row>
                <ReactDropzone
                  accept="image/*"
                  multiple={false}
                  onDrop={this.onPreviewDrop}
                >
                  Drop an image, get a preview!
                  <Fragment>
                    <Image
                      alt="Preview"
                      key={file.preview}
                      src={file.preview}
                      style={previewStyle}
                      circular
                    />
                  </Fragment>
                </ReactDropzone>
              </Grid.Row>

              <Grid.Row>
                <Button basic as={Link} to="/add">
                  <Icon name="angle left" size="big" />
                  Voltar
                </Button>

                <Button color="teal" onClick={() => this.cad()}>
                  Finish
                </Button>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  saved: state.user.saved
})

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(UserActions.createUserRequest(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageForm)
