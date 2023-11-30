import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res;
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    res = { photo: photoResponse, user: userResponse };
  } catch (err) {
    res = { photo: null, user: null };
  }

  return res;
}
