import { Browser } from '../browser/browser'

export async function StateSet (type, payload) {

    const state = await Browser ().storage.local.get ()
    const set = await Browser ().storage.local.set

    // reducer
    switch (type) {

        case 'isReady':
            await set ({
                ...state,
                'isReady': payload,
            })

            break

        case 'isActive':
            await set ({
                ...state,
                'isActive': payload,
            })

            break

        case 'speed':

            if (state.isActive === true) {

                if (payload < 0.5) {

                    payload = 0.5

                } else if (payload > 1.5) {

                    payload = 1.5

                }

                payload = parseFloat (payload.toFixed (3))

                await set ({
                    ...state,
                    'speed': payload,
                })

            }

            break

        default:
            return null

    }

}