/* Core */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const file2Base64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString() || "");
    reader.onerror = (error) => reject(error);
  });
};

export const uploadFileAsync = createAsyncThunk(
  "api/generate",
  async (file: File) => {
    const base64file = await file2Base64(file);

    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL!,
      { image: base64file },
      {
        headers: {
          "Content-Type": "image/webp",
        },
      },
    );

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return {
      uploaded: { name: file.name, data: URL.createObjectURL(file) },
      processed: response.data,
    };
  },
);

const initialState: FilesSliceState = {
  uploadedFile: null,
  processedFile: null,
  status: "idle",
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setUploadedFile: (state, action: PayloadAction<uploadedFile>) => {
      state.uploadedFile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFileAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadFileAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.uploadedFile = action.payload.uploaded;
        state.processedFile = action.payload.processed;
      })
      .addCase(uploadFileAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

/* Types */

interface uploadedFile {
  name: string;
  data: string;
}

export interface FilesSliceState {
  uploadedFile: null | uploadedFile;
  processedFile: null | string;
  status: "idle" | "loading" | "failed";
}
