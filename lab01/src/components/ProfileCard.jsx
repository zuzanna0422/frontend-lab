import ProfileParagraph from "./ProfileParagraph";

function ProfileCard({ name, email, birthDate, phone }) {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4 text-primary">Profil użytkownika</h2>

        <div className="mb-3">
          <ProfileParagraph label="Imię" title={name} />
        </div>

        <div className="mb-3">
          <ProfileParagraph label="Email" title={email} />
        </div>

        <div className="mb-3">
          <ProfileParagraph label="Data urodzenia" title={birthDate} />
        </div>

        <div className="mb-3">
          <ProfileParagraph label="Telefon" title={phone} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
