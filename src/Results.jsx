import Pet from "./Pet";
const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No pets found</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          name={pet.name}
          key={pet.id}
          id={pet.id}
          animal={pet.animal}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
        />
      ))
    )}
  </div>
);
export default Results;
