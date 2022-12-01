import ts from 'typescript';

export function clearDts(source: string) {
  let result = source;
  result = result.replace('declare', '');
  result = result.replace(/export[\s|\S]*;/g, '');
  return result;
}

export default function compile(fileNames: string[]) {
  let result = '';
  const options: ts.CompilerOptions = {
    declaration: true,
    emitDeclarationOnly: true,
  };
  // Create a Program with an in-memory emit
  const host = ts.createCompilerHost(options);
  host.writeFile = (fileName, contents) => {
    result = contents;
  };
  // Prepare and emit the d.ts files
  const program = ts.createProgram(fileNames, options, host);
  program.emit();
  return clearDts(result).trim();
}
