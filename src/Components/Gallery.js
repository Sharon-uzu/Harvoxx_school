import React, { useState } from 'react';
import img1 from '../Images/a1.jpeg';
import img2 from '../Images/a2.jpeg';
import img3 from '../Images/a3.jpeg';
import img4 from '../Images/a4.jpeg';
import img5 from '../Images/a5.jpeg';
import img6 from '../Images/a6.jpeg';
import img7 from '../Images/a7.jpeg';
import img8 from '../Images/a8.jpeg';
import img9 from '../Images/a9.jpeg';
import img10 from '../Images/a10.jpeg';
import img11 from '../Images/a11.jpeg';
import img12 from '../Images/a12.jpeg';
import img13 from '../Images/a13.jpeg';
import img14 from '../Images/a14.jpeg';

import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles


Modal.setAppElement('#root'); // This is necessary for accessibility, ensuring the screen reader works correctly

const Gallery = () => {
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    ];



    // Display only the first four images
    const displayedImages = images.slice(0, 4);


    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    const [carouselStartIndex, setCarouselStartIndex] = useState(0);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal1 = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const carouselModal = (index) => {
        setCarouselStartIndex(index);
        setModalIsOpen(true);
    };

    const carouselCloseModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="image-list">
                {displayedImages.map((image, index) => (
                    <div
                    key={index}
                    className={`image-container ${index === displayedImages.length - 1 ? 'blurred' : ''}`}
                    onClick={index < displayedImages.length - 1 ? () => carouselModal(index) : openModal}
                >
                        <img src={image} alt={`Image ${index + 1}`} className="image"/>
                        {index === displayedImages.length - 1 && (
                            <div className="see-more" onClick={openModal}>
                                See More
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* React Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Example Modal"
                className="two"
                style={{
                overlay: {
                    width:'100%',
                    position: "fixed",
                    top: "0px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1200000000000,
                    display: "flex",
                    border:'none',
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "hsl(0, 0%, 0%, .5)",
                    backgroundColor: "hsl(0, 0%, 0%, .6)",
                    
                    
                },
                }}

            >

                <div className="modals">
                    <div className="m-c">

                        <div className="close-div">
                            <h2>More Images</h2>
                            <p onClick={closeModal}>x</p>
                        </div>

                        <div className="modal-images">
                            {images.map((image, index) => (
                                <div className="modal-image">
                                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                                </div>
                                
                            ))}
                        </div>

                    </div>
                </div>
                
            </Modal>





            {/* Carousel modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal1}
                contentLabel="Example Modal"
                className="two"
                style={{
                overlay: {
                    width:'100%',
                    position: "fixed",
                    top: "0px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1200000000000,
                    display: "flex",
                    border:'none',
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "hsl(0, 0%, 0%, .5)",
                    backgroundColor: "hsl(0, 0%, 0%, .6)",
                    
                    
                },
                }}

            >


                <div className="modals">
                    <div className="m-c car-images">

                        <div className="close-div" style={{justifyContent:'end'}}>
                            {/* <h2>Images</h2> */}
                            <p onClick={carouselCloseModal}>x</p>
                        </div>

                            <Carousel selectedItem={carouselStartIndex} showThumbs={false} infiniteLoop={true}>
                                {images.map((image, index) => (
                                    <div key={index} className='c-img'>
                                        <img src={image} alt={`Image ${index + 1}`} className="carousel-image" />
                                    </div>
                                ))}
                            </Carousel> 

                    </div>
                </div>

               
                
            </Modal>


        </div>
    );
};

export default Gallery;
