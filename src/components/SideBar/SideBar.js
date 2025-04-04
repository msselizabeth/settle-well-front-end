import styles from "./SideBar.module.scss";
import Image from "next/image";


function SideBar() {
    return ( 
        <div className={styles.sideBar}>
<div className={styles.logoContainer}>
<Image src="/Logo-icon.svg" alt="logo" width={100} height={100} className={styles.logo}/>
<h1 className={styles.title}>Settle Well</h1>
</div>
</div>
)
};

export default SideBar;