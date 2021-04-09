import { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'


export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className={styles.contrainer}>
                <div className={styles.logo}>
                    <img src="../logoImg.svg" className={styles.logoImg} />
                </div>
                <div className={styles.wrapBoxMenu}>
                    <div className={styles.wrapMenu}>
                        <div className={styles.wrapBoxLinline}>
                            <Link href="/">
                                <a className={styles.linkMenu}>
                                    THE SHOP
                            </a>
                            </Link>
                            <Link href="#">
                                <a className={styles.linkMenu}>
                                    Fresh-Air info
                            </a>
                            </Link>
                        </div>
                        <br />
                        <hr />
                        <div className={styles.wrapBoxLinkUnderline}>
                            <Link href="#">
                                <a className={styles.linkUnderline}>
                                    Pre-Order
                            </a>
                            </Link>|
                        <Link href="#">
                                <a className={styles.linkUnderline}>
                                    Help Center
                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.wrapMenuLogo}>
                        <Link href="#">
                            <a onClick={() => !open ? setOpen(true) : setOpen(false)} className={styles.menuLogo}>
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </a>
                        </Link>
                        <Link href="#">
                            <a onClick={() => !open ? setOpen(true) : setOpen(false)} className={styles.menuLogo}>
                                <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                        </Link>
                        <Link href="#">
                            <a onClick={() => !open ? setOpen(true) : setOpen(false)} className={styles.menuLogo}>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.wrapResMenu}>
                    <button onClick={() => !open ? setOpen(true) : setOpen(false)} className={styles.btnResp}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <div className={open ? styles.wrapResp1 : styles.wrapResp2}>
                <div className={styles.headMenuResp}>
                    <button onClick={() => open ? setOpen(false) : setOpen(true)} className={styles.back}><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                    <div className={styles.headMenuSelect}>
                        <Link href="#">
                            <a className={styles.menuLogo}>
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.menuLogo}>
                                <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.menuLogo}>
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.wrapMenuReps}>
                    <h5 className={styles.headCart}>My Cart</h5>
                    <hr className={styles.line} />
                    <table className={styles.tbCart}>

                        <tr>
                            <td className={styles.tbColum}>
                                <img src="./logoImg.svg" className={styles.ImgInCart} />
                            </td>
                            <td className={styles.tbColum}>
                                <span className={styles.fontResp}>GTA IV</span>

                            </td>
                            <td className={styles.tbColum}>
                                <span className={styles.fontResp}>12,000 ฿</span>
                                <button className={styles.delete}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tbColum}>
                                <img src="./logoImg.svg" className={styles.ImgInCart} />
                            </td>
                            <td className={styles.tbColum}>
                                <span className={styles.fontResp}>GTA IV</span>

                            </td>
                            <td className={styles.tbColum}>
                                <span className={styles.fontResp}>12,000 ฿</span>
                                <button className={styles.delete}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                            </td>
                        </tr>

                    </table>
                </div>
                <hr className={styles.line} />
                <div className={styles.RespFooter}>
                    <div className={styles.DiscoutBox}>
                        <input type="text" placeholder="CODE" className={styles.discount} />
                        <button className={styles.addDiscount}>APPLY COUPON</button>
                    </div>
                    <span className={styles.subtotal}>Subtotal</span>
                    <span className={styles.subtotalBath}>12,000 บาท</span>
                </div>
            </div>
        </>
    )
}
