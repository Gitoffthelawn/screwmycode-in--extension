import { Browser } from '../browser/browser'
import { ConstantSpeedStep } from '../constant-speed-step/constant-speed-step'

/**
 * @function
 * @name StateSet
 * @description performs mutations in browser state with a reducer approach
 * @param {string} type - action / mutation to perform
 * @param {(boolean | number)} payload - state
 * @returns {Promise<void>}
 */
export async function StateSet (type, payload) {

    const state = await Browser ().storage.local.get ()
    const set = await Browser ().storage.local.set

    // reducer
    switch (type) {

        case 'isActive':
            await set ({
                ...state,
                'isActive': payload,
            })

            break

        case 'speed':

            if (payload < 0.5) {

                payload = 0.5

            } else if (payload > 1.5) {

                payload = 1.5

            }

            payload = parseFloat (payload.toFixed (3))

            if (Number.isNaN (payload)) payload = 1

            await set ({
                ...state,
                'speed': payload,
            })

            break

        case 'step':

            if (payload < ConstantSpeedStep.min) {

                payload = ConstantSpeedStep.min

            } else if (payload > ConstantSpeedStep.max) {

                payload = ConstantSpeedStep.max

            }

            payload = parseFloat (payload)

            if (Number.isNaN (payload)) payload = ConstantSpeedStep.init

            await set ({
                ...state,
                'step': payload,
            })

            break

        default:
            throw new Error ('state error')

    }

}