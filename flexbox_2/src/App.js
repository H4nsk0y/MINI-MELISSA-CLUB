import React from "react";
import '../src/styles/App.css'
import '../src/index.css'
import img from './imagine/shoes.png'


function App() {
	return (
		<div className="main-flex-container">
			<div className="flex-container">

				<div className="mail-logo">
					<p>MINI MELISSA CLUB</p>
					<p className="mail-logo-order">Ваш заказ создан</p>
				</div>



				<div className="mail-msg">
					<div>Здравствуйте, Ханахмед</div>
					<div className="mail-msg-thx">Спасибо за ваш заказ на сайте MiniMelissa.ru.<br />
						Информация о вашем заказе представлена ниже</div>
					<div className="mail-msg-order-num">Заказ #11111111</div>
				</div>




				<div className="mail-order">

					<div className="mail-order-delivery">
						<div>Информация о доставке</div>
						<div>Санкт-Петербург<br />ул. Удельная 108</div>
					</div>


					<div className="mail-order-pinfo">
						<div>Персональная информация:</div>
						<div>Мирзоев Ханахмед Бегахмедович<br />
							<div className="mail-order-email">Ren4lk@yandex.ru</div></div>
					</div>


					<div className="mail-order-payment">
						<div className="mail-order-your-order">Ваш заказ</div>
						<div className="mail-order-price">К оплате: 3666 р</div>
					</div>


					<div className="mail-order-list">

						<div className="mail-order-list-item">
							<img className="mail-order-picture"
								src={img}
								alt="shoes"
							/>
							<div className="mail-order-content">
								<div className="mail-order-shoe-size">
									<p>Обувь</p>
									<p>Размер: 35</p>
								</div>
								<div className="mail-order-name">
									Non scelerisque<br />1280р.
								</div>
							</div>
						</div>

						<div className="mail-order-list-item">
							<img className="mail-order-picture"
								src={img}
								alt="shoes"
							/>
							<div className="mail-order-content">
								<div className="mail-order-shoe-size">
									<p>Обувь</p>
									<p>Размер: 37</p>
								</div>
								<div className="mail-order-name">
									Non scelerisque<br />1280р.
								</div>
							</div>
						</div>

						<div className="mail-order-list-item">
							<img className="mail-order-picture"
								src={img}
								alt="shoes"
							/>
							<div className="mail-order-content">
								<div className="mail-order-shoe-size">
									<p>Обувь</p>
									<p>Размер: 36</p>
								</div>
								<div className="mail-order-name">
									Non scelerisque<br />1280р.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
