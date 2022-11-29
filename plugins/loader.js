const ts = require('typescript')
const createdFiles = {}

module.exports = function (source, options) {
  const hasDts = /:::.?dts.?:::/.test(source)
  if (hasDts) {
    const sourceFile = this.context + '/index.tsx'
    compile([sourceFile], {
      declaration: true,
      emitDeclarationOnly: true,
    })
    const dts = clearDts(createdFiles[sourceFile])
    return source.replace(/:::[\s|\S]?dts[\s|\S]?:::/, '``` typescript\n' + dts.trim() + '\n```')
  }

  return source
}

function clearDts (source) {
  source = source.replace('declare', '')
  source = source.replace(/export[\s|\S]*;/g, '')
  return source
}

function compile(fileNames, options) {
  // Create a Program with an in-memory emit
  const host = ts.createCompilerHost(options)
  const sourceName = fileNames[0]
  host.writeFile = (fileName, contents) => {
    createdFiles[sourceName] = contents
  }
  // Prepare and emit the d.ts files
  const program = ts.createProgram(fileNames, options, host);
  program.emit();
}
