import { ControlsContainer } from '../controls-container/controls-container'
import { ControlsPercentage } from '../controls-percentage/controls-percentage'
import { ControlsSemitones } from '../controls-semitones/controls-semitones'
import { ControlsIncrease } from '../controls-increase/controls-increase'
import { ControlsDecrease } from '../controls-decrease/controls-decrease'
import { ControlsSpacer } from '../controls-spacer/controls-spacer'
import { ConstantControlsContainer } from '../constant-controls-container/constant-controls-container'

/**
 * @function
 * @name Controls
 * @description building controls inside the youtube player
 * @returns {Promise<void>}
 */
export async function Controls () {

    if (document.getElementById (ConstantControlsContainer) === null) {

        const parent = document.getElementsByClassName ('ytp-time-display notranslate')[0]
        const container = ControlsContainer ()
        const percentage = await ControlsPercentage ()
        const semitones = await ControlsSemitones ()
        const increase = ControlsIncrease ()
        const decrease = ControlsDecrease ()
        const spacer = ControlsSpacer ()

        // rendering
        container.appendChild (decrease)

        container.appendChild (spacer)

        container.appendChild (increase)

        container.appendChild (spacer.cloneNode ())

        container.appendChild (percentage)

        container.appendChild (spacer.cloneNode ())

        container.appendChild (semitones)

        parent.parentNode.appendChild (container)

    }

}
