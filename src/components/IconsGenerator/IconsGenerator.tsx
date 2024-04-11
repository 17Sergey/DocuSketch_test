import React, { useState } from "react";
import classes from './IconsGenerator.module.css'
import Preloader from '../../assets/Preloader.svg'

// Library imports
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

// Utility to generate icons
import { FontAwesomeHelper } from "../../utils/FontAwesomeHelper";


export const IconsGenerator: React.FC = ({ }) => {
    const [icon, setIcon] = useState<IconDefinition>(faRandom);
    const [isLoading, setLoading] = useState<boolean>(false);


    const generateIcon = () => {
        setLoading(true);
        setTimeout(() => {
            const icon = FontAwesomeHelper.getRandomIcon();
            setIcon(icon);
            setLoading(false);
        }, 3000);
    };

    return (
        <div className={classes.parent}>
            <div className={classes.iconWrapper}>
                {isLoading
                    ?
                    <img src={Preloader} alt="Loading..." className={classes.preloader} />
                    :
                    <FontAwesomeIcon icon={icon} className={classes.icon} />
                }
            </div>
            <button onClick={generateIcon} className={classes.btn}>Generate</button>
        </div>
    );
}
