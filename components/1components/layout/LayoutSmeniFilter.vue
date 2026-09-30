<script setup lang='ts'>
const props = defineProps<{
  items: any
}>()
import { ym_event } from '../../composables/metrika'
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { object, string } from 'yup'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'

const defaultItems = [
  'Расписание',
  'Учебная программа',
  'Методисты',
  'Преподаватели',
]

interface Data {
  'Расписание': { date: string, subjects: { time: string, name: string }[] }[]
  'Учебная программа': { name: string, topics: string[] }[]
  'Методисты': { name: string, subject: string, descr: string, src: string }[]
  'Преподаватели': { name: string, subject: string, descr: string, src: string }[]
}

interface Item {
  name: string
  level: string
  class: number
  data: Data
}

interface Items {
  [key: string]: Item[]
}

const form = useTemplateRef('select-form')

const items1 = props.items;

const itemsMass = [];
items1.forEach(smenItems => {
  const smenNapravArray= [];
  if (smenItems.napravlenie) {
    const raspisanie:any = smenItems.raspis;
    const idAdmMer:any = smenItems.idAdmMer;

    smenItems.napravlenie.forEach(smenNaprav => {

      if (smenNaprav) {
        const preps:any = smenNaprav.smenprep;
        const metodist:any = smenNaprav.smenmetodist;
        const uchprog:any = smenNaprav.uchprogram;
        
        let index = 0;
        smenNaprav.smennapclass.split(',').forEach(smenClass => {
          index = index+1;
          if (smenClass) {
            const massInfo:any = {};
            massInfo.name = smenNaprav.napnametitle;
            massInfo.level = smenNaprav.level[0];
            massInfo.class = parseFloat(smenClass);

             //собираем массив для информации о смене
            const dataMass:any = {};
            dataMass.raspis = raspisanie;
            dataMass.metodist = metodist;
            dataMass.preps = preps;
            dataMass.uchprogram = uchprog;
            dataMass.idAdmMer = idAdmMer;
           
            massInfo.data = dataMass;
            smenNapravArray.push(massInfo);
            itemsMass[smenItems.smenname] = smenNapravArray;
          }
        });
      }

    });
  }
});


// let items2: Items = {
//   'Июль': [
//     {
//       name: 'Информатика',
//       level: 'продвинутый',
//       class: 7,
//       data: {
//         'Расписание': [
//           {
//             date: '10.01.01-01.02.12',
//             descr: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет1',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет1',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет1',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет1',
//               },
//             ],
//           },
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет2',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет2',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет2',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет2',
//               },
//             ],
//           },
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет3',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет3',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет3',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет3',
//               },
//             ],
//           },
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет4',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет4',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет4',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет4',
//               },
//             ],
//           },
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет5',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет5',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет5',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет5',
//               },
//             ],
//           },
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет6',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет6',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет6',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет6',
//               },
//             ],
//           },
//         ],
//         'Методисты': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//         ],
//         'Преподаватели': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/ph.jpg',
//           },
//         ],
//         'Учебная программа': [
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//         ],
//       },
//     },
//     {
//       name: 'Информатика',
//       level: 'продвинутый',
//       class: 8,
//       data: {
//         'Расписание': [
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет',
//               },
//             ],
//           },
//         ],
//         'Методисты': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Преподаватели': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Учебная программа': [
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//         ],
//       },
//     },
//     {
//       name: 'Математика',
//       level: 'профи',
//       class: 10,
//       data: {
//         'Расписание': [
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет',
//               },
//             ],
//           },
//         ],
//         'Методисты': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Преподаватели': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Учебная программа': [
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//         ],
//       },
//     },
//   ],
//   'Август 2.0': [
//     {
//       name: 'Физика',
//       level: 'продвинутый',
//       class: 7,
//       data: {
//         'Расписание': [
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет',
//               },
//             ],
//           },
//         ],
//         'Методисты': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Преподаватели': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Учебная программа': [
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//         ],
//       },
//     },
//     {
//       name: 'Физика',
//       level: 'профи',
//       class: 11,
//       data: {
//         'Расписание': [
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет',
//               },
//             ],
//           },
//         ],
//         'Методисты': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Преподаватели': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Учебная программа': [
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//         ],
//       },
//     },
//     {
//       name: 'Математика',
//       level: 'профи',
//       class: 10,
//       data: {
//         'Расписание': [
//           {
//             date: '10.01.01-01.02.12',
//             subjects: [
//               {
//                 time: '9:00-10:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '10:00-11:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '11:00-12:00',
//                 name: 'предмет',
//               },
//               {
//                 time: '13:00-14:00',
//                 name: 'предмет',
//               },
//             ],
//           },
//         ],
//         'Методисты': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Преподаватели': [
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//           {
//             name: 'Фамития Имя Отчество',
//             subject: 'Предмет',
//             descr: 'Краткое описание',
//             src: '/Smeni/Filter/methodist_1.webp',
//           },
//         ],
//         'Учебная программа': [
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//           {
//             name: 'Название очень длинное поместиться в теории',
//             topics: [
//               'Тема 1',
//               'Тема 2',
//               'Тема 3',
//             ],
//           },
//         ],
//       },
//     },
//   ],
// }
let items = itemsMass;



