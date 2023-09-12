import Image from "next/image";
import React from "react";
import chub from "../../public/chub.png";
import Link from "next/link";
import {AiOutlineSearch} from "react-icons/ai"


type Props = {};
const styles = {
    header: "flex justify-between items-center w-full h-20 text-white bg-slate-800 px-8",
    nav: "flex justify-center items-center h-full",
    navWrapper: "flex items-center gap-10 px-5 ",
    navItem: "text-sm hover:opacity-60",
    connect: "flex items-center gap-5",
    inputWrapper: "flex justify-center items-center bg-slate-500 rounded-md",
    input:"text-sm bg-transparent outline-none",
};

const Header = (props: Props) => {
    return (
        <div className={styles.header}>
            <Image src={chub} alt="logo" width={175} height={150} />
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
                        <Link href="/">DEX</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.connect}>
                <div className={styles.inputWrapper}>
                    <button className="px-3 py-2"><AiOutlineSearch /></button>
                    <input type="text" placeholder="Search" className={styles.input}/>
                </div>
                Connect
            </div>
        </div>
    );
};

export default Header;
