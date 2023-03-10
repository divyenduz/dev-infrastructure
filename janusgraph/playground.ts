import { process, structure } from 'gremlin'

import { Connection } from './Connection'

const connection = new Connection(`ws://localhost:8182/gremlin`)
async function main() {
  const db = connection.getDB()

  const data = await db
    .V()
    // .hasLabel(process.TextP.startingWith('xx6'))
    .label()
    .dedup()
    .toList()

  console.log(data, data.length)
}
main().finally(() => {
  connection.disconnect()
})

