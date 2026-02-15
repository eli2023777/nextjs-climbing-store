import styles from "@/page.module.css";


const Header = ({ headline }) => {
    return (
        <div className={styles.header}>
            <h1>{headline}</h1>
        </div>
    )
}

export default Header
