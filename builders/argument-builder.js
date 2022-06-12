const helper = require('../helpers/documentation-helper')
const escapeCellLineBreaks = x => x.replace(/(?:\r\n|\r|\n)/g, ' ')
const i18n = require('../i18n')

const build = (node, params) => {
  if (!params || !params.length) {
    return ''
  }

  const builder = []

  for (const i in params) {
    const parameter = params[i]
    builder.push('| ')
    builder.push(parameter.name)
    builder.push(' | ')
    builder.push(parameter.typeDescriptions.typeString.replace('contract ', ''))
    builder.push(' | ')
    const doc = helper.get(node, 'param ' + parameter.name)

    builder.push(escapeCellLineBreaks(doc))
    builder.push(' | ')
    builder.push('\n')
  }

  const returnDocumentation = helper.get(node, 'return')

  if (returnDocumentation) {
    builder.push('\n')
    builder.push(`**${i18n.translate('Returns')}**`)
    builder.push('\n')
    builder.push('\n')
    builder.push(returnDocumentation)
    builder.push('\n')
  }

  return builder.join('')
}

module.exports = { build }
