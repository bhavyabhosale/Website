import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const COLLECTION_NAME = 'your-collection-name';

export const addData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
    return docRef.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    let dataList = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ ...doc.data(), id: doc.id });
    });
    return dataList;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateData = async (id, updatedData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, updatedData);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteData = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  } catch (error) {
    throw new Error(error.message);
  }
};
