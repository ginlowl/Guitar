import React from 'react';
import Menu from './Menu';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const menuList = [
      {
        name: 'Guitar',
        text: '使用しているギターを紹介します。',
        image: require('../img/guitar.JPG'),
        introduction: '現在所持しているメーカーや形状が異なる4本のギターの音の違いや特徴を紹介します。',
      },
      {
        name: 'Effecter',
        text: 'エフェクターボードや音作りを紹介します。',
        image: require('../img/effecter.JPG'),
        introduction: '所持しているエフェクターやどのように自分の音を作っているのかを紹介します。',
      },
      {
        name: 'Other',
        text: '使用している弦やケーブル類、便利なグッズなどについて紹介します。',
        image: require('../img/other.JPG'),
        introduction: '現在使用している弦やケーブル類、メンテナンスや練習に使える便利なグッズを紹介します。',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='copy-container'>
          <img src={require('../img/guitar_main.png')} />
          <h1>T's Guitar</h1>
        </div>
        <div className='menu-container'>
          <h3>Menu</h3>
          { menuList.map((menuItem) => {
            return (
              <Menu
                name={ menuItem.name }
                text={ menuItem.text }
                image={ menuItem.image }
                introduction={ menuItem.introduction }
              />
            );
          }) }
        </div>
        <div className='contact-container'>
          <h3>お問い合わせ</h3>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Main;
