import React from "react";
import styles from '../styles/Card.module.css'

export const Card = () => {
    return(
        <>
            <div className={styles.div1}>
                <h1>Mobile Operating System</h1>
                <ul style={{lineHeight:'25px'}}>
                    <li>Android</li>
                    <li>Blackberry</li>
                    <li>iPhone</li>
                    <li>Windows Phone</li>
                </ul>
            </div>
            <div className={styles.div1}>
                <h1>Mobile Manufacturers</h1>
                <ul style={{lineHeight:'25px'}}>
                    <li>Samsung</li>
                    <li>HTC</li>
                    <li>Micromax</li>
                    <li>Apple</li>
                </ul>
            </div>
        </>
    )
};