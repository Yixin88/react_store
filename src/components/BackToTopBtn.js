import React, { useRef } from 'react'

export default function BackToTopBtn() {

    const toTop = useRef();

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.current.classList.add("active");
        } else {
            toTop.current.classList.remove("active");
        }
    })

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

  return (
    <button ref={toTop} onClick={scrollToTop} className="to-top">
        <i className="fas fa-chevron-up"></i>
    </button>
  )
}
