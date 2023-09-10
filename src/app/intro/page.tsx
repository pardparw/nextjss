import styles from './intro.module.css'
import Image from 'next/image'
export default function Home() {
    return(
        
        <body className={styles.body}>
            <Image className={styles.img}
                src="/img/pic_intro_1.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div className={styles.box}>
                
             <h1>Hello wolrd</h1>
                
            </div>
        </body>
    )
           
}
