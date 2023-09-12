import { useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Carousel() {
  const [people, setPeople] = useState(shortList);
  const prevBtn = () => {};
  const nextBtn = () => {};

  return (
    <section className='slider-container'>
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article className='slide' key={id}>
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
