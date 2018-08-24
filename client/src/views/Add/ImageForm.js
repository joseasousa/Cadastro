import React, { Component, Fragment } from 'react'
import axios from 'axios'
import ReactDropzone from 'react-dropzone'
import { Image, Grid, Button } from 'semantic-ui-react'

class ImageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: {
        preview: ''
      }
    }

    this.state = {
      savedToCloud: props.getStore().savedToCloud
    }
  }

  onPreviewDrop = async files => {
    const req = await this.fileUpload(files[0])
    console.log(req.data.id)
    this.setState({ file: files[0] })
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

  render() {
    const { file } = this.state
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100
    }
    return (
      <Fragment>
        <div className="step step2">
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
                      style={previewStyle}
                      circular
                    />
                  </Fragment>
                </ReactDropzone>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ImageForm
