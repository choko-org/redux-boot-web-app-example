import jsonServer from 'json-server'
import express from 'express'
import {HTTP_BOOT} from '../web-server'

export default {
  middleware({getState}) {
    return next => action => {

      let returnNext = next(action)

      if (action.type == HTTP_BOOT) {
        let httpServer = action.payload.httpServer

        // console.log(jsonServer);
        // httpServer.use(jsonServer.defaults())
        httpServer.use('/api', jsonServer.router('db.json'))
      }

      return returnNext
    }
  }
}
