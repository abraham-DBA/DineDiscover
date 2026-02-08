"use client";

import Image from "next/image";

const destinations = [
    {
        name: "Paris",
        description: "Fine dining and artisanal bakeries",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASNu3WTE8bqFwUijBCymv3xjL2NSzPyANwdvluSihy_2ya5_botMc0wHsC2f2p05XjnsrYDNH9hBkZnv4oxp1a3rIAKcbr2ZbbuFxEMt76VN7wd_F_A8UhI2deNsjy4nxoPSvAFLeMacXqkpswNoa_yiP5lgK4nbmVIPD9HtN7ERCv0E_JTo3Ujkn4iAYifPEQnnY6H529_SDC-PKlrC9-OotXyPqSMRatbEI5NQ__TsAUFkLgD7ukWi7N5BbOLByO36R9LnzzgAE",
    },
    {
        name: "Tokyo",
        description: "World-class sushi and vibrant street food",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2xnpgiBDL9Dp_MdWupG8C49u4kB8fMQOX7pi850rPiUSKt42Gg9P6oW_uqRPeJXg_yO_KMenTdQLd2sqmP5CNirenxO02OocoDjO12FCDxYX5CkpzPBg_XoFYobHSXSappmow3zlmWmT1DhU6sGUVs3tmZ99t6Bv61aqPwQKFYDofpRZD7B5ElLf7Yef5R28EPMWLFMntRJydY0o2RnuJK1TB75Vd51xv3lp9p1DplXwgVW_nW6KFF6qz0TGeQ2zP48nRf_Xc4uI",
    },
    {
        name: "New York",
        description: "Diverse melting pot of global flavors",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR-DhMq0WSUKzDsOKav4uz-Y1iePV-gOBLxXsJY20SfBPwT5P-9to-073TZ3ZgPSyVEX-KKe2ak2VpQXpE2-8tFkzMhOxu3wGh0y9P0kmG4qIjv6rpeNRHmio_1VTkB8YK7Fl9J_P7vrO3pUUmZr8GOlhTsNy059WTytgsM1e0JOpVvzARLgdaGh_3AUAXdJkeYrX9CJZ-910ocqeAUeXYr5dbpSw-kaRyTcbrKIsrfoWkBzxZPBf_f0Yhqh1YLJvbEEQGO2xItcQ",
    },
];

export default function PopularDestinations() {
    return (
        <section className="px-6 md:px-20 py-16">
            <div className="mb-10">
                <h2 className="text-3xl font-black tracking-tight mb-2">Popular Destinations</h2>
                <p className="text-text-muted dark:text-text-muted-dark">
                    Global culinary hotspots waiting for you to explore.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className="relative group h-96 overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                    >
                        <Image
                            alt={destination.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={destination.image}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-white text-3xl font-bold mb-1">{destination.name}</h3>
                            <p className="text-white/80 text-sm">{destination.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
