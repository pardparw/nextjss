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
                
                <h1 className={styles.text}>คุณมีปัญหาในการใช้จ่ายใช่ใหม?</h1>
                <h2>Yes?</h2>
                <h3>
                    wel
                </h3>
            </div>
        </body>
    )
           
}