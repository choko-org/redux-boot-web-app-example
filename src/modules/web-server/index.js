import express from 'express'
import {createAction} from 'redux-actions'

const BOOT = 'choko/core/BOOT'

export const HTTP_REQUEST = 'choko/core/web-server/HTTP_REQUEST'
export const HTTP_BOOT = 'choko/core/web-server/HTTP_BOOT'

export default {
  reducer(state, action) {
    return state
  },

  middleware({getState, dispatch}) {

    return next => action => {
      let nextResult = next(action)

      if (action.type == BOOT) {

        // Create webserver.
        let httpServer = express()

        // Dispatch Http server Boot action.
        dispatch(httpBoot(httpServer))

        httpServer.use((request, response, nextHttp) => {

          // Dispatch Http Request Action.
          dispatch(httpRequest({request, response})).then(() => {
            nextHttp()
          })
        })

        httpServer.listen(3000)
      }

      return nextResult
    }
  }
}

export const httpRequest = createAction(HTTP_REQUEST, async ({request, response}) => {
  return {
    request,
    response
  }
})

export const httpBoot = createAction(HTTP_BOOT, (httpServer) => ({httpServer}))
