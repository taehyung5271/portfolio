import styles from "./AboutCard.module.css"
interface AboutCardProps {
    iconSrc: string;
    label: string;
    value: string;
    
}

const AboutCard = ({iconSrc,label,value}: AboutCardProps) => {
    
    return (
        <div className={styles.card}>
            <img src={iconSrc} alt={label} className={styles.icon}/>
            <div className={styles.textWrapper}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
            </div>
        </div>
    )
}

export default AboutCard;