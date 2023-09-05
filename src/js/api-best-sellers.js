import axios from 'axios';

export async function getTopBooks() {
  const URL_BEST = 'https://books-backend.p.goit.global/books/top-books';

  try {
    const response = await axios.get(URL_BEST);
    const data = response.data;

    // console.log('Top books:', data);
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}


// export async function getAllCategories(category) {
//   const URL_ALL = `https://books-backend.p.goit.global/books/category?category=${category}`;
//   try {
//     const response = await axios.get(URL_ALL);
//     const data = response.data;

//     // console.log(data);
//   } catch (error) {
//     console.error('Error', error);
//     throw error;
//   }
// }
