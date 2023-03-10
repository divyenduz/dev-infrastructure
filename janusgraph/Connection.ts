import { driver, process, structure } from 'gremlin'

export class Connection {
  private _client: driver.DriverRemoteConnection
  private _db: process.GraphTraversalSource

  constructor(dbUrl: string) {
    const client = new driver.DriverRemoteConnection(dbUrl, {})
    this._client = client
    const graph = new structure.Graph()
    const g = graph.traversal().withRemote(this._client)

    this._db = g
  }

  getDB() {
    return this._db
  }

  async connect() {
    await this._client.open()
  }

  async disconnect() {
    await this._client.close()
  }
}

