import { useEffect, useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevBtn = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextBtn = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };
  useEffect(() => {
    let sliderID = setInterval(() => {
      nextBtn();
    }, 2000);
    return () => {
      clearInterval(sliderID);
    };
  }, [currentPerson]);

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev-btn' onClick={prevBtn}>
        <FiChevronLeft className='prev' />
      </button>
      <button type='button' className='prev-btn' onClick={nextBtn}>
        <FiChevronRight className='next' />
      </button>
    </section>
  );
}
export default Carousel;
