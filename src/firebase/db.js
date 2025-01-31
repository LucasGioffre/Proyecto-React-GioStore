import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)


export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const products = []

    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    })

    return products
}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    })

    return products
}

export const getProduct = async (id) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!") //MODIFICAR
    }
}

export const newOrder= async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        console.log("Document written with ID: ", docRef.id)
        return docRef
      } catch (e) {
        console.error("Error adding document: ", e)
      }
  }