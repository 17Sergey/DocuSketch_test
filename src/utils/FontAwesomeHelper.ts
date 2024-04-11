import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MathHelper } from './MathHelper';

// To simplify the task I've selected only solid icons type. We can add any more
import { fas } from '@fortawesome/free-solid-svg-icons'

export const FontAwesomeHelper = {
    getRandomIcon(): IconDefinition {
        // Find a random key of the 'fas' collection
        const fasKeys = Object.keys(fas);
        const randomIndex = MathHelper.getRandomNumberInRange(0, fasKeys.length - 1);
        const iconKey = fasKeys[randomIndex];

        // Return icon matching the key
        return fas[iconKey];
    },
}
