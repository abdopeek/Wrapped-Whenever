import "./cardStyle.css";

function ArtistCard({
	name,
	image,
}: {
	name: string;
	image: string;
}) {
	return (
		<div className="music">
			<div className={`music-content`}>
				<div className="image-wrapper">
					<img src={image} alt="Artist image" />
				</div>
				<div className="right">
					<span className="name">
						{name.length > 19
							? name.substring(0, 19) + "..."
							: name}
					</span>
                    <br></br>
				</div>
			</div>
		</div>
	);
}

export default ArtistCard;
