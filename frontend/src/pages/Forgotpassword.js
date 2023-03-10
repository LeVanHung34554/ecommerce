import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import Container from '../components/Container'
const Forgotpassword = () => {
    return (
        <>
            <Container class1="login-wrapper  py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Reset Your Password</h3>
                            <p className="text-center my-2 mb-3">
                                We will send you  an email to reset  your password
                            </p>
                            <form action="" className="d-flex flex-column gap-15" >
                                <CustomInput type="email" name='email' placeholder='email' />
                                <div>
                                    <div className='mt-3 d-flex jusitfy-content-center flex-column gap-15 align-items-center'>
                                        <button className='botton border-0 ' type='submit'>
                                            Submit
                                        </button>
                                        <Link to='/login'>Cancel</Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default Forgotpassword
