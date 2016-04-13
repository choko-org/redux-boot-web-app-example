import Choko from 'choko-redux'
import path from 'path'

import webServerModule from './modules/web-server'
import staticServerModule from './modules/static-server'

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
  staticServerModule
]

const app = Choko(initialState, modules)
