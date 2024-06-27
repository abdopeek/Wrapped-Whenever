import { useEffect, useState } from "react";
import Loading from "../assets/components/Loading";
import "./styles.css"
import CardContainer from "../assets/components/CardContainer";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../assets/components/Navbar";

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
	
	const [range, setRange] = useState<string>("short_term")
	
	const backBtn = () => {
		navigate('/')
	}

	
	useEffect(() => {
		setLoading(true);
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
				preProcessedArtists = preProcessedArtists[0]["artists"]["items"];
				const dA : Artists[] = preProcessedArtists.map((artist: any) => ({
					name: artist["name"],
					image: artist["images"][1]["url"]
				}))
				
				const albumResponse = await fetch(`http://localhost:5000/albums?range=${range}`, {
					method: "GET",
					credentials: "include"
				});
				var albumResponsePost = await albumResponse.json();
				console.log(albumResponsePost)
				
				const dAB : Albums[] = albumResponsePost[0].map((album: any) => ({
					name: album['name'],
					artist: album['artist'],
					image: album['image']['url']
				}))
				
				console.log(dAB)
				
				
				// console.log(d[0].image)
				updateData(dS);
				updateArtistData(dA);
				updateAlbumData(dAB);
				// console.log(data);
				setIsAuthenticated(true);
			} catch (error) {
				setIsAuthenticated(false);
			}
			setLoading(false);
		};

		checkAuth();
	}, [range]);

	if (loading) {
		return <Loading />;
	}

	if (isLoggedIn) {
		return (
			
		<>
			<Navbar setRange={ setRange } setIsAuthenticated={setIsAuthenticated}/>
			<div className="songs big-container">
				
				{songData.length > 0 ? (
					<CardContainer label={"Songs"} cardsData={songData} />
				) : (
					<p>No songs available</p>
				)}
			</div>
			
			<div className="artists big-container">
				<CardContainer label={"Artists"} cardsData={artistData} />
			</div>

			<div className="albums big-container">
				<CardContainer label={"Albums"} cardsData={albumData} />
			</div>
		</>
		);
	} else {
		console.log("Error");
		return <div className="returner">Not logged in <button className="return-btn" onClick={backBtn}>Return to home page</button></div>;
	}
};

export default SixMonth;
