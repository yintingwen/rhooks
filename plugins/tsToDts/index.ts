import * as fs from 'fs';
import ts from 'typescript';

const fileMtime: Record<string, number> = {};
const fileCache: Record<string, string> = {};

export function clearDts(source: string) {
  let result = source;
  result = result.replace('declare', '');
  result = result.replace(/export[\s|\S]*;/g, '');
  return result;
}

export default function compile(fileNames: string[]) {
  const fileName = fileNames[0];
  const mtime = +fs.statSync(fileName).mtime;

  if (fileMtime[fileName] !== mtime) {
    fileMtime[fileName] = mtime;
    const options: ts.CompilerOptions = {
      declaration: true,
      emitDeclarationOnly: true,
    };
    const host = ts.createCompilerHost(options);
    host.writeFile = (dtsName, contents) => {
      fileCache[fileName] = clearDts(contents).trim();
    };
    const program = ts.createProgram(fileNames, options, host);
    program.emit();
  }

  return fileCache[fileName];
}
