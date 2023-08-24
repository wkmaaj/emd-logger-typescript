export enum AuthenticationStatus {
  enabled = 'enabled',
  disabled = 'disabled',
  mock = 'mock'
}

export enum OperationStatus {
  started = 'started',
  starting = 'starting',
  executed = 'executed',
  executing = 'executing',
  success = 'success',
  failed = 'failed'
}

export enum RestClientType {
  api = 'api',
  browser = 'browser',
  client = 'client',
  server = 'server'
}
