export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} can't be processed`));
}
