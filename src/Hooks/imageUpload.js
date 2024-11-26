import axios from "axios"

export const imageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile[0]); 
    try {
      const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
        params: {
          key: import.meta.env.VITE_IMAGEBB_API_URL, // Replace with your actual API key
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.data.url);
  
      return response.data.data.url; // Return the URL of the uploaded image
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message);
      throw new Error('Image upload failed');
    }
  };