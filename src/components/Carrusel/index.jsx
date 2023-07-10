import React from "react";

const Carrusel = ({ arreglo, id }) => {
  return (
    <>
      <div id={id} className="carouselExample carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={'#' + id }
            data-bs-slide-to="0"
            className="active bg-success rounded-circle"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={'#' + id }
            data-bs-slide-to="1"
            className="bg-success rounded-circle"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={'#' + id }
            data-bs-slide-to="2"
            className="bg-success rounded-circle"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {arreglo.map((img, index) => {
            return (
              <div
                  key={index}
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <img
                  src={img}
                  className="d-block w-100"
                  style={{height: "35vh", padding: "0 10%"}}
                  alt="..."
                />
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={'#' + id }
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-success rounded-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={'#' + id }
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-success rounded-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carrusel;


// import Carousel from 'react-bootstrap/Carousel';

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;