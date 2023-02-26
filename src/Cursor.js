import React ,{ useEffect } from 'react';

function Cursor(){

  useEffect(() => {
    // declare your cursor variable here
    const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.setAttribute(
        'style',
        'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
    );
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500);
});
  }, []);

    return <span></span>;
};

export default Cursor;
