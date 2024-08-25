import React from 'react';

const SocialMediaCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-gray-800 rounded-full p-4">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  );
};

export default SocialMediaCard;