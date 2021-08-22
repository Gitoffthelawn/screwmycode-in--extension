import { onNewState } from '../state/on-new-state'
import { setState } from '../state/set-state'

/**
 * @description handle the `slider` element
 * todo: remove onNewState
 */
export async function handleSlider () {

    const slider = document.getElementsByClassName ('smc-slider')[0]

    // on input
    slider.addEventListener ('input', async (event) => {

        const value = parseFloat (event.target.value)

        await setState ('speed', value)
    
    })

    // on change
    await onNewState (
        ({ speed }) => {

            slider.value = speed

            slider.classList.add ('smc-hoverable')

            slider.disabled = false

        },
        () => {

            slider.value = 1

            slider.classList.remove ('smc-hoverable')

            slider.disabled = true

        },
    )

}