import ProfileParagraph from "./ProfileParagraph"; 
function ProfileCard(profile) {
    return(
        <div className="Container">
            <h2 style={{ marginTop: 0, color: "#333" }}>Profil użytkownika</h2>

            <ProfileParagraph label="Imię" title={profile.name}/>
            <ProfileParagraph label="Email" title={profile.email}/>
            <ProfileParagraph label="Data urodzenia" title={profile.birthDate}/>
            <ProfileParagraph label="Telefon" title={profile.phone}/>
        </div>
    );
}
export default ProfileCard;