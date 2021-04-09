import { useState, useEffect } from "react";
import Head from 'next/head'
import styles from '../../styles/product.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { connect } from "react-redux"
import { getProducts, getProduct } from '../../redux/actions/index'
import { useRouter } from 'next/router'


/************************/
/* กำลังทำรูปสินค้า */
/************************/

const ProductPage = ({ product, Products, getProducts, getProduct }) => {
    const router = useRouter()
    const { product_id } = router.query
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    console.log(product_id)
    useEffect(() => getProduct(product_id), [])

    return (
        <>
            <Head>
                <title>Product</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>

            <main className={styles.container}>
                <Header />
                <div className={styles.Speceheader}>

                </div>
                <div className={styles.ShowImgBox}>

                    <div className={styles.carouselContainer}>
                        <img className={styles.imgProduct} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" loading="lazy" />
                    </div>
                    <div className={styles.smallPhotos}>
                        {
                            /*photos.slice(0, 5).map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={image}
                                        className={styles.smallPhoto}
                                        style={{ borderColor: selectedPhoto === index && "black" }}
                                        onClick={() => setSelectedPhoto(index)}
                                        loading="lazy"
                                    />
                                );
                            })*/}
                        <img src="../logoImg.svg" loading="lazy" />
                        <img src="../logoImg.svg" loading="lazy" />
                        <img src="../logoImg.svg" loading="lazy" />
                        <img src="../logoImg.svg" loading="lazy" />
                    </div>
                </div>
                <div className={styles.DatailTitleBox}>
                    <div className={styles.wrapTitleBox}>
                        <div className={styles.titleBox}>
                            <h2 className={styles.titleNameProduct}>hello myname is nine what about you?</h2>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <h3 className={styles.priceProduct}>1200 บาท</h3>
                            <div className={styles.amountBox}>
                                <input type="number" defaultValue={0} className={styles.amount} />
                                <button onClick={product} className={styles.addCart}>ADD TO CART</button>
                            </div>
                            <br />
                            <Link href="#" ><a className={styles.wishlist}><i className="fa fa-heart-o" aria-hidden="true"></i>  ADD TO WISHLIST</a></Link>
                        </div>


                    </div>
                </div>
                <div className={styles.DatailProductBox}>
                    <div className={styles.wrapReview}>
                        <div className={styles.discriptionBox}>
                            <h5>DESCRIPTION</h5>
                            <p className={styles.font}>It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point of using
                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like readable English. Many desktop publishing
                            packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <hr />
                            <h5>REVIEW</h5>
                            <p className={styles.font}>It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point of using
                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like readable English. Many desktop publishing
                            packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                        <div className={styles.ReviewBox}>
                            <p className={styles.notice}>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like readable English. Many desktop publishing
                                packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                                'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                                over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                    </div>
                    <hr className={styles.line} />
                    <h5 className={styles.titlerelateProdutcs}>RELATED PRODUCTS</h5>
                    <div className={styles.RelateProductsBox}>
                        <div className={styles.relateProduts}>
                            {Products.map(i => (
                                <Link href="#"><a className={styles.relateProduct} key={i.id}>
                                    <div >
                                        <img src={i.images[0].image} className={styles.imgrelateProduct} />
                                        <h5 className={styles.titlerelate}>{i.name}</h5>
                                        <span className={styles.category}>{i.cate}</span>
                                        <div className={styles.ratingrelate}>
                                            {

                                            }
                                            <span className="fa fa-star"></span>

                                        </div>
                                        <span className={styles.category}>ราคา 12,000 บาท</span>
                                    </div>
                                </a></Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
                {/*<Footer />*/}

            </main>

        </>
    )
}


const mapStateToProps = state => {
    return {
        Products: state.Products.Products,
        Product: state.Products.Product
    }
    console.log(state.Products.Product)
}


export default connect(mapStateToProps, { getProduct, getProducts })(ProductPage)