"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'
import { Pagination } from 'swiper/modules';

interface Item {
  src: string;
  alt: string;
  text: string;
  description: string;
}

const items: Item[] = [
  {
    src: '/assets/img1.png',
    alt: 'img1',
    text: 'Анализ текущего состояния карьеры',
    description: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
  },
  {
    src: '/assets/img2.png',
    alt: 'img2',
    text: 'Поиск работы',
    description: "Поможем сформировать профессиональный портфель, который выделит вас среди других кандидатов.",
  },
  {
    src: '/assets/img3.png',
    alt: 'img3',
    text: 'Сопроводительные письма и резюме',
    description: "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
  },
  {
    src: '/assets/img4.png',
    alt: 'img4',
    text: 'Тренинг по презентации личного бренда',
    description: "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
  },
  {
    src: '/assets/img5.png',
    alt: 'img5',
    text: 'Подготовка к собеседованию',
    description: "Научим говорить о себе кратко, ярко и профессионально.",
  },
  {
    src: '/assets/img6.png',
    alt: 'img6',
    text: 'Рекомендация по базе STEMPS Career',
    description: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
  },
];

const Slider: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <section className="career-services">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          ...pagination,
          enabled: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1600: {
            slidesPerView: 4,
            pagination: {
              enabled: false,
            },
          },
          1200: {
            slidesPerView: 3,
            pagination: {
              enabled: false,
            },
          },
          768: {
            slidesPerView: 2,
            pagination: {
              enabled: false,
            },
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <article className='flex flex-col justify-between h-full'>
              <div className='flex items-start gap-6 md:flex-col md:gap-0 md:items-start md:justify-between h-full'>
                <div>
                  <Image
                    src={item.src}
                    width={80}
                    height={80}
                    alt={item.alt}
                  />
                </div>
                <h3 className='text-[24px] text-start leading-[36px] md:text-[32px]'>{item.text}</h3>
              </div>
              <p className='md:hidden'>
                {item.description}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
