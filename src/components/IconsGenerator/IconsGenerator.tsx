import React, { useState } from "react";
import classes from './IconsGenerator.module.css'

// Library imports
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

// Utility to generate icons
import { FontAwesomeHelper } from "../../utils/FontAwesomeHelper";

export const IconsGenerator: React.FC = ({ }) => {
    const [icon, setIcon] = useState<IconDefinition>(faRandom);

    const generateIcon = () => {
        setTimeout(() => {
            const icon = FontAwesomeHelper.getRandomIcon();
            setIcon(icon);
        }, 3000);
    }

    return (
        <div className={classes.parent}>
            <FontAwesomeIcon icon={icon} className={classes.icon} />
            <button onClick={generateIcon} className={classes.btn}>Generate</button>
        </div>
    );
}
