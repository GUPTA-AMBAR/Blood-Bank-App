import React, { useState } from "react";
import FlipCard from "./FlipFlopCards";
import WhyToDonate from "./WhyToDonate";
import WhereToDonate from "./WhereToDonate";

const CardGroup = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const cardData = [
        {
            imgSrc: "./assests/images/blood1.png",
            altText: "image1",
            content: (<WhyToDonate/>)
        },
        {
            imgSrc: "./assests/images/blood25.png",
            altText: "image2",
            content: (<WhereToDonate/>)
        },
        {
            imgSrc: "./assests/images/blood3.png",
            altText: "image3",
            content: (<FlipCard />)
        }
    ];

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent("");
    };

    return (
        <div>
            {/* Card Group */}
            <div className="card-group" style={{ display: "flex", justifyContent: "space-evenly", gap: "20px", flexWrap: "wrap", border: "none", paddingLeft: "20px" }}>
                {cardData.map((card, index) => (
                    <div key={index} className="card" style={{ borderRadius: "20px", cursor: "pointer", border: "none" }} onClick={() => openModal(card.content)}>
                        <img className="card-img-top" src={card.imgSrc} alt={card.altText} style={{ width: "300px", height: "200px", border: "none" }} />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <div className="modal-text">
                            <p>{modalContent}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Styles */}
            <style>
                {`
                .modal-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 15px;
    max-width: 90%;
    max-height: 90vh;  /* Prevent overflow */
    width: 600px;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(0,0,0,0.3);
    overflow-y: auto;  /* Allows scrolling */
    display: flex;
    flex-direction: column;  /* Stacks close button on top */
    align-items: center;
    justify-content: flex-start;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px; /* Prevents modal from getting cut off */
}

.close-button {
    align-self: flex-end;  /* Moves close button to top-right */
    font-size: 28px;
    cursor: pointer;
    color: red;
    background: white;
    padding: 5px;
    border-radius: 50%;
    z-index: 1001;
    margin-bottom: 10px; /* Creates space between button and content */
}

/* Content inside modal */
.modal-text {
    width: 100%;
    text-align: center;
    flex-grow: 1; /* Allows content to expand while keeping close button fixed */
}

/* Media Query for Small Screens */
@media (max-width: 600px) {
    .modal-content {
        width: 95%;
        padding: 15px;
    }
    .close-button {
        font-size: 22px;
    }
}


                `}
            </style>
        </div>
    );
};

export default CardGroup;