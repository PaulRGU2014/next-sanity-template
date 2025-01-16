import styles from './RichTextComp.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'
import RichTextUtil from './../../utils/RichText/RichText'

interface RichTextCompProps {
  content: any; // Replace 'any' with the appropriate type
}

export default function RichTextComp({content}: RichTextCompProps) {
  return(
    <InViewAnim>
      <div className={`${styles.component} ${content.theme === 'dark' ? styles.dark : ""}`}>
        <div className={styles.wrapper}>
          { !!content.maxWidth ? 
            <div style={{maxWidth : `${content.maxWidth}px`}}>
              <RichTextUtil  html={content.content} className={styles.richtext}/>
            </div>
            :
            <div style={{maxWidth : 'unset'}}>
              <RichTextUtil  html={content.content} className={styles.richtext}/>
            </div>
          }
        </div>
      </div>
    </InViewAnim>
  );
}