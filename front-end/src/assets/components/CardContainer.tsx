import ArtistCard from "./ArtistCard";
import Card from "./Card";
import "./CardContainer.css";
import { useState, useEffect, useRef } from "react";

const CardContainer = ({ cardsData, label }: { cardsData: any, label:any }) => {
	const [displayCount, setCount] = useState(11);
    const [expanded, setExpanded] = useState(false);

	const loadMore = () => {
		setCount(displayCount + 12);
        setExpanded(true);
	};

	const loadLess = () => {
		setCount(11);
        setExpanded(false);
    };
    

	return (
		<div className="card-wrapper">
            <div className="label">{label}</div>
			<div className="card-container">
				
                {label === "Songs" || label === "Albums" ? cardsData.slice(0, displayCount).map((card: any, index: any) => (
                    <Card
                        key={index}
                        name={card.name}
                        artist={card.artist}
                        image={card.image}
                    />
                )) : cardsData.slice(0, displayCount).map((card: any, index: any) => (
					<ArtistCard
						key={index}
						name={card.name}
						image={card.image}
					/>					
				))
			}
			{displayCount == cardsData.length && (
                <button onClick={loadLess} className="load-less-btn music">
					Show less
				</button>
			)}
			{displayCount < cardsData.length && (
                <button onClick={loadMore} className="load-more-btn music">
						Show more
					</button>
			)}
            </div>
		</div>
	);
};

export default CardContainer;
