import axios from "./axios";

const getImages = async () => {
  try {
    const res = await axios.get("/images");
    return res?.data;
  } catch (err) {
    return [];
  }
};

const uploadImage = async (image) => {
  try {
    let formData = new FormData();
    formData.append("image", image);
    await axios.post("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { status: true, data: "" };
  } catch (err) {
    return { status: false, data: err?.message };
  }
};

export { getImages, uploadImage };
