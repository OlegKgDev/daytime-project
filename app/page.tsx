/* Components */
import FileUploader from "./components/FileUploader";
import Hero from "./components/Hero";
import Result from "./components/Result";

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <FileUploader />
      <Result />
    </div>
  );
}

export const metadata = {
  title: "Daytime change",
};
