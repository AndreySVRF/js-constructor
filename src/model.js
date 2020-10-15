import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
import image from './assets/image.png'

export const model = [
  new TitleBlock('Контрустор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '15px 0'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это alt для картинки'
  }),
  new TextBlock('Welcome to my first app on JavaScript', {
    styles: {
      background: 'linear-gradient(to right, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
  new ColumnsBlock(
    [
      'Приложение на чистом JavaScript без использования фреймворков',
      'Узнаешь как работают принципы JavaScript за один курс',
      'JavaScript самый крутой язык программирования'
    ],
    {
      styles: {
        background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    })
]
