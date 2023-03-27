import React from "react";
import { Link } from "react-router-dom";
import styles from '../DogCard/dogCard.module.css'

const DogCard = ({ id, image, name, temperament, weightMin, weightMax, averageWeight }) => {
    return (
        <div className={styles.cardsContainer}>
            <Link to={`/detail/${id}`}>
                <div className={styles.dogCard}>
                    <img src={image} alt={name} height='200px' className={styles.dogImage} />
                    <h5 className={styles.id}>{id}</h5>
                        <h3 className={styles.name}>{name}</h3>
                    <h5 className={styles.temperaments}>{temperament}</h5>
                    <div className={styles.weightsContainer}>
                        <div className={styles.weightMinContainer}>
                            <h3 className={styles.stat}>{weightMin}<sup>kg</sup></h3>
                            <h3 className={styles.statDescription}>MINIMUM</h3>
                        </div>

                        <div className={styles.weightMaxContainer}>
                            <h3 className={styles.stat}>{weightMax}<sup>kg</sup></h3>
                            <h3 className={styles.statDescription}>MAXIMUM</h3>
                        </div>

                        <div className={styles.weightAvgContainer}>
                            <h3  className={styles.stat}>{averageWeight}<sup>kg</sup></h3>
                            <h3 className={styles.statDescription}>AVERAGE</h3>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default DogCard;