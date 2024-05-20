// import React, { useState, useEffect } from "react";
// import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
// import { BsPlusLg } from "react-icons/bs";
// import { CiExport } from "react-icons/ci";
// import { MdDeleteForever } from "react-icons/md";
// import { Link } from "react-router-dom";

// import "../src/CSSc/MyWordrobe.css";
// import "../src/CSSc/WardrobeFilters.css";
// import NaviBarFooter from "./NaviBarFooter";
// import WardrobeFilters from "./WardrobeFilters";

// function MyWardrobe(props) {
//   const [selectedItem, setSelectedItem] = useState([]); // מזהה של הפריט הנבחר לצורך פתיחת הפופאפ
//   const [favorites, setFavorites] = useState([]); // סטייט לאייקונים מועדפים
//   const [filteredClothes, setFilteredClothes] = useState(props.clothes);

//   const [dataFromServer, setDataFromServer] = useState(null); 

//   useEffect(() => {
//     fetch('https://localhost:7215/api/Item/yakirco0412@gmail.com', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data); // ניתן לעדכן את ה-state או לעשות פעולות נדרשות עם הנתונים שהתקבלו
//       setDataFromServer([...data]);
//     })
//     .catch(error => {
//       console.error('There was a problem with fetch operation:', error);
//     });
//   }, []); // [] מועבר כאן כדי להראות שה-fetch צריך להתרחש רק פעם אחת בטעינה הראשונית של המרכיב

//   if (!dataFromServer) {
//     return <div>Loading...</div>; // הצגת הודעת טעינה אם הנתונים עדיין לא נטענו
//   };

//   console.log("1");
//   console.log(dataFromServer);
//   console.log("shir");
//   console.log(dataFromServer[0].image);

//   // לחיצה על ה+
//   const togglePopup = (index) => {
//     if (selectedItem === index) {
//       // אם הפריט כבר פתוח, סגור אותו
//       setSelectedItem(null);
//     } else {
//       // אחרת, פתח את הפריט הנבחר
//       setSelectedItem(index);
//     }
//   };

//   // הכנסה והוצאה ממועדפים
//   const toggleFavorite = (index) => {
//     const newFavorites = [...favorites]; // עותק חדש של רשימת המועדפים
//     if (newFavorites.includes(index)) {
//       // אם המועדף כבר קיים, מחק אותו
//       const indexToRemove = newFavorites.indexOf(index);
//       newFavorites.splice(indexToRemove, 1);
//     } else {
//       // אם המועדף אינו קיים, הוסף אותו
//       newFavorites.push(index);
//     }
//     // עדכן את הסטייט
//     setFavorites(newFavorites);
//   };

//   return (
//     <>
//       <div className="containerW">
//         <div className="header">
//           <WardrobeFilters
//             clothes={props.clothes}
//             setFilteredClothes={setFilteredClothes}
//           />
//         </div>
//         <div className="clothing-list">
//           <img src={dataFromServer[0].image}></img>
//           {filteredClothes.map((item, index) => (
//             <div key={index} className="clothing-item">
//               <div className="clothing-image">
//                 <img src={item.image} alt={item.name} />

//                 {/*לחיצה על הפלוס*/}
//                 <BsPlusLg className="opt" onClick={() => togglePopup(index)} />

//                 {/* החלף בין האייקונים בהתאם לסטייט */}
//                 {favorites.includes(index) ? (
//                   <IoIosHeart
//                     className="fav"
//                     onClick={() => toggleFavorite(index)}
//                   />
//                 ) : (
//                   <IoIosHeartEmpty
//                     className="fav"
//                     onClick={() => toggleFavorite(index)}
//                   />
//                 )}

//                 {/* תצוגת הפופאפ רק עבור הפריט שנבחר */}
//                 {selectedItem === index && (
//                   <div className="popup">
//                     <Link
//                       to={{
//                         pathname: `/createad/${item.id}`,
//                         search: `choosenItem=${encodeURIComponent(JSON.stringify({ ...item }))}`,
//                       }}
//                     >
//                       <button>
//                         <CiExport className="del_sale_icon" /> For sale
//                       </button>
//                     </Link>
//                     <button>
//                       <MdDeleteForever className="del_sale_icon" /> Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//               <div className="clothing-details">
//                 <p>
//                   <strong>Name:</strong> {item.name}
//                 </p>
//                 <p>
//                   <strong>Brand:</strong> {item.brand}
//                 </p>
//               </div>
//             </div>
//           ))}
//           <NaviBarFooter /> {/* הצגת הסרגל התחתון */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default MyWardrobe;


// import { useParams, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";
// import Stack from "@mui/material/Stack";

// import "../src/CSSc/CreateAd.css";
// import NaviBarFooter from "./NaviBarFooter";

// function CreateAd() {
//   const { item } = useParams();

//   console.log(item);
//   const searchParams = new URLSearchParams(window.location.search);
//   const choosenItem = JSON.parse(
//     decodeURIComponent(searchParams.get("choosenItem"))
//   );

//   console.log(choosenItem)

//   let photo = choosenItem.image;
//   let color = "red";
//   let name = choosenItem.name;
//   let phone = "0527827133";

//   const [ad, setAd] = useState({
//     price: "",
//     address: "",
//     condition: "New",
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [isAddressOk, setIsAddressOk] = useState(true);
//   const navigateTo = useNavigate();

//   function handleSubmit() {
//     if (!ad.price || !ad.address || !ad.condition) {
//       setShowModal(true);
//       return;
//     } else {
//       // Validate address format
//       const addressPattern = /^[a-zA-Z0-9\s]+,[\s]+[a-zA-Z\s]+$/; // English address, comma, space, English address
//       if (!addressPattern.test(ad.address)) {
//         setIsAddressOk(false);
//         return;
//       }
//       navigateTo("/ad", {
//         state: { ...ad, photo, color, name, phone },
//       });
//     }
//   }

//   return (
//     <>
//       <div className="ad-form">
//         <h1>Post Details</h1>
//         <div className="ad-content">
//           <div className="image-container">
//             <img src={choosenItem.image} alt={choosenItem.name} />
//           </div>
//           <h2>
//             {choosenItem.color.toUpperCase()} {choosenItem.name.toUpperCase()}
//           </h2>
//           <div className="input-group">
//             <label htmlFor="price">Price:</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={ad.price}
//               onChange={(e) => setAd({ ...ad, price: e.target.value })}
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={ad.address}
//               placeholder="Street, city"
//               onChange={(e) => setAd({ ...ad, address: e.target.value })}
//             />
//           </div>
//           {isAddressOk === false && (
//             <Stack sx={{ width: "100%" }} spacing={2}>
//               <Alert className="address_alert" severity="error">
//                 <AlertTitle>Error</AlertTitle>
//                 You must fill in the address exactly according to the following
//                 format: Street, city
//               </Alert>
//             </Stack>
//           )}
//           <div className="input-group">
//             <label htmlFor="condition">Condition:</label>
//             <select
//               id="condition"
//               name="condition"
//               value={ad.condition}
//               onChange={(e) => setAd({ ...ad, condition: e.target.value })}
//             >
//               <option value="new">New</option>
//               <option value="like new">Like New</option>
//               <option value="used">Used</option>
//             </select>
//           </div>
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       </div>
//       <NaviBarFooter />

//       {/* Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Validation Error</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Please fill in all fields.</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default CreateAd;