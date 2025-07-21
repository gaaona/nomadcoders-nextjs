import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <h1>Page Not Found!</h1>
    </div>
  );
}
