<template>
  <swiper
    class="slider-el"
    :slides-per-view="1"
    :space-between="50"
    effect="fade"
    :autoHeight="true"
    :fadeEffect="{
      crossFade: true,
    }"
    :navigation="{
      prevEl: '.slider-prev-btn',
      nextEl: '.slider-next-btn',
    }"
    :modules="[Navigation, Pagination, EffectFade]"
    :pagination="{ clickable: true }"
  >
    <swiper-slide class="slide-item">
      <div class="slide-item__inner">
        <div class="rules-slide__title">
          Время — ценный ресурс. И чтобы распоряжаться им правильно, нужно знать
          основные принципы управления персоналом
        </div>
        <div class="times-slide__body">
          <div class="times-slide__ico">
            <img
              src="@/assets/img/modules/module-6/time-slider/slide-ico-1.svg"
              alt=""
            />
          </div>
          <div class="times-slide__content">
            <div class="times-slide__title">1. Личная инициатива</div>
            <div class="times-slide__text">
              Mы призываем к инициативности и поощряем установку: «Я сделаю это!
              Я возьму это в свои руки...»
            </div>
            <ul class="times-slide__list">
              <li>
                Мы берем на себя ответственность, не боимся рисковать и
                приветствуем ответственное мышление и поведение
              </li>
              <li>
                Мы допускаем, что при этом могут возникнуть ошибки, и мы учимся
                на них.
              </li>
              <li>
                Руководители поддерживают ответственные действия своих
                сотрудников и предоставляют им благоприятные условия для
                развития инициативности.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item">
      <div class="slide-item__inner">
        <div class="rules-slide__title">
          Время — ценный ресурс. И чтобы распоряжаться им правильно, нужно знать
          основные принципы управления персоналом
        </div>
        <div class="times-slide__body">
          <div class="times-slide__ico">
            <img
              src="@/assets/img/modules/module-6/time-slider/slide-ico-2.svg"
              alt=""
            />
          </div>
          <div class="times-slide__content">
            <div class="times-slide__title">2. Инновационная культура</div>
            <div class="times-slide__text">
              Mы профессионально выросли на нестандартных идеях. Так будет и
              впредь. Мы ценим предложение каждого сотрудника.
            </div>
            <ul class="times-slide__list">
              <li>
                Мы ищем и используем лучшие идеи, независимо от того, откуда они
                исходят
              </li>
              <li>
                Постоянно совершенствоваться - вот наша цель. Речь идет не
                только о разработке новых продуктов, но и обо всем, что мы
                делаем: у нас есть потребность выполнять свою работу лучше, чем
                раньше, даже, если этого улучшения можно добиться, двигаясь
                маленькими шагами
              </li>
              <li>
                Мы регулярно оцениваем существующие бизнес задачи на
                экономическую эффек- тивность и целесообразность.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item">
      <div class="slide-item__inner">
        <div class="rules-slide__title">
          Время — ценный ресурс. И чтобы распоряжаться им правильно, нужно знать
          основные принципы управления персоналом
        </div>
        <div class="times-slide__body">
          <div class="times-slide__ico">
            <img
              src="@/assets/img/modules/module-6/time-slider/slide-ico-3.svg"
              alt=""
            />
          </div>
          <div class="times-slide__content">
            <div class="times-slide__title">3. Информация и коммуникация</div>
            <div class="times-slide__text">
              Mы призываем к полной ясности в речи и поощряем обмен информацией.
            </div>
            <ul class="times-slide__list">
              <li>
                Мы говорим с другими уважительно, честно, откровенно и доступно
              </li>
              <li>
                Мы делимся своими знаниями с другими коллегами и своевременно
                привлекаем компетентных сотрудников в роли экспертов для
                принятия решений. Мы открыто обмениваемся мнениями, невзирая на
                иерархию и сферу деятельности в компании. Наш девиз: я делюсь
                тем, что знаю и умею, я получу знания и навыки, которых у меня
                пока нет
              </li>
              <li>
                Мы внимательно слушаем и уточняем, для того, чтобы понять точно,
                чего хочет от нас собеседник
              </li>
              <li>
                Мы даём только необходимую информацию, излагая её кратко и
                понятно, правильно подбирая её адресатов, и заботимся о том,
                чтобы не перегружать получателей ненужной информацией
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item">
      <div class="slide-item__inner">
        <div class="rules-slide__title">
          Время — ценный ресурс. И чтобы распоряжаться им правильно, нужно знать
          основные принципы управления персоналом
        </div>
        <div class="times-slide__body">
          <div class="times-slide__ico">
            <img
              src="@/assets/img/modules/module-6/time-slider/slide-ico-4.svg"
              alt=""
            />
          </div>
          <div class="times-slide__content">
            <div class="times-slide__title">4. Отношения в коллективе</div>
            <div class="times-slide__text">
              Доверие и взаимное уважение – основа для работы в коллективе.
            </div>
            <ul class="times-slide__list">
              <li>
                Мы ценим справедливость и терпимость в отношениях друг с другом
                и не признаём высокомерного поведения
              </li>
              <li>
                Мы обещаем только то, что реально можем выполнить, таким
                образом, сохраняя доверие
              </li>
              <li>
                Мы всегда готовы помочь и принять помощь, так как высокие
                достижения являются результатом усилий всей команды.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item">
      <div class="slide-item__inner">
        <div class="rules-slide__title">
          Время — ценный ресурс. И чтобы распоряжаться им правильно, нужно знать
          основные принципы управления персоналом
        </div>
        <div class="times-slide__body">
          <div class="times-slide__ico">
            <img
              src="@/assets/img/modules/module-6/time-slider/slide-ico-5.svg"
              alt=""
            />
          </div>
          <div class="times-slide__content">
            <div class="times-slide__title">5. Конфликт как шанс</div>
            <div class="times-slide__text">
              Mы допускаем конфликты и используем их как шанс для поиска
              эффективных решений.
            </div>
            <ul class="times-slide__list">
              <li>
                Открытость, взаимное уважение и терпимость - основы для
                отношений в нашем коллективе. Особенно это касается свободного
                выражения
              </li>
              <li>
                Мы выражаем наше мнение откровенно и по существу, даже если оно
                противоречит мнению коллег или начальников
              </li>
              <li>
                Мы признаём конфликты, относимся к ним серьёзно и стремимся
                сообща найти наиболее подходящие решения
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item">
      <div class="slide-item__inner">
        <div class="rules-slide__title">
          Время — ценный ресурс. И чтобы распоряжаться им правильно, нужно знать
          основные принципы управления персоналом
        </div>
        <div class="times-slide__body">
          <div class="times-slide__ico">
            <img
              src="@/assets/img/modules/module-6/time-slider/slide-ico-6.svg"
              alt=""
            />
          </div>
          <div class="times-slide__content">
            <div class="times-slide__title">
              6. Профессиональный рост и самораз витие – наша обязанность
            </div>
            <div class="times-slide__text">
              Mы призываем к постоянному совершенствованию и поощряем его.
            </div>
            <ul class="times-slide__list">
              <li>
                В рамках корпоративной политики мы ищем и используем все
                возможности для личного и профессионального развития.
              </li>
              <li>
                Руководители поощряют дальнейшее развитие своих подчинённых для
                обеспечения преемственности и своевременной подготовки
                заместителей. Такой подход является подтверждением сильных
                сторон управленческих качеств руководителя любого уровня
              </li>
              <li>
                Мы берём на себя ответственность по передаче нашим коллегам
                своих знаний и опыта
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide-item">
      <div class="slide-item__inner">
        <div class="rules-slide__title">
          Время — ценный ресурс. И чтобы распоряжаться им правильно, нужно знать
          основные принципы управления персоналом
        </div>
        <div class="times-slide__body">
          <div class="times-slide__ico">
            <img
              src="@/assets/img/modules/module-6/time-slider/slide-ico-6.svg"
              alt=""
            />
          </div>
          <div class="times-slide__content">
            <div class="times-slide__title">7. Наше понимание лидерства</div>
            <div class="times-slide__text">
              Mы руководим нашими сотрудниками в соответствии с основными
              принципами управления персоналом и работы в коллективе.
            </div>
            <ul class="times-slide__list">
              <li>
                Руководители вместе со своими сотрудниками определяют и
                согласуют однозначные, сложные, но достижимые цели, которые
                исходят из общих целей компании
              </li>
              <li>
                Руководители помогают сотрудникам всех уровней осознать, что
                каждый из нас вносит свой вклад в общий успех
              </li>
              <li>
                Руководители определяют задачи, полномочия и степень
                ответственности своих сотрудников с учетом их квалификации и
                способностей. Они замечают и приветствуют успехи подчиненных
              </li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="nav-buttons">
      <div class="slider-prev-btn">Назад</div>
      <div class="slider-next-btn">Дальше</div>
    </div>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
</script>
<style lang="scss">
.times-slide__body {
  display: flex;
  background: #fff;
  border-radius: fromWidth(24);
  border: fromWidth(4) solid #000;
  padding: fromWidth(32) fromWidth(24);
  gap: fromWidth(48);
}

.times-slide__ico {
  width: fromWidth(160);
  height: fromWidth(174);
}

.times-slide__content {
  display: flex;
  flex-direction: column;
  gap: fromWidth(24);
}

.times-slide__text,
.times-slide__list {
  font-size: fromWidth(24);
  font-weight: 600;
  line-height: 158%;
}

.times-slide__list {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: fromWidth(24);
  li::marker {
    color: #0abbef;
    font-size: fromWidth(34);
  }
}
</style>
