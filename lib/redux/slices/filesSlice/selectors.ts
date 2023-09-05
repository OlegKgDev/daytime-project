/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectUploadFile = (state: ReduxState) => state.files.uploadedFile;
