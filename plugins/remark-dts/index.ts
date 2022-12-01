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
        console.log('old child', JSON.stringify(child, null, 2));
        child.type = 'code';
        child.lang = 'typescript';
        child.value = compile([
          file.data.frontmatter.filename.replace('.md', '.ts'),
        ]);
        child.children = undefined;
        console.log('new node', JSON.stringify(node, null, 2));
        console.log('new child', JSON.stringify(child, null, 2));
      }
    });
  };
}

export default remarkDts;