function getDistinctArray(values: Items, property: keyof Item) {
  if (property === 'name') {
    return [...new Set(Object.values(values).flatMap(smena => smena.map(el => el[property])))]
  }

  return [...new Set(Object.values(values).flatMap(smena => smena.flatMap(el => (el[property]))).map(String))];
  
}

function filterItemsByField(items: Items, compare: (el: Item) => boolean) {
  return Object.fromEntries(
    Object.entries(items).map(([key, value]) => [
      key,
      value.filter(compare),
    ]).filter(([_, value]) => value.length > 0),
  )
}


const smens = Object.keys(items)
const classes = getDistinctArray(items, 'class')
const levels = getDistinctArray(items, 'level')
const directions = getDistinctArray(items, 'name')

const filteredItems = computed(() => {
  const values = form.value?.values || {}
  const { smen, direction, class: selectedClass, level } = values

  let filtered = { ...items }

  if (smen) {
    filtered = { [smen]: filtered[smen] }
  }

  if (direction) {
    filtered = filterItemsByField(filtered, el => el.name === direction)
  }

  if (selectedClass) {
    filtered = filterItemsByField(filtered, el => el.class === Number(selectedClass))
  }

  if (level) {
    filtered = filterItemsByField(filtered, el => el.level === level)
  }
  console.log(filtered);
  return filtered
})

function filterField(all: string[], available: string[]) {
  return all.map(item => ({
    name: item,
    disabled: !available.includes(item),
  }))
}

const filteredSmens = computed(() => {
  return filterField(smens, Object.keys(filteredItems.value))
})

const filteredClasses = computed(() => {
  return filterField(classes, getDistinctArray(filteredItems.value, 'class'))
})

const filteredLevels = computed(() => {
  return filterField(levels, getDistinctArray(filteredItems.value, 'level'))
})

const filteredDirections = computed(() => {
  return filterField(directions, getDistinctArray(filteredItems.value, 'name'))
})

const schema = toTypedSchema(
  object().shape({
    smen: string().required('Обязательное поле'),
    direction: string().required('Обязательное поле'),
    class: string().required('Обязательное поле'),
    level: string().required('Обязательное поле'),
  }),
)

function handleSelectDisabled(field: 'smen' | 'direction' | 'class' | 'level') {
  const temp = form.value?.values[field]

  form.value?.resetForm()

  form.value?.setFieldValue(field, temp)
}

const filteredResult = ref<Data | null>(null)

