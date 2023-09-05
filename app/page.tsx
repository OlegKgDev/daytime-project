/* Components */
import FileUploader from "./components/FileUploader";
import Example from "./components/Example";
import Result from "./components/Result";

export default function IndexPage() {
  return (
    <div>
      <Example />
      <FileUploader />
      <Result />
    </div>
  );
}

export const metadata = {
  title: "Daytime change",
};
