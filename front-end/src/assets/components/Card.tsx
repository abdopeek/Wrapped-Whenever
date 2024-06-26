import "./cardStyle.css";

function Card({
	name,
	artist,
	image,
}: {
	name: string;
	artist: string;
	image: string;
}) {
	return (
		<div className="music">
			<div className={`music-content`}>
				<div className="image-wrapper">
					<img src={image} alt="Song cover" />
				</div>
				<div className="right">
					<span className="name">
						{name.length > 19
							? name.substring(0, 19) + "..."
							: name}
					</span>
                    <br></br>
					<span className="name">
						{artist.length > 19
							? artist.substring(0, 19) + "..."
							: artist}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