function handleSubmit() {
  ym_event('filter');
  filteredResult.value = filteredItems.value[Object.keys(filteredItems.value)[0]][0].data
}

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <BaseSection aria-labelledby="filter-heading">
    <BaseHeading id="filter-heading">
      ПОДРОБНО О СМЕНЕ
    </BaseHeading>

    <p class="text-primary-paragraph-r">
      Для получения подробной информации задайте параметры в фильтре и нажмите кнопку «Применить».<br/><br/>
      При выборе класса указывайте тот класс, который вы закончили в 2024/2025 учебном году.
    </p>

    <Form ref="select-form" class="flex flex-row flex-wrap md:gap-5 gap-2" :validation-schema="schema"
      @submit="handleSubmit">
      <FormSmeniFilterSelect name="smen" :items="filteredSmens" placeholder="Смена" class="w-[175px]"
        @select-disabled="handleSelectDisabled('smen')" />
      <FormSmeniFilterSelect name="level" :items="filteredLevels" class="w-[299px]" placeholder="Уровень подготовки"
        @select-disabled="handleSelectDisabled('level')" />
      <FormSmeniFilterSelect name="class" :items="filteredClasses" class="w-[149px]" placeholder="Класс"
        @select-disabled="handleSelectDisabled('class')" />
      <FormSmeniFilterSelect name="direction" :items="filteredDirections" class="w-[196px]" placeholder="Направление"
        @select-disabled="handleSelectDisabled('direction')" />
      <button
        class="cursor-pointer hover:bg-primary-light transition-colors text-white font-bold text-primary-paragraph-r py-3 px-4 bg-primary rounded-lg grow size-fit">
        Применить
      </button>
    </Form>

    <div v-if="filteredResult" class="flex flex-col sm:gap-y-4 gap-y-5 mx-2">
      <template v-for="(item, i) in Object.keys(filteredResult)" :key="i">
        <div v-if="item === 'raspis'" class="container-style order-1">
          <HeadlessTabGroup vertical>
            <h3 class="sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
              РАСПИСАНИЕ
            </h3>
            <div class="flex sm:flex-row flex-col md:gap-x-23 gap-x-10 not-sm:gap-y-10.5 not-sm:items-center">
              <HeadlessTabList class="not-sm:w-full">
                <Swiper :observer="true" :observe-parents="true" direction="vertical" slides-per-view="auto"
                  :scrollbar="true" :free-mode="true" :observe-slide-children="true" :mousewheel="true"
                  :modules="[Mousewheel, FreeMode, Scrollbar]"
                  class="md:mt-15 mt-6 md:max-h-97 max-h-80 [--swiper-scrollbar-right:0] [--swiper-scrollbar-size:3px]">
                  <SwiperSlide>
                    <div class="flex flex-col gap-y-4 mb-2">
                      <HeadlessTab v-for="(el1, j) in filteredResult[item]" :key="j" as="template">
                        <button class="tab-style">
                          {{ el1.dayname }}
                        </button>
                      </HeadlessTab>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </HeadlessTabList>

              <HeadlessTabPanels class="gap-y-6 flex flex-col">
                <h3 class="not-sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
                  РАСПИСАНИЕ
                </h3>
                <HeadlessTabPanel v-for="(el2, j1) in filteredResult[item]" :key="j1"
                  class="flex flex-col gap-y-4 mb-10">
                  <div 
                    class="text-primary-paragraph flex flex-col gap-y-0.5 raspis" v-html="el2.descr">
                  </div>
                  <!-- <span class="font-bold">
                      {{ el3.dayname }}
                    </span>
                    <span class="font-montserrat">
                      {{ el3.name }}
                    </span> -->
                </HeadlessTabPanel>
              </HeadlessTabPanels>
            </div>
          </HeadlessTabGroup>
        </div>

        <div v-if="item === 'uchprogram'" class="container-style order-2">
          <HeadlessTabGroup vertical>
            <h3 class="sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
              УЧЕБНАЯ ПРОГРАММА
            </h3>
            <div class="flex sm:flex-row flex-col md:gap-x-23 gap-x-10 not-sm:gap-y-10.5 not-sm:items-center">
              <HeadlessTabList class="not-sm:w-full">
                <Swiper direction="vertical" slides-per-view="auto" :scrollbar="true" :free-mode="true"
                  :observe-slide-children="true" :mousewheel="true" :modules="[Mousewheel, FreeMode, Scrollbar]"
                  class="md:mt-15 mt-6 md:max-h-97 max-h-80 [--swiper-scrollbar-right:0] [--swiper-scrollbar-size:3px]">
                  <SwiperSlide>
                    <div class="flex flex-col gap-y-4 mb-2">
                      <HeadlessTab v-for="(el1, j) in filteredResult[item]" :key="j" as="template">
                        <button class="tab-style">
                          {{ el1.modulename }}
                        </button>
                      </HeadlessTab>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </HeadlessTabList>

              <HeadlessTabPanels class="gap-y-6 flex flex-col max-w-[392px] w-full">
                <h3 class="not-sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
                  УЧЕБНАЯ ПРОГРАММА
                </h3>
                <HeadlessTabPanel v-for="(el2, j1) in filteredResult[item]" :key="j1"
                  class="flex flex-col mb-10">
                  <div class="uch_prog text-black text-center" v-html="el2.descr">
                    
                  </div>

                  <!--bg-white  rounded-[13px] p-2.5<span class="text-primary-paragraph text-black">
                  </span> -->
                </HeadlessTabPanel>
              </HeadlessTabPanels>
            </div>
          </HeadlessTabGroup>
        </div>

        <div v-if="['metodist', 'preps'].includes(item)" class="container-style"
          :class="[item === 'preps' ? 'order-4' : 'order-3']">
          <HeadlessTabGroup vertical>
            <h3 v-if="item === 'preps'" class="sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
              ПРЕПОДАВАТЕЛИ
            </h3>
            <h3 v-if="item === 'metodist'" class="sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
              МЕТОДИСТЫ
            </h3>
            <div class="flex sm:flex-row flex-col not-sm:items-center md:gap-x-23 gap-x-10 gap-y-3.5">
              <HeadlessTabList class="not-sm:w-full">
                <Swiper direction="vertical" slides-per-view="auto" :scrollbar="true" :free-mode="true"
                  :observe-slide-children="true" :mousewheel="true" :modules="[Mousewheel, FreeMode, Scrollbar]"
                  class="md:mt-15 mt-6 md:max-h-97 max-h-80 [--swiper-scrollbar-right:0] [--swiper-scrollbar-size:3px]">
                  <SwiperSlide>
                    <div class="flex flex-col gap-y-4 mb-2">
                      <HeadlessTab v-for="(el1, j) in filteredResult[item]" :key="j" as="template">
                        <button class="tab-style text-left">
                          {{ el1.metodist.nodes[0].preps.doljn }}
                        </button>
                      </HeadlessTab>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </HeadlessTabList>

              <HeadlessTabPanels class="gap-y-6 flex flex-col not-sm:text-center">
                <h3 v-if="item === 'preps'" class="not-sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
                  ПРЕПОДАВАТЕЛИ
                </h3>
                <h3 v-if="item === 'metodist'" class="not-sm:hidden md:text-[24px] text-primary-paragraph font-bold uppercase">
                  МЕТОДИСТЫ
                </h3>
                <HeadlessTabPanel v-for="(el2, j1) in filteredResult[item]" :key="j1"
                  class="flex xmd:flex-row flex-col gap-x-9 mb-10 not-sm:items-center">
                  
                  <div
                    class="sm:size-53.5 size-50 rounded-[54px] overflow-hidden bg-white pointer-events-none shrink-0">
                    <NuxtImg   :src="'https://it-edu.com'+el2.metodist.nodes[0].preps.photo.node.filePath" class="object-cover size-full" alt="" loading="lazy" />
                  </div>

                  <div class="flex flex-col mt-8 gap-y-7.5">
                    <span class="font-bold md:text-[24px] text-primary-heading-md">
                      {{ el2.metodist.nodes[0].preps.doljn }}
                    </span>
                    <span class="text-primary-paragraph-r">{{ el2.metodistpredmet }}</span>
                    <div class="text-primary-paragraph-r preps_descr" v-html="el2.metodist.nodes[0].preps.descr"></div>
                  </div>
                </HeadlessTabPanel>
              </HeadlessTabPanels>
            </div>
          </HeadlessTabGroup>
        </div>
      </template>

      <div class="order-5 flex flex-row md:gap-x-7.5 min-[380px]:gap-x-4 gap-x-1 items-center">
        <div class="border-t w-full" />
        <button
          class="cursor-pointer bg-primary text-whit font-bold text-primary-paragraph-r text-white py-3 px-10 size-fit rounded-[11px] mx-auto hover:bg-primary-light transition-colors text-nowrap"
          @click="openModal">
          Хочу на смену
        </button>
        <div class="w-full border-t" />
      </div>
    </div>

    <template v-else>
      <div v-for="(item, i) in defaultItems" :key="i"
        class="bg-primary rounded-2xl md:py-10 py-5 md:px-[57px] px-6 text-white uppercase font-bold">
        <p class="md:text-[24px] text-primary-paragraph-md">
          {{ item }}
        </p>
      </div>
    </template>

    <PageSmeniPopup :is-open="isOpen" :smen="filteredResult" :close-modal="closeModal" />
  </BaseSection>
</template>

<style>
@reference "../../assets/css/main.css";

.tab-style {
  @apply bg-secondary-light rounded-r-[10px] text-center text-primary-paragraph-r py-6 px-2 md:w-[262px] sm:w-50 w-full text-black ui-not-focus-visible:outline-none cursor-pointer ui-selected:bg-white;
}

.container-style {
  @apply bg-primary rounded-2xl sm:pt-7 pt-8.5 text-white sm:pr-10 not-sm:px-6;
}
.preps_descr *{
  text-align: left!important;
}
.uch_prog ul{
  @apply flex flex-col gap-y-4
}
.uch_prog li{
  @apply bg-white  rounded-[13px] p-2.5; 
}
.raspis ul{
  @apply flex flex-col gap-y-3;
}
.raspis ul li{
  @apply font-montserrat;
}
</style>
