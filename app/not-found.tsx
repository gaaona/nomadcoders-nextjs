import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found!</h1>
    </div>
  );
}
