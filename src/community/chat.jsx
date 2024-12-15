import { CiMenuKebab } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";


const Chat = ({ selectedCommunity, usersList , communities , onUpdateCommunity }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);
  const [image, setImage] = useState(null);
  const imageInputRef = useRef(null);

  useEffect(() => {
    if (selectedCommunity) {
      setMessages(selectedCommunity.messages || []);
    }
  }, [selectedCommunity]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function handleTextInput(e) {
    setInputText(e.target.value);
  }

  const handleImageChange = (e) => {

    console.log(1)
    const selectedImage = e.target.files[0];
    console.log(selectedImage)
    if (selectedImage && selectedImage.type.startsWith("image/")) {
        setImage(selectedImage); // Store image in state
    } else {
        alert("Please select a valid image file.");
    }
};

const handleTextSubmit = () => {
    if (!inputText.trim() && !image) return; // Don't submit if no text or image

    const newMessage = {
        userId: 101,
        message: inputText.trim() || null,
        timeSent: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),
        image: image ? URL.createObjectURL(image) : null,
        audio: null,
    };

    // Update messages state for the selected community
    if (selectedCommunity) {
        const updatedCommunities = communities.map((community) =>
            community.id === selectedCommunity.id
                ? { ...community, messages: [...community.messages, newMessage] }
                : community
        );
        console.log(updatedCommunities)
        onUpdateCommunity(updatedCommunities);
    }

    setMessages((prevMessages) => [...prevMessages, newMessage]); // Update local message state
    setInputText("");
    setImage(null); // Reset image state
};



  const getMessages = () => {
    if(selectedCommunity.id === 0){
      console.log(1)
      return <div>hello</div>
    }
      
    return messages.map((message, index) => {
      const user = usersList.find((user) => user.userId === message.userId);

      return (
        <div
          key={`${message.timeSent}-${message.userId}-${index}`}
          className={`flex ${message.userId === 101 ? "justify-end" : "justify-start"} my-2 mx-1`}
        >
          {message.userId !== 101 && (
            <img
              src={user?.profileImage || "/default-profile-image.png"}
              alt="User avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
          )}

          <div
            className={`max-w-xs py-1 px-3 rounded-lg shadow-md ${
              message.image ? "" : "bg-blue-500"
            } text-white`}
          >
            {message.message && <p className="text-sm">{message.message}</p>}
            {message.image && (
              <img
                src={message.image}
                alt="User uploaded"
                className="w-full h-auto mt-2 rounded-lg"
              />
            )}
            <p className="text-xs text-right mt-2 opacity-70">{message.timeSent}</p>
          </div>

          {message.userId === 101 && (
            <img
              src={user?.profileImage || "/default-profile-image.png"}
              alt="Your avatar"
              className="w-8 h-8 rounded-full ml-2"
            />
          )}
        </div>
      );
    });
  };

  function getUsersString() {
    if(selectedCommunity.id === 0)
      return ""
    return usersList
      .filter((user) => selectedCommunity.communityMembers.includes(user.userId))
      .map((user) => user.userName)
      .join(", ");
  }

  return (
    <div>
      <main className="w-full h-screen shadow-[rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset]">
        {(selectedCommunity && selectedCommunity.id !== 0) && (
          <div className="flex flex-col items-center justify-between h-screen">
            <div className="flex flex-row items-center justify-between w-full h-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl py-2 px-5">
              <div className="flex flex-row items-center">
                {selectedCommunity && (
                  <img
                    src={selectedCommunity.dp || "/default-community-image.png"}
                    alt={`${selectedCommunity.name} dp`}
                    className="w-12 h-12 rounded-full mr-2"
                  />
                )}
                <div>
                  <p className="font-semibold">{selectedCommunity.name}</p>
                  <p className="text-sm text-gray-500">
                    {getUsersString()}
                  </p>
                </div>
              </div>
              <CiMenuKebab />
            </div>
            
            {/* Messages */}
            <div className="w-full h-full flex flex-col bg-[#e9e8e8] overflow-y-auto custom-scrollbar">
                {getMessages()}
                <div ref={messagesEndRef}></div>
            </div>

            <div className="bg-[#e9e8e8] w-full pl-16 " >
                <div className="flex flex-row items-center justify-between w-11/12 h-16 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-xl py-2 px-5 mb-2 bg-[#f5f5f5] ">
                <div className="w-full flex">
                    {image ? (
                        <div className="flex items-center justify-between w-full">
                            <span className="flex flex-row items-center text-sm text-gray-600">
                                <CiImageOn className="text-4xl px-2" />{image.name}
                            </span>
                            <button className="text-red-500 ml-2" onClick={() => setImage(null)}>
                                X
                            </button>
                        </div>
                        ) : (
                        <input
                            type="text"
                            placeholder="Type Your Message"
                            value={inputText}
                            onChange={handleTextInput}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleTextSubmit();
                                    e.preventDefault();
                                }
                            }}
                            className="basis-11/12 border-0 py-2 px-2"
                        />
                        )}

                    </div>

                    <div className="flex flex-row">
                        <button className="text-xl px-2" onClick={() => { 
                                    imageInputRef.current.focus(); // Focus first to ensure interaction
                                    imageInputRef.current.click(); // Then trigger click
                                }} >
                                    <CiImageOn />

                            {/* File input for image */}
                            <input
                                type="file"
                                ref={imageInputRef}
                                onChange={handleImageChange}
                                className="hidden"
                                
                        />
                        </button>
                        <button className="text-xl px-2">
                            <FaMicrophone />
                        </button>
                        <button className="text-xl px-2" onClick={handleTextSubmit}>
                            <IoSend />
                        </button>
                    </div>
                </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
};

export default Chat;
