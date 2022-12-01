import compile from '../tsToDts';

function remarkDts() {
  // @ts-ignore
  return (node, file) => {
    if (
      !/packages\/.*\.md/.test(file.data.frontmatter.filename) ||
      !node.children
    )
      return;
    node.children.forEach((child: any) => {
      if (
        child.type === 'paragraph' &&
        /:::\s?dts\s?:::/.test(child.children[0].value)
      ) {
        child.type = 'code';
        child.lang = 'typescript';
        child.value = compile([
          file.data.frontmatter.filename.replace('.md', '.ts'),
        ]);
        child.children = undefined;
      }
    });
  };
}

export default remarkDts;
