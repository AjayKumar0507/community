import React, { useState } from 'react';
import Sidebar from './sidebar';
import Chat from './chat';
import StartHere from './startHere';

const users = [
  { userId: 101, userName: "Sam Joesfh", profileImage: "/images/dp1.png" },
  { userId: 102, userName: "Jane Doe", profileImage: "/images/dp1.png" },
  { userId: 103, userName: "Rahim Ismail", profileImage: "/images/dp1.png" },
];

const communitiesData = [
  {
    id: 0,
    name: "Start Here",
    selected: true,
    messages: [],
  },
  {
    id: 1,
    name: "Rehab A",
    dp: "/images/dp1.png",
    selected: false,
    adminId: 101,
    communityMembers: [101, 102, 103],
    messages: [
      { userId: 101, message: "Hello, how are you everyone", image: null, audio: null, timeSent: null },
      { userId: 102, message: "Hello, I'm good how are you", image: null, audio: null, timeSent: null },
      { userId: 103, message: "Just go to hell", image: null, audio: null, timeSent: null },
    ],
  },
  {
    id: 2,
    name: "Rehab B",
    dp: "/images/dp1.png",
    selected: false,
    adminId: 101,
    communityMembers: [101, 102, 103],
    messages: [],
  },
  {
    id: 3,
    name: "Rehab C",
    dp: "/images/dp1.png",
    selected: false,
    adminId: 103,
    communityMembers: [101, 102],
    messages: [],
  },
];

const Community = () => {
  const [communities, setCommunities] = useState(communitiesData);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [startHere, setStartHere] = useState(true); // Use state for startHere
  
  console.log(communities);

  const toggleCommunity = (id) => {
    setCommunities((prevCommunities) => {
      const updatedCommunities = prevCommunities.map((community) => ({
        ...community,
        selected: community.id === id,
      }));
      const selected = updatedCommunities.find((community) => community.id === id);
      setSelectedCommunity(selected);
      
      if (selected.id !== 0) {
        setUsersList(
          selected?.communityMembers.map((userId) => users.find((user) => user.userId === userId)) || []
        );
        setStartHere(false); // Update startHere state
      } else {
        setStartHere(true); // Set startHere back to true
      }
      
      return updatedCommunities;
    });
  };

  const createCommunity = () => {
    setCommunities((prevCommunities) => [
      ...prevCommunities,
      {
        id: prevCommunities.length + 1,
        name: `Rehab ${String.fromCharCode(65 + prevCommunities.length - 1)}`, // Generate name dynamically
        selected: false,
        dp: "/images/dp1.png",
        adminId: 101, // Set default adminId
        communityMembers: [101], // Default member list
        messages: [],
      },
    ]);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-16 bg-slate-400">Nav</div>
      <div className="flex flex-row">
        <div className="basis-1/6">
          <Sidebar
            communities={communities}
            toggleCommunity={toggleCommunity} // Pass toggleCommunity
            onCreateCommunity={createCommunity} // Pass createCommunity
          />
        </div>
        <div className="basis-5/6">
          {startHere &&  <StartHere/> }
          {!startHere && (
            <Chat
              selectedCommunity={selectedCommunity}
              usersList={usersList}
              communities={communities}
              onUpdateCommunity={setCommunities}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
