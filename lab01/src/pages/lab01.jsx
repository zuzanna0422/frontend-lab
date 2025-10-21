import ProfileCard from '../components/ProfileCard.jsx'
import {people}  from '../module-data.js'
import ProfileGrid from '../components/ProfileGrid'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Lab01() {
  return (
    <>
      <div>
      <h1>Lista profili :</h1><br />
      <ProfileGrid profiles={people} columns={4} />
      </div>
    </>
  );
}

export default Lab01
