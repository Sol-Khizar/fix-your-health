import { useEffect, useState } from "react";


interface Reel {
    id: string;
    media_type: string;
    media_url: string;
    permalink: string;
    caption: string;
}

export default function InstagramReels() {
    const [reels, setReels] = useState<Reel[]>([]);

    useEffect(() => {
        // Dummy data
        const dummyReels: Reel[] = [
            {
                id: "1",
                media_type: "VIDEO",
                media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
                permalink: "https://www.instagram.com/reel/1/",
                caption: "Healthy breakfast ideas 🥗✨",
            },
            {
                id: "2",
                media_type: "VIDEO",
                media_url: "https://www.w3schools.com/html/movie.mp4",
                permalink: "https://www.instagram.com/reel/2/",
                caption: "Ayurvedic morning routine 🌿☀️",
            },
            {
                id: "3",
                media_type: "VIDEO",
                media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
                permalink: "https://www.instagram.com/reel/3/",
                caption: "Chinese medicine tips for better sleep 💤🍵",
            },
            {
                id: "4",
                media_type: "VIDEO",
                media_url: "https://www.w3schools.com/html/movie.mp4",
                permalink: "https://www.instagram.com/reel/4/",
                caption: "Weight loss recipe you can try at home 🔥",
            },
            {
                id: "5",
                media_type: "VIDEO",
                media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
                permalink: "https://www.instagram.com/reel/5/",
                caption: "Yoga stretches for beginners 🧘‍♀️",
            },
            {
                id: "6",
                media_type: "VIDEO",
                media_url: "https://www.w3schools.com/html/movie.mp4",
                permalink: "https://www.instagram.com/reel/6/",
                caption: "Detox drinks for daily energy ⚡",
            },
        ];

        setReels(dummyReels);
    }, []);

    return (
        <div >
            <h1 className="text-center text-2xl  md:text-5xl text-blue w-4/5 mx-auto mb-3 md:mb-8 mt-3 md:mt-0">
                Latest Instagram  <span className="border-b-4 border-[#FF9A3F]">Reels</span>
            </h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[82%] mx-auto pb-8  md:pb-14">
                {reels.map((reel) => (
                    <a
                        key={reel.id}
                        href={reel.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-lg relative">
                            <video
                                src={reel.media_url}
                                controls
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                            />
                            {reel.caption && (
                                <p className="p-3 text-sm text-gray-700 line-clamp-2">
                                    {reel.caption}
                                </p>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
