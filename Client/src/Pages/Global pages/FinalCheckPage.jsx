import { useLocation } from "react-router";

export default function FinalCheckPage() {
  const location = useLocation();

  console.log(location.contactInfoState);
  return (
    <>
      <h2>This is final chack page</h2>
      <h1>{location.state.name}</h1>
      <h1>{location.state.deliveryDate}</h1>
    </>
  );
}
