import Link from "next/link"
import styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <Link href="mailto:gonzco32@gmail.com">
                <img className={styles.icono}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATVJREFUSEvdVdFRwlAQ3K1AOxA70ArEDrADrACsRKgAOsAOxAqghNCBVLDOZu5lYpjgI5mMM9xPZnL3dm/3Li/EwMGB8XFFBJLGAFYARj1tKwC8ktwap7JIkhN3PcHT8YLkfZNAkX0kue9CJOkBwK4EJsvm6woSwXdI/LiERNIkLL79iyDhLki+5ZBIWgCY1WvPKTDoexR7UC8kreokJLnbDQAviKM620rgRHhp8BsABn9uziVqPgGY5GgS10gqrT5L4ILoznN4iu7mJJeRm9dUfgGYJJXZBMmPhr/reD+N55Kkyaq4mCA69oYY3JY5bMmU5MmmdSIIEu94paDtW+lMkLOu0UjekHMBm3X/qsD7nobYVUA6dyBZ3sr1u8hfo4fY90Y9xIb9vq77ttx2/op+mUNZ9AM2b6YZomtp4AAAAABJRU5ErkJggg=="/>
            </Link>
            
            <Link  href="https://www.facebook.com/profile.php?id=100010667947393">
                <img className={styles.icono} 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvtlAsJAkEQhr+/gQ00gg3UJF4EI2gCjWAFG2gCjaANbDAysAfL6b2WPVS4hYWBXf4XMyMGPhoYn98iMLMZsAfmgNd+LpKWdUl0dhDAr8CkApaN4AisPyjNRnAGFoHgBBSSnm1N0icii8B2krZt4P7+XQIzK4BpUBor9rj8ll1U1m+mGh2YWZx7XSKNceUgWElKdnAIQ+Xqyw7y+gHcg6WNpFuOQfvDLoptm9nooHnwx4i6LMakP523aRJ6n3WdSvACKM9fGTlG2HkAAAAASUVORK5CYII="/>    
            </Link>
            
            <Link href="https://www.linkedin.com/in/kathya-gonz%C3%A1lez-0660a426a/">
                <img className={styles.icono} 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARFJREFUSEvtlcFNw0AQRd+vgJRAOMARqADogBI4I3FAooBQABJC4kwJiA5IB+SWA4fQAWmAjwatrY1jYWmXcMqeLNvz3ujPri02vLRhPmsC23vAl6TFX8hXBLYfgKsEvpN0UytpBbYPgHkHuCvpo0YyJBjXRtWN6BG4TB3fS7qu6T5q+4a8n4b8XgtfE9g+BZzAS0lvcW37CNjJ79seAYdA1MR7s744uxE18GBNJUVxCF6BkySYAhPgGQhJviaSbvMbJYI4HwHuwhvumaRo6GeVCIZG8yLpvFbQQmxfAE+ZdSFpXCs4bjZAmtFntgmQ1CZTFFEO6NkEWwErEWwj6vtUlEc0dERLnv//T7+ky99qvgFoXMgZAzL0uQAAAABJRU5ErkJggg=="/>
            </Link>
            
            <Link href="https://github.com/KathyaGonzalez">
                <img className={styles.icono} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbdJREFUSEu1VQtRw0AU3FUAKAAUAAqgCgAFFAVQBYACigOqAFBAUUBx0DooCh6z7bvwcrk2gZncTCYzl7vdt/s+IXpe7BkfrQRmdgHgHMCxP4pp5s+U5GRbkBsJHPgRwEGLyjmAEcnX0rkigZndA7j7o31jkqP8ToPgn+AJ94nkbSSpEZjZGYB3P/AGQEqGAG5878vfR/6W/89+5sr3LqNdOYH83PeDDyRFADPbJbmMkcW9TPWc5GE6WxF4Ul8CyISkom9dBVuvSUrZb5mamTaSTH0bkJy2oq8VqoQ/S8FFBQI7TV6T1KXOy8zi/RnJk1yBPN5xxA+SSnjnlRGA5Cr4qMACWi8EUeKS5F7n8Nd5iA4sSK4mQFSQJ1ntP+5CYmZqLo2VtKoK3FSm354P9YG6s9YDCUW94JWXB9IsU10yMzWaEj0AoKhS2aqrh4nIgaVYVSeSuCp7ahY5QRoVilhllkCqrg7R55amT7X+KQ275GdxOgaC0sTdPuzC5USiH4vUKGmr1t9C0FDZsCgDkF0C1fArWZQULDw/xbHS5ZcpIvWF1EQFGiUHm/5k6WArQZc+2Hamd4IfXwTFGbCHxBkAAAAASUVORK5CYII="/>    
            </Link>
        </footer>
    )
}
export default Footer