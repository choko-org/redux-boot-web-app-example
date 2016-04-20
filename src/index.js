import boot from 'redux-boot'
import path from 'path'

import webServerModule from './modules/web-server'
import staticServerModule from './modules/static-server'
import restServerModule from './modules/rest-server'

const initialState = {
  variables: {
    name: 'My custom APP',
    static: [
      path.join(__dirname, '..', 'public')
    ]
  }
}

const modules = [
  webServerModule,
  staticServerModule,
  restServerModule
]

const app = boot(initialState, modules)
