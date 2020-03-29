import axios from 'axios';


export const getAllCategories = async () => {
  const { data } = await axios({
    method: 'GET',
    url: ''
  });

  return data;
};
