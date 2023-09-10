import Image from "next/image";
import React from "react";
import chub from "../../public/chub.png";
import Link from "next/link";

type Props = {};
const styles = {
    header: "flex justify-between items-center w-full h-20 text-white bg-slate-800 px-8",
    nav: "flex justify-center items-center h-full",
    navWrapper: "flex gap-10 px-5 text-sm",
    navItem: "hover:opacity-60",
    connect: "flex items-center"
};

const Header = (props: Props) => {
    return (
        <div className={styles.header}>
            <Image src={chub} alt="logo" width={150} height={150} />
            <nav className={styles.nav}>
                <ul className={styles.navWrapper}>
                    <li className={styles.navItem}>
                        <Link href="/">Cryptocurrencies</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">Exchanges</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">NFT</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">Portofolio</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">Watchlist</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">DEX</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.connect}>
                Metamask Login
            </div>
        </div>
    );
};

export default Header;
