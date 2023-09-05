"use client";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { uploadFileAsync, filesSlice } from "@/lib/redux/slices/filesSlice";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const dispatch = useDispatch();

  const { actions } = filesSlice;
  const status = useSelector((state) => state.files.status);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    dispatch(
      actions.setUploadedFile({
        name: file.name,
        data: URL.createObjectURL(file),
      }),
    );
    setSelectedFile(file);
  };

  const uploadFile = () => {
    if (selectedFile) {
      dispatch(uploadFileAsync(selectedFile));
    }
  };

  return (
    <div className="p-4 text-center bg-white shadow-md rounded-md">
      <input
        type="file"
        onChange={handleFileChange}
        className="p-2 border rounded-md"
      />
      <button
        onClick={uploadFile}
        className="ml-4 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        disabled={status === "loading"}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
