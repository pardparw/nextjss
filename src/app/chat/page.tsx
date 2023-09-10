import Link from "next/link";
import styles from './chat.module.css'


export default function chat(){
    return(
        <Link href='/intro' className={styles.go}>Go!</Link>
    )
}