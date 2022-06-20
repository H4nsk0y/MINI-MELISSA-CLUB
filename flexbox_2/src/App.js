import React from "react";
import '../src/styles/App.css'
import '../src/index.css'
import img from './imagine/shoes.png'


function App() {
	return (
		<div className="Main_FlexContainer">
			<div className="Flex_container">

				<div className="mail_logo">
					<p>MINI MELISSA CLUB</p>
					<p className="item_1">Ваш заказ создан</p>
				</div>



				<div className="Hello_User">
					<div>Здравствуйте, Ханахмед</div>
					<div className="item_2">Спасибо за ваш заказ на сайте MiniMelissa.ru.<br />
						Информация о вашем заказе представлена ниже</div>
					<div className="item_3">Заказ #11111111</div>
				</div>




				<div className="Your_Order">

					<div className="Delivery_Info">
						<div>Информация о доставке</div>
						<div>Санкт-Петербург<br />ул. Удельная 108</div>
					</div>


					<div className="Personal_Info">
						<div>Персональная информация:</div>
						<div>Мирзоев Ханахмед Бегахмедович<br />
							<div className="item_6">Ren4lk@yandex.ru</div></div>
					</div>


					<div className="Payment">
						<div className="item_4">Ваш заказ</div>
						<div className="item_5">К оплате: 3666 р</div>
					</div>


					<div className="List">

						<div className="List_Item">
							<img className="Piсture"
								src={img}
								alt="shoes"
							/>
							<div className="Content">
								<div className="Shoe_Size">
									<p>Обувь</p>
									<p>Размер: 35</p>
								</div>
								<div className="Name">
									Non scelerisque<br />1280р.
								</div>
							</div>
						</div>

						<div className="List_Item">
							<img className="Piсture"
								src={img}
								alt="shoes"
							/>
							<div className="Content">
								<div className="Shoe_Size">
									<p>Обувь</p>
									<p>Размер: 37</p>
								</div>
								<div className="Name">
									Non scelerisque<br />1280р.
								</div>
							</div>
						</div>

						<div className="List_Item">
							<img className="Piсture"
								src={img}
								alt="shoes"
							/>
							<div className="Content">
								<div className="Shoe_Size">
									<p>Обувь</p>
									<p>Размер: 36</p>
								</div>
								<div className="Name">
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
