import { useEffect, useState } from "react";
import Loading from "../assets/components/Loading";

const SongsPage = () => {
	const [isLoggedIn, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await fetch("http://localhost:5000/songs", {
					method: "GET",
					credentials: "include",
				});
				const data = await response.json();
				console.log(data);
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
		console.log(isLoggedIn);
		return <div> Logged in </div>;
	} else {
		console.log("Error");
	}
};

export default SongsPage;
