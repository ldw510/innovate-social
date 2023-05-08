

import { useEffect } from 'react';

export default function StackCards (element) {    
  const items = element.querySelectorAll('.js-stack-cards__item');
  let scrollingFn = false;
  let scrolling = false;
  
  useEffect(() => {
    const initStackCardsEffect = () => {
      setStackCards(); // store cards CSS properties
      const observer = new IntersectionObserver(stackCardsCallback.bind(element), { threshold: [0, 1] });
      observer.observe(element);
    };
    
    const initStackCardsResize = () => {
      window.addEventListener('resize-stack-cards', () => {
        setStackCards();
        animateStackCards();
      });
    };
    
    const stackCardsCallback = (entries) => { // Intersection Observer callback
      if(entries[0].isIntersecting) {
        if(scrollingFn) return; // listener for scroll event already added
        stackCardsInitEvent();
      } else {
        if(!scrollingFn) return; // listener for scroll event already removed
        window.removeEventListener('scroll', scrollingFn);
        scrollingFn = false;
      }
    };
    
    const stackCardsInitEvent = () => {
      scrollingFn = stackCardsScrolling.bind(element);
      window.addEventListener('scroll', scrollingFn);
    };
    
    const stackCardsScrolling = () => {
      if(scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(animateStackCards.bind(element));
    };
    
    const setStackCards = () => {
      // store wrapper properties
      element.marginY = parseInt(getComputedStyle(element).getPropertyValue('--stack-cards-gap'));
      element.elementHeight = element.offsetHeight;

      // store card properties
      const cardStyle = getComputedStyle(items[0]);
      element.cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
      element.cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));

      // store window property
      element.windowHeight = window.innerHeight;

      // reset margin + translate values
      if(isNaN(element.marginY)) {
        element.style.paddingBottom = '0px';
      } else {
        element.style.paddingBottom = (element.marginY*(items.length - 1))+'px';
      }

      for(let i = 0; i < items.length; i++) {
        if(isNaN(element.marginY)) {
          items[i].style.transform = 'none;';
        } else {
          items[i].style.transform = `translateY(${element.marginY * i}px)`;
        }
      }
    };
    
    const animateStackCards = () => {
      if(isNaN(element.marginY)) { // --stack-cards-gap not defined - do not trigger the effect
        scrolling = false;
        return; 
      }

      const top = element.getBoundingClientRect().top;

      if( element.cardTop - top + element.windowHeight - element.elementHeight - element.cardHeight + element.marginY + element.marginY * items.length > 0) { 
        scrolling = false;
        return;
      }

      for(let i = 0; i < items.length; i++) { // use only scale
        const scrolling = element.cardTop - top - i*(element.cardHeight+element.marginY);
        if(scrolling > 0) {  
          const scaling = i === items.length - 1 ? 1 : (element.cardHeight - scrolling*0.05)/element.cardHeight;
          items[i].style.transform = `translateY(${element.marginY * i}px) scale(${scaling})`;
        } else {
            items[i].style.transform = `translateY(${element.marginY * i}px)`;
        }}}}
  )}
    
          