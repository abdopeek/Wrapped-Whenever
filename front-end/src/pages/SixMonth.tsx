import { useEffect, useState } from "react";
import Loading from "../assets/components/Loading";
import "./styles.css"
import CardContainer from "../assets/components/CardContainer";
import { Navigate, useNavigate } from "react-router-dom";

type Songs = {
	name: string;
	artist: string;
	image: any;
};

type Artists = {
	name: string;
	image: any;
};

type Albums = {
	name: string;
	artist: string;
	image: any;
};


const SixMonth: React.FC = () => {
	const navigate = useNavigate();
	
	const [isLoggedIn, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	const [songData, updateData] = useState<Songs[]>([]);
	const [artistData, updateArtistData] = useState<Artists[]>([]);
	const [albumData, updateAlbumData] = useState<Albums[]>([]);
	
	const [range, setRange] = useState("short_term")
	
	const backBtn = () => {
		navigate('/')
	}

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const songResponse = await fetch(`http://localhost:5000/songs?range=${range}`, {
					method: "GET",
					credentials: "include",
				});
				var preProcessedSongs = await songResponse.json();
				preProcessedSongs = preProcessedSongs[0]["songs"]["items"];
				const dS: Songs[] = preProcessedSongs.map((song: any) => ({
					name: song["name"],
					artist: song["artists"][0]["name"],
					image: song['album']["images"][1]["url"],
				}));
				
				const artistResponse = await fetch(`http://localhost:5000/artists?range=${range}`, {
					method: "GET",
					credentials: "include"
				});
				var preProcessedArtists = await artistResponse.json();
				preProcessedArtists = preProcessedArtists["items"];
				const dA : Artists[] = preProcessedArtists.map((artist: any) => ({
					name: artist["name"],
					image: artist["images"][1]["url"]
				}))
				
				// console.log(d[0].image)
				updateData(dS);
				// console.log(data);
				setIsAuthenticated(true);
			} catch (error) {
				setIsAuthenticated(false);
			}
			setLoading(false);
		};

		checkAuth();
	}, []);

	if (loading) {
		return <Loading />;
	}

	if (isLoggedIn) {
		return (
			
		<>
			<div className="songs">
				
				{songData.length > 0 ? (
					<CardContainer label={'Songs'} cardsData={songData} />
				) : (
					<p>No songs available</p>
				)}
			</div>
			<div className="artists">
				<CardContainer label={"Artists"} cardsData={artistData} />
			</div>
		</>
		);
	} else {
		console.log("Error");
		return <div className="returner">Not logged in <button className="return-btn" onClick={backBtn}>Return to home page</button></div>;
	}
};

export default SixMonth;
