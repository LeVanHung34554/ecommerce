import React from 'react'
import Color from '../components/Color'
const CompareProduct = () => {
  return (
  <>
  <div className="compare-product-wrapper py-5 home-wrapper-2">
  <div className="container-xxl">
    <div className="row">
        <div className="col-3">
            <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="product-card-image">
                <img src="images/watch.jpg" alt ="watch"/> 
                </div>
                <div className="compare-product-details">
                    <h5 className="title">Sản phẩm đồng hồ mang thương hiệu MVW với nhiều mẫu mã năng động, trẻ trung nhưng không kém phần tinh tế và sang trọng.</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                        <div className='product-detail'>
                            <h5>Brand:</h5>
                            <p>Have</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Availablity:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Color:</h5>
                        <Color/>
                        </div>
                        <div className='product-detail'>
                            <h5>Size:</h5>
                        <div className="d-flex gap-10">
                            <p>
                                S
                            </p>
                            <p>
                                M
                            </p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="product-card-image">
                <img src="images/watch.jpg" alt ="watch"/> 
                </div>
                <div className="compare-product-details">
                    <h5 className="title">Sản phẩm đồng hồ mang thương hiệu MVW với nhiều mẫu mã năng động, trẻ trung nhưng không kém phần tinh tế và sang trọng.</h5>
                    <h6 className="price mb-3 mt-3">$100</h6>
                    <div>
                        <div className='product-detail'>
                            <h5>Brand:</h5>
                            <p>Have</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Availablity:</h5>
                            <p>In Stock</p>
                        </div>
                        <div className='product-detail'>
                            <h5>Color:</h5>
                        <Color/>
                        </div>
                        <div className='product-detail'>
                            <h5>Size:</h5>
                        <div className="d-flex gap-10">
                            <p>
                                S
                            </p>
                            <p>
                                M
                            </p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>
  </div>
  </>

  )
}

export default CompareProduct
