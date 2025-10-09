import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileGrid = ({ profiles, columns = 3 }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "16px",
  };

  return (
    <div style={gridStyle}>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default ProfileGrid;
