const fs = require('fs')
const path = require('path')

const fixLinks = (config, contents) => {
  const { pathToRoot, outputPath } = config
  const toDocs = path.relative(pathToRoot, outputPath)
  const toRoot = path.relative(outputPath, pathToRoot)

  contents = contents.replace(/\[(.*?)\]\((.*md?)\)/gi, `[$1](${toDocs}/$2)`)
  contents = contents.replace(/\[(.*?)\]\((.*sol?)\)/gi, (_x, y, z) => `[${y}](${z.replace(toRoot, '')})`)

  return contents
}

const removePrevious = (contents) => {
  return contents.replace(/\[comment\]: #solidoc Start.*\[comment\]: #solidoc End/gms, '{{{doc}}}')
}

const insertRoot = (contents, replacable) => {
  const toReplace = `[comment]: #solidoc Start\n${replacable}\n[comment]: #solidoc End`
  return contents.replace(/{{{doc}}}/g, toReplace)
}

const set = (replacable, config) => {
  const { readMe } = config

  if (!fs.existsSync(readMe)) {
    return
  }

  replacable = fixLinks(config, replacable)

  let contents = fs.readFileSync(readMe).toString()

  contents = removePrevious(contents)
  contents = insertRoot(contents, replacable)
  fs.writeFileSync(readMe, contents)
}

module.exports = { set }
