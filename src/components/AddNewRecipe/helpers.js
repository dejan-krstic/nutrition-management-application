export const mapImageResponseData = (response) => ({
  uid: response.data.asset_id,
  name: response.data.original_filename,
  status: "done",
  url: response.data.secure_url,
});

export const createImageData = (url) => ({
  uid: url,
  name: url,
  status: "done",
  url,
});

export const readImageFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
