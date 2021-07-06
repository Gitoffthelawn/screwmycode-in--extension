import { State } from '../state/state'
import { UtilsGetId } from '../utils-get-id/utils-get-id'
import { Browser } from '../browser/browser'

/**
 * @function
 * @name PopupShare
 * @description popup: handle the `share` element
 * @returns {Promise<void>}
 */
export async function PopupShare () {

    const share = document.getElementsByClassName ('smc-share')[0]
    const browser = await Browser ()
    const { speed } = await State ()
    const baseUrl = 'https://screwmycode.in/youtube/'
    const speedUrl = 'speed='
    const id = await UtilsGetId ()
    const url = `${baseUrl}${id}?${speedUrl}${speed}`

    share.onclick = () => {

        browser.tabs.create ({
            'url': url,
        })

    }

}