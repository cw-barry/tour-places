import './Main.css';
import { data } from '../../helper/data';
import Card from './Card';

function Main() {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
}

// function Main() {
//   return (
//     <div className="card-container">
//       {data.map((item, index) => {
//         return (
//           <div className="cards" key={index}>
//             <div className="title">
//               <h2>{item.title}</h2>
//             </div>
//             <img src={item.image} alt={item.title} />
//             <div className="card-over">
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default Main;
