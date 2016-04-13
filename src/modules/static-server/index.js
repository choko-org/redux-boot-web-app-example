import express from 'express'
import {HTTP_BOOT} from '../web-server'

export default {
  middleware({getState}) {
    return next => action => {

      let returnNext = next(action)

      if (action.type == HTTP_BOOT) {
        let httpServer = action.payload.httpServer
        const folders = getState().variables.static

        folders.forEach(folder => httpServer.use(express.static(folder)))
      }

      return returnNext
    }
  }
}
