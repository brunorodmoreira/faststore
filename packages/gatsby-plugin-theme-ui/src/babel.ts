import { Visitor } from '@babel/traverse'
import BabelTypes from '@babel/types'
import { parse } from '@babel/parser'

interface Babel {
  types: typeof BabelTypes
}

const plugin = (_: Babel, options: any) => {
  const { inFile, inPath } = options

  const { theme } = global as any

  const visitor: Visitor = {
    Program: (path, state: any) => {
      const {
        file: {
          opts: { filename },
        },
      } = state

      try {
        if (filename === inFile) {
          const parsed = parse(`export default ${JSON.stringify(theme)};`, {
            sourceType: 'module',
          })

          path.replaceWith(parsed.program)
          path.skip()
        } else if (filename.startsWith(inPath)) {
          path.remove()
          path.skip()
        }
      } catch (err) {
        console.log(err)
      }
    },
  }

  return { visitor }
}

export default plugin
