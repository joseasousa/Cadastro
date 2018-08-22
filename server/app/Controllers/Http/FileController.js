'use strict'

const File = use('App/Models/File')
const Helper = use('Helpers')
/**
 * Resourceful controller for interacting with files
 */
class FileController {
  async show ({params, response}) {
    const file = await File.findOrFail(params.id)

    return response.download(Helper.tmpPath(`uploads/${file.file}`))
  }
  async store ({ request, response }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '2mb' })

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helper.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      })

      return file
    } catch (err) {
      console.log(err)
      return response.status(err.status).send({
        error: { message: 'Erro no upload de arquivo' }
      })
    }
  }
}

module.exports = FileController
