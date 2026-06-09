function AllPropertiesCards({ property, onBook, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "15px", borderRadius: "8px" }}>
      <h3>{property.propertyType}</h3>
      <p><b>Ad Type:</b> {property.propertyAdType}</p>
      <p><b>Address:</b> {property.propertyAddress}</p>
      <p><b>Rent:</b> ₹{property.propertyAmt}</p>
      <p><b>Owner:</b> {property.ownerName}</p>
      <p><b>Contact:</b> {property.ownerContact}</p>
      <p>{property.additionalInfo}</p>

      {onBook && <button onClick={() => onBook(property._id)}>Book Property</button>}
      {onDelete && <button onClick={() => onDelete(property._id)}>Delete</button>}
    </div>
  );
}

export default AllPropertiesCards;