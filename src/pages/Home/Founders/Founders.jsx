import { FaFacebookF, FaInstagram } from "react-icons/fa"; 

const Founders = () => {
    const members = [
        {
            name: "Anna Madsen",
            role: "Co-founder",
            image: "https://i.postimg.cc/8CYvNK0w/team.png", 
        },
        {
            name: "Terry Kenter",
            role: "Designer",
            image: "https://i.postimg.cc/vTF661MV/team2.png", 
        },
        {
            name: "Ruben Donin",
            role: "Marketer",
            image: "https://i.postimg.cc/yxm3hVYr/team3.png", 
        },
    ];

    return (
        <div className="p-6">
            {/* Header Section */}
            <h2 className=" text-lg text-center text-orange-800 mb-4">Meet the Founders</h2>
            <p className="text-4xl font-semibold text-center mb-14">We&apos;re Supply Chain</p>
            
            {/* Founders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
                {members.map((member, index) => (
                    <div key={index} className="flex flex-col items-center mb-6">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="h-60 w-60 sm:h-80 sm:w-80 rounded-full mb-2"
                        />
                        <h3 className="text-xl sm:text-xl font-semibold text-center">{member.name}</h3>
                        <p className="text-sm sm:text-base text-gray-500 text-center">{member.role}</p>

                        {/* Social Media Icons for each member */}
                        <div className="flex space-x-4 mt-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF className="h-6 w-6 sm:h-6 sm:w-6 text-black" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="h-6 w-6 sm:h-6 sm:w-6 text-black" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Founders;
