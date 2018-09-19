export interface Node {
  internal: {
    type: string;
  }
  parent: {
    sourceInstanceName: string;
  }
}

export interface OnCreateNodeParamsBoundActionCreators {
  createNodeField: (field: any) => any
}

export interface OnCreateNodeParams {
  node: Node
  boundActionCreators: OnCreateNodeParamsBoundActionCreators
  getNode: (node: any) => any
}

export const onCreateNode = ({
  node,
  boundActionCreators,
  getNode
}: OnCreateNodeParams) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent)

    createNodeField({
      name: 'sourceInstanceName',
      node,
      value: parent.sourceInstanceName
    })
  }
}
