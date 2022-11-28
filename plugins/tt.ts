import * as ts from "typescript";
import { createUnplugin, UnpluginContextMeta } from "unplugin";
import * as fs from "fs";

const plugin = createUnplugin((options: Record<string, string>, meta: UnpluginContextMeta) => {
  return {
    name: 'unplugin-dts',
    load (id) {
      if (/package.*\.md/.test(id)) {
        console.log('load hooks', id)
        return {
          code: fs.readFileSync(id, 'utf-8')
        }
      }
      return null
    }
  }
})

export default plugin


// function compile(fileNames: string[], options: ts.CompilerOptions): void {
//   // Create a Program with an in-memory emit
//   const createdFiles: Record<any, any> = {}
//   const host = ts.createCompilerHost(options);
//   host.writeFile = (fileName: string, contents: string) => {
//     console.log(fileName)
//     console.log(contents)
//     createdFiles[fileName] = contents
//   }
//
//   // Prepare and emit the d.ts files
//   const program = ts.createProgram(fileNames, options, host);
//   program.emit();
//
//   // Loop through all the input files
//   fileNames.forEach(file => {
//     console.log("### JavaScript\n")
//     console.log(host.readFile(file))
//
//     console.log("### Type Definition\n")
//     const dts = file.replace(".js", ".d.ts")
//     console.log(dts)
//     console.log(createdFiles[file])
//   })
// }
//
// // Run the compiler
// compile(process.argv.slice(2), {
//   declaration: true,
//   emitDeclarationOnly: true,
// });
