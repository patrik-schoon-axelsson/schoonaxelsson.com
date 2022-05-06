import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from "./ProfileImg.module.css"

const ProfileImg = () =>{
    return (
        <StaticImage src="../images/profile.png" alt="A portrait of the author" maxWidth={200} className={styles.imgRounded} />
    )
}

export default ProfileImg