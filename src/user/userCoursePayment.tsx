import React from 'react';
import './userCoursePayment.scss';
import dataService from '../util/data.service';
import sessionService from '../util/storage.service';
import { Link, useNavigate } from 'react-router-dom';

interface UserCoursePaymentProps {
    // Define the props for your component here
}

const UserCoursePayment: React.FC<UserCoursePaymentProps> = (props) => {
    const navigate = useNavigate();
	let data;
    if (sessionService.get('user') === 'user') {
        data = dataService.get().userData[sessionService.get('memberProfile')];
        console.log(data);
    }
	
    return (
        // JSX code for your component's UI goes here
        <div className='payment-wrapper'>
            <div style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>返回</div>
            <div className='title'>結帳</div>
            <div className='payment-detail'>
                <div className='left-div'>
                    <div className='payment-entry'>
						<div className='payment-item'>
							<div>
								Professional Mediation Specialist Certification Training Course – Property and Building Management Mediation Specialist
							</div>
							<div>{data.role==='member'?'免費':'$3000'}</div>
						</div>
                    </div>
                    <div className='payment-summary'>
                        <h4>
                            總結
                        </h4>
                        <div className='payment-total'>
                            <div>
                                總共
                            </div>
                           <div>{data.role==='member'?'免費':'$3000'}</div>
                        </div>
						<Link to='/user/payment/courseSuccess' className='payment-btn'>付款</Link>
						<div className='payment-terms'>Payment are secured and encrypted</div>
                    </div>
                </div>
                <div className='right-div'>
					<div className='customer-info'>
						<h2 className='payment-info-title'>
							顧客資料
						</h2>
						<div>
							姓 <input type="text" placeholder='陳'/>
						</div>
						<div>
							名 <input type="text" placeholder='大文'/>
						</div>
						<div>
							公司名稱 <input type="text" placeholder='香港中心 (選填)'/>
						</div>
						<div>
							城市 <input type="text" placeholder='香港'/>
						</div>
						<div>
							街道 <input type="text" placeholder='皇后大道'/>
						</div>
						<div>
							國家/地區 <input type="text" placeholder='香港'/>
						</div>
					</div>
					<div className='customer-info'>
						<h2 className='payment-info-title'>聯絡資料</h2>
						<div>
							電郵 <input type="text" />
						</div>
						<div>
							電話 <input type="text" />
						</div>
					</div>
                    <div className='customer-info'>
                        <h2 className='payment-info-title'>付款方式</h2>
                        <div className='radio-option'>
							<div>
								<input className='input-radio' type="radio" name="paymentMethod" value="credit" />
								<label>
									信用卡
								</label>
							</div>
							<div style={{ marginBottom: '0px'}} >
								<input type="text" placeholder='Card Number'/>
							</div>
							<div>
								<input type="text" style={{ width: '58%',  marginRight:'34px' }} placeholder='MM/YY'/>
								<input type="text" style={{ width: '30%' }} placeholder='CVC'/>
							</div>
						</div>
                        <div>
                            <input className='input-radio' type="radio" name="paymentMethod" value="debit" />
                            <label>
                                PayPal
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCoursePayment;