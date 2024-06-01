import React, { useRef, useState } from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import stars from '../../assets/stars.png'
import gay from '../../assets/person_1.png'
import person2 from '../../assets/person_2.png'
import person3 from '../../assets/person_3.png'
import person4 from '../../assets/person_4.png'
import './Slider.scss';
import s from './Slider.module.scss'
import { motion } from 'framer-motion'

export const Slider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiper = useSwiper()
    return (
        <motion.div 
            className={s.sliderwrapper}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.1 }}
        >

            <div className={s.sliderHeader}>
                <div className={s.headerContent}>
                    <svg
                        ref={prevRef}
                        className={"swiper-button-prev1"}
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    fill="none"
                >
                    <path
                        d="M22.3755 6.71234L11.1877 17.9001L22.3755 29.0879"
                        stroke="#7F99F4"
                        strokeWidth="4.94141"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                </svg>

                    <h1>Отзывы наших клиентов</h1>

                    <svg
                        ref={nextRef}
                        className={`swiper-button-next1 ${s.right}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                    >
                        <path
                            d="M22.3755 6.71234L11.1877 17.9001L22.3755 29.0879"
                            stroke="#7F99F4"
                            strokeWidth="4.94141"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg></div>
            </div>
            <Swiper
                navigation={{
                    prevEl: '.swiper-button-prev1',
                    nextEl: '.swiper-button-next1'
                }}
                slidesPerView={'auto'}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                        <h1>“</h1>
                        <div className={'content'}>
                            <p>
                                Очень доволен работой PandaStudio!
                                Заказал у них разработку сайта для
                                моего бизнеса, и результат получился
                                отличным. Сайт красивый, удобный и
                                работает без проблем. Команда была всегда на связи и оперативно решала
                                все вопросы.
                                Спасибо за прекрасный сайт!
                            </p>
                            <img src={stars} className={'stars'} alt={"stars"}/>
                            <div className={'user'}>
                                <img src={gay} alt={"person"}/>
                                <div>
                                    <h2>Сергей</h2>
                                    <p>Wordpress, Javascript, Api</p>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>“</h1>
                    <div className={'content'}>
                        <p>
                            Очень доволен работой PandaStudio!
                            Заказал у них разработку сайта для
                            моего бизнеса, и результат получился
                            отличным. Сайт красивый, удобный и
                            работает без проблем. Команда была всегда на связи и оперативно решала
                            все вопросы.
                            Спасибо за прекрасный сайт!                        </p>
                        <img src={stars} className={'stars'} alt={"stars"}/>
                        <div className={'user'}>
                            <img src={person2} alt={"person"}/>
                            <div>
                                <h2>Сергей</h2>
                                <p>Wordpress, Javascript, Api</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>“</h1>
                    <div className={'content'}>
                        <p>
                            Спасибо PandaStudio за создание
                            корпоративного сайта для нашей
                            компании! Сайт получился не только
                            красивым, но и очень быстрым.
                            Особо хочу отметить их работу по
                            адаптации сайта для мобильных
                            устройств. Всё было сделано в срок и
                            качественно.
                        </p>
                        <img src={stars} className={'stars'} alt={"stars"}/>
                        <div className={'user'}>
                            <img src={person3} alt={"person"}/>
                            <div>
                                <h2>Вика</h2>
                                <p>Wordpress, HTML5, JavaScript, PHP</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>“</h1>
                    <div className={'content'}>
                        <p>
                            Очень доволен работой PandaStudio!
                            Сайт получился красивым и удобным.
                            Ребята всё сделали быстро
                            и качественно. Спасибо за классный
                            сайт!
                        </p>
                        <img src={stars} className={'stars'} alt={"stars"}/>
                        <div className={'user'}>
                            <img src={person4} alt={"person"}/>
                            <div>
                                <h2>Ирина</h2>
                                <p>ReactJS, NestJS, MySQL</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>“</h1>
                    <div className={'content'}>
                        <p>
                            Очень доволен работой PandaStudio!
                            Заказал у них разработку сайта для
                            моего бизнеса, и результат получился
                            отличным. Сайт красивый, удобный и
                            работает без проблем. Команда была всегда на связи и оперативно решала
                            все вопросы.
                            Спасибо за прекрасный сайт!
                        </p>
                        <img src={stars} className={'stars'} alt={"stars"}/>
                        <div className={'user'}>
                            <img src={gay} alt={"person"}/>
                            <div>
                                <h2>Сергей</h2>
                                <p>Wordpress, Javascript, Api</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </motion.div>
    )
}