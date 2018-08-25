import React, { Component, Fragment } from 'react'
import ImageForm from './ImageForm'
import UserFrom from './UserForm'
import StepZilla from 'react-stepzilla'

const steps = [
  { name: '1', component: <UserFrom /> },
  { name: '2', component: <ImageForm /> }
]

class Add extends Component {
  render () {
    return (
      <Fragment>
        <StepZilla
          steps={steps}
          preventEnterSubmission
          nextTextOnFinalActionStep={'Save'}
          hocValidationAppliedTo={[3]}
          startAtStep={
            window.sessionStorage.getItem('step')
              ? parseFloat(window.sessionStorage.getItem('step'))
              : 0
          }
          onStepChange={step => window.sessionStorage.setItem('step', step)}
        />
      </Fragment>
    )
  }
}
export default Add
